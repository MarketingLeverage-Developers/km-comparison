import Box from '@/ui-kit/src/components/layouts/Box/Box';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import Grid from '@/ui-kit/src/components/layouts/Grid/Grid';
import Item from '@/ui-kit/src/components/layouts/Item/Item';
import MaxWidth from '@/ui-kit/src/components/layouts/MaxWidth/MaxWidth';
import Band from './components/band';
import Left from './components/left';
import Right from './components/right';

/** S6 제값 받기 (사진 띠 + 카드 3개) */
const Section6 = () => {
    return (
        <Box backgroundColor="#FFFFFF" style={{ overflow: 'hidden' }}>
            <Item desktop>
                <Band />
                <MaxWidth maxWidth={1252} style={{ padding: 'var(--space-130) 20px' }}>
                    <Grid gridTemplateColumns="1fr 1fr" gap={30} width="100%" align="stretch">
                        <Left />
                        <Right mobile={false} />
                    </Grid>
                </MaxWidth>
            </Item>
            <Item mobile>
                <Band mobile />
                <MaxWidth maxWidth={352} style={{ padding: '0 16px' }}>
                    <Flex direction="column" gap={12} s style={{ padding: '40px 0 60px' }}>
                        <Left mobile />
                        <Right mobile />
                    </Flex>
                </MaxWidth>
            </Item>
        </Box>
    );
};

export default Section6;
