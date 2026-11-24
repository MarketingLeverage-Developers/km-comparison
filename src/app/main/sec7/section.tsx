import Box from '@/ui-kit/src/components/layouts/Box/Box';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import Item from '@/ui-kit/src/components/layouts/Item/Item';
import MaxWidth from '@/ui-kit/src/components/layouts/MaxWidth/MaxWidth';
import Title from './components/title';
import Content from './components/content';

/** S7 실시간 상담 접수 현황 — headful barSwiper/D 세로 티커 (열마다 4줄 노출) */
const Section7 = () => {
    return (
        <Box backgroundColor="#F5F5F3">
            <Item desktop>
                <MaxWidth maxWidth={1240} style={{ padding: 'var(--space-120) 20px' }}>
                    <Flex direction="column" gap={40} align="center" width="100%">
                        <Title />
                        <Content />
                    </Flex>
                </MaxWidth>
            </Item>
            <Item mobile>
                <MaxWidth maxWidth={352} style={{ padding: '0 16px' }}>
                    <Flex direction="column" gap={25} s align="center" style={{ padding: '60px 0' }}>
                        <Title />
                        <Content mobile />
                    </Flex>
                </MaxWidth>
            </Item>
        </Box>
    );
};

export default Section7;
