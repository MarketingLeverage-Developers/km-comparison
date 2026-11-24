import Box from '@/ui-kit/src/components/layouts/Box/Box';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import Item from '@/ui-kit/src/components/layouts/Item/Item';
import MaxWidth from '@/ui-kit/src/components/layouts/MaxWidth/MaxWidth';
import Title from './components/title';
import Content from './components/content';

/** S5 고객 후기 (#review) — PC 3개 / MO 가로 스크롤(최대 9개) */
const Section5 = () => {
    return (
        <Box id="review" backgroundColor="#F5F5F3">
            <Item desktop>
                <MaxWidth maxWidth={1260} style={{ padding: 'var(--space-100) 20px var(--space-130)' }}>
                    <Flex direction="column" gap={50} align="center" width="100%">
                        <Title />
                        <Content />
                    </Flex>
                </MaxWidth>
            </Item>
            <Item mobile>
                <Flex direction="column" gap={25} s align="center" style={{ padding: '60px 0' }}>
                    <Title />
                    <Content mobile />
                </Flex>
            </Item>
        </Box>
    );
};

export default Section5;
