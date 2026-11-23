type LandingTracking = NonNullable<Window['LandingTracking']>;

const sdkScript = () => document.querySelector<HTMLScriptElement>('script[data-landing-tracking-sdk]');

/** Register only after the inquiry API confirms success. */
export function registerInquirySuccess(token: string): void {
    const register = () => {
        try {
            window.LandingTracking?.registerInquirySuccess(token);
        } catch (error) {
            console.warn('Tracking registration failed:', error);
        }
    };

    if (window.LandingTracking) {
        register();
    } else {
        sdkScript()?.addEventListener('load', register, { once: true });
    }
}

function waitForSdk(): Promise<LandingTracking | undefined> {
    if (window.LandingTracking) return Promise.resolve(window.LandingTracking);
    const script = sdkScript();
    if (!script) return Promise.resolve(undefined);

    return new Promise((resolve) => {
        const finish = () => {
            clearTimeout(timeout);
            script.removeEventListener('load', finish);
            script.removeEventListener('error', finish);
            resolve(window.LandingTracking);
        };
        const timeout = setTimeout(finish, 3000);
        script.addEventListener('load', finish);
        script.addEventListener('error', finish);
    });
}

export async function processCompletionPage(): Promise<void> {
    let timeout: ReturnType<typeof setTimeout> | undefined;
    try {
        await Promise.race([
            waitForSdk().then((sdk) => sdk?.processCompletionPage()),
            new Promise<void>((resolve) => {
                timeout = setTimeout(resolve, 5000);
            }),
        ]);
    } catch (error) {
        console.warn('Tracking conversion failed:', error);
    } finally {
        if (timeout) clearTimeout(timeout);
    }
}
