'use client';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Text from '@/ui-kit/src/components/contents/Text/Text';
import Image from '@/ui-kit/src/components/contents/Image/Image';
import Fixed from '@/ui-kit/src/components/layouts/Fixed/Fixed';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import Box from '@/ui-kit/src/components/layouts/Box/Box';
import Item from '@/ui-kit/src/components/layouts/Item/Item';
import { MdCall } from 'react-icons/md';
import { DARK, PHONE_TEL, PRIMARY } from '@/configs/site';
import topIcon from '@/assets/images/float-top.svg';
import { FormProvider } from '../formProvider';
import { IoClose } from 'react-icons/io5';
import MainForm from './mainForm';

const FORM_PAGES = ['/', '/sell'];

const callPhone = () => {
    window.location.href = `tel:${PHONE_TEL}`;
};

const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

const RoundButton = ({
    size,
    color,
    label,
    onClick,
    children,
}: {
    size: string;
    color: string;
    label: string;
    onClick: () => void;
    children: React.ReactNode;
}) => (
    <Box
        width={size}
        height={size}
        radius="50%"
        backgroundColor={color as `#${string}`}
        aria-label={label}
        onClick={onClick}
        boxShadow="0px 4px 10px 0px rgba(0,0,0,0.15)"
        style={{ cursor: 'pointer' }}
    >
        <Flex justify="center" align="center" height="100%">
            {children}
        </Flex>
    </Box>
);

const Floating = () => {
    const router = useRouter();
    const pathname = usePathname();
    const isMain = pathname === '/';
    const [isOpen, setIsOpen] = useState(false);
    const [dismissed, setDismissed] = useState(false);

    useEffect(() => {
        setDismissed(false);
        setIsOpen(!isMain);
    }, [isMain]);

    useEffect(() => {
        if (!isMain || dismissed) return;
        const handleScroll = () => {
            const hero = document.getElementById('hero');
            if (!hero) return;
            const header = document.getElementById('site-header')?.offsetHeight ?? 0;
            setIsOpen(hero.getBoundingClientRect().bottom <= header);
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMain, dismissed]);

    const closeForm = () => {
        setIsOpen(false);
        setDismissed(true);
    };

    const toggleForm = () => {
        setDismissed(true);
        setIsOpen((v) => !v);
    };

    const goForm = () => {
        if (FORM_PAGES.includes(pathname)) scrollTop();
        else router.push('/');
    };

    const renderButtons = (mobile: boolean) => {
        const size = mobile ? '56px' : '70px';
        return (
            <Flex direction="column" gap={mobile ? 10 : 15} s={mobile}>
                <RoundButton size={size} color={PRIMARY} label="전화 상담" onClick={callPhone}>
                    <Text size={mobile ? 22 : 24} s={mobile} color={DARK}>
                        <MdCall />
                    </Text>
                </RoundButton>
                <RoundButton size={size} color="#E6AB0A" label="빠른 문의" onClick={mobile ? goForm : toggleForm}>
                    <Text
                        size={mobile ? 13 : 16}
                        s={mobile}
                        weight={700}
                        color={DARK}
                        align="center"
                        style={{ lineHeight: 1.2 }}
                    >
                        빠른
                        <br />
                        문의
                    </Text>
                </RoundButton>
                <RoundButton size={size} color="#3A3A3A" label="맨 위로" onClick={scrollTop}>
                    <Image image={topIcon.src} width={size} alt="맨 위로" style={{ display: 'block' }} />
                </RoundButton>
            </Flex>
        );
    };

    return (
        <>
            <Item desktop>
                {isOpen && (
                    <Fixed right={170} bottom={100}>
                        <FormProvider
                            inquireLocation={isMain ? '메인-모달' : '서브-모달'}
                            conversionPage={isMain ? '메인' : '서브'}
                        >
                            <Box width="392px" style={{ position: 'relative' }}>
                                <Flex
                                    onClick={closeForm}
                                    aria-label="닫기"
                                    style={{ position: 'absolute', top: 10, right: 10, zIndex: 5, cursor: 'pointer' }}
                                >
                                    <IoClose color={DARK} size={26} />
                                </Flex>
                                <MainForm />
                            </Box>
                        </FormProvider>
                    </Fixed>
                )}
                <Fixed right={80} bottom={110}>
                    {renderButtons(false)}
                </Fixed>
            </Item>
            <Item mobile>
                <Fixed right={16} bottom={30}>
                    {renderButtons(true)}
                </Fixed>
            </Item>
        </>
    );
};

export default Floating;
