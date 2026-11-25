'use client';
import Text from '@/ui-kit/src/components/contents/Text/Text';
import Box from '@/ui-kit/src/components/layouts/Box/Box';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import MaxWidth from '@/ui-kit/src/components/layouts/MaxWidth/MaxWidth';
import Image from '@/ui-kit/src/components/contents/Image/Image';
import Item from '@/ui-kit/src/components/layouts/Item/Item';
import { usePathname, useRouter } from 'next/navigation';
import { DARK, PHONE, PHONE_TEL, PRIMARY, SITE_NAME, ls, paperlogy } from '@/configs/site';
import phoneIcon from '@/assets/images/hd-phone.svg';
import logo from '@/assets/images/hd-logo.png';
import search from '@/assets/images/hd-search.png';
import HoverText from '@/headful/hoverText/hoverText';

const NAV = [
    { label: '내 차 팔기', path: '/sell' },
    { label: '내 차 판매후기', path: '/review' },
];

const MOBILE_NAV = [
    { label: '메인 홈', path: '/' },
    ...NAV.map((n) => (n.path === '/review' ? { ...n, label: '고객 후기' } : n)),
];

export const scrollToId = (id: string) => {
    if (id === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }
    const el = document.getElementById(id);
    if (!el) return;
    const header = document.getElementById('site-header')?.offsetHeight ?? 0;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - header, behavior: 'smooth' });
};

const Logo = ({ size, s }: { size: 24 | 20; s?: boolean }) => (
    <Text size={size} s={s} weight={700} color={PRIMARY} style={{ ...paperlogy, ...ls(-0.02), whiteSpace: 'nowrap' }}>
        국민중고차 <span style={{ color: DARK }}>비교견적</span>
    </Text>
);

const Header = () => {
    const router = useRouter();
    const pathname = usePathname();

    const go = (target: string) => {
        if (pathname !== '/') {
            router.push('/');
            return;
        }
        scrollToId(target);
    };

    return (
        <Box id="site-header" backgroundColor="#fff" style={{ borderBottom: '1px solid #F5F5F5' }}>
            <Item desktop>
                <MaxWidth maxWidth={1260} style={{ padding: '0 20px' }}>
                    <Flex height={100} align="center" justify="space-between" width="100%">
                        <Flex align="center" gap={50}>
                            <Flex align="center" style={{ cursor: 'pointer' }} onClick={() => go('top')}>
                                <Image image={logo.src} width={250} />
                            </Flex>
                            <Flex align="center" gap={40}>
                                {NAV.map((n, idx) => (
                                    <Flex key={n.path} align="center" gap={40}>
                                        {idx > 0 && <Box width="1px" height={20} backgroundColor="#CCCCCC" />}
                                        <HoverText
                                            color={pathname.startsWith(n.path) ? '#E6AB0A' : DARK}
                                            size={22}
                                            weight={600}
                                            hoverColor="#E6AB0A"
                                            style={{ cursor: 'pointer', whiteSpace: 'nowrap' }}
                                            onClick={() => router.push(n.path)}
                                        >
                                            {n.label}
                                        </HoverText>
                                    </Flex>
                                ))}
                            </Flex>
                        </Flex>

                        <Flex direction="column" align="center" gap={8}>
                            <Flex
                                align="center"
                                gap={10}
                                onClick={() => (window.location.href = `tel:${PHONE_TEL}`)}
                                style={{ cursor: 'pointer' }}
                            >
                                <Image image={phoneIcon.src} width={20} height={20} alt="전화" />
                                <Text size={22} weight={600} color="#E6AB0A" style={ls(-0.02)}>
                                    {PHONE}
                                </Text>
                            </Flex>
                            <Image image={search.src} alt="네이버검색" height={40} />
                        </Flex>
                    </Flex>
                </MaxWidth>
            </Item>
            <Item mobile>
                <Flex height={'60px'} align="center" justify="space-between" s style={{ padding: '0 20px' }}>
                    <Image
                        image={logo.src}
                        alt="로고"
                        height={'30px'}
                        onClick={() => go('top')}
                        style={{ cursor: 'pointer' }}
                    />
                    <Flex
                        align="center"
                        gap={6}
                        s
                        onClick={() => (window.location.href = `tel:${PHONE_TEL}`)}
                        style={{ cursor: 'pointer' }}
                    >
                        <Image image={phoneIcon.src} width={'16px'} height={'16px'} alt="전화" />
                        <Text size={16} s weight={700} color="#E6AB0A">
                            {PHONE}
                        </Text>
                    </Flex>
                </Flex>
                <Flex height={'50px'} s align="center" style={{ backgroundColor: '#FFC800' }}>
                    {MOBILE_NAV.map((n, idx) => (
                        <Flex
                            key={n.path}
                            height="100%"
                            align="center"
                            justify="center"
                            onClick={() => router.push(n.path)}
                            style={{
                                flex: 1,
                                cursor: 'pointer',
                                borderLeft: idx > 0 ? '1px solid rgba(26,26,26,0.2)' : 'none',
                            }}
                        >
                            <Text
                                color={DARK}
                                s
                                size={15}
                                weight={(n.path === '/' ? pathname === '/' : pathname.startsWith(n.path)) ? 800 : 600}
                            >
                                {n.label}
                            </Text>
                        </Flex>
                    ))}
                </Flex>
            </Item>
        </Box>
    );
};

export default Header;
