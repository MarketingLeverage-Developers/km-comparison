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
import dividerIcon from '@/assets/images/nav-divider.svg';
import naverLogo from '@/assets/images/naver.png';
import triangleIcon from '@/assets/images/hd-triangle.svg';
import { Fragment } from 'react';

const NAV = [
    { label: '내 차 팔기', target: 'top' },
    { label: '내 차 구입', target: 'steps' },
    { label: '내 차 판매후기', target: 'review' },
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
                            <span style={{ cursor: 'pointer' }} onClick={() => go('top')}>
                                <Logo size={24} />
                            </span>
                            <Flex align="center" gap={40}>
                                {NAV.map((n, i) => (
                                    <Fragment key={n.label}>
                                        {i > 0 && <Image image={dividerIcon.src} height={'20px'} alt="" />}
                                        <Text
                                            size={20}
                                            weight={600}
                                            color={DARK}
                                            style={{ ...ls(-0.02), cursor: 'pointer', whiteSpace: 'nowrap' }}
                                            onClick={() => go(n.target)}
                                        >
                                            {n.label}
                                        </Text>
                                    </Fragment>
                                ))}
                            </Flex>
                        </Flex>
                        <Flex direction="column" align="center" gap={8}>
                            <a href={`tel:${PHONE_TEL}`} style={{ textDecoration: 'none' }}>
                                <Flex align="center" gap={10}>
                                    <Image image={phoneIcon.src} width={'19px'} height={'19px'} alt="전화" />
                                    <Text size={22} weight={600} color="#E6AB0A" style={ls(-0.02)}>
                                        {PHONE}
                                    </Text>
                                </Flex>
                            </a>
                            <Box
                                width={'381px'}
                                height={40}
                                backgroundColor="#fff"
                                borderColor="#04C75C"
                                borderWeight={2}
                                boxSizing="border-box"
                            >
                                <Flex align="center" justify="space-between" height="100%" padding={{ x: 12 }}>
                                    <Flex align="center" gap={10}>
                                        <span
                                            style={{
                                                position: 'relative',
                                                display: 'block',
                                                width: 56,
                                                height: 12,
                                                overflow: 'hidden',
                                            }}
                                        >
                                            <img
                                                src={naverLogo.src}
                                                alt="NAVER"
                                                style={{
                                                    position: 'absolute',
                                                    width: '108.16%',
                                                    height: '220.8%',
                                                    left: '-4.08%',
                                                    top: '-50.4%',
                                                    maxWidth: 'none',
                                                }}
                                            />
                                        </span>
                                        <span style={{ width: 1, height: 18, background: '#D9D9D9' }} />
                                        <Text size={16} weight={500} color={DARK} style={{ ...ls(-0.02), whiteSpace: 'nowrap' }}>
                                            <b style={{ color: '#E6AB0A', fontWeight: 700 }}>{SITE_NAME}</b>을 검색해보세요!
                                        </Text>
                                    </Flex>
                                    <Image image={triangleIcon.src} width={'10px'} alt="" style={{ transform: 'rotate(180deg)' }} />
                                </Flex>
                            </Box>
                        </Flex>
                    </Flex>
                </MaxWidth>
            </Item>
            <Item mobile>
                <Flex height={'60px'} align="center" justify="space-between" s style={{ padding: '0 16px' }}>
                    <span style={{ cursor: 'pointer' }} onClick={() => go('top')}>
                        <Logo size={20} s />
                    </span>
                    <a href={`tel:${PHONE_TEL}`} style={{ textDecoration: 'none' }}>
                        <Flex align="center" gap={6} s>
                            <Image image={phoneIcon.src} width={'16px'} height={'16px'} alt="전화" />
                            <Text size={16} s weight={700} color="#E6AB0A">
                                {PHONE}
                            </Text>
                        </Flex>
                    </a>
                </Flex>
            </Item>
        </Box>
    );
};

export default Header;
