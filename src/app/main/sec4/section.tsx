import Box from '@/ui-kit/src/components/layouts/Box/Box';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import Item from '@/ui-kit/src/components/layouts/Item/Item';
import MaxWidth from '@/ui-kit/src/components/layouts/MaxWidth/MaxWidth';
import Title from './components/title';
import Content from './components/content';

/** S4 5단계 절차 (#steps) */
const Section4 = () => {
    return (
        <Box id="steps" backgroundColor="#FFFFFF">
            <Item desktop>
                <MaxWidth maxWidth={1160} style={{ padding: 'var(--space-100) 20px' }}>
                    <Flex direction="column" gap={45} align="center" width="100%">
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

export default Section4;
