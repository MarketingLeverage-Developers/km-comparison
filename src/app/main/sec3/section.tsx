import Box from '@/ui-kit/src/components/layouts/Box/Box';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import MaxWidth from '@/ui-kit/src/components/layouts/MaxWidth/MaxWidth';
import Title from './components/title';
import Content from './components/content';

/** S3 실시간 카운팅 */
const Section3 = () => {
    return (
        <Box backgroundColor="#FFFFFF" padding={{ t: 120, b: 20 }}>
            <MaxWidth maxWidth={1240} style={{ padding: '0 20px' }}>
                <Flex direction="column" gap={30} align="center" width="100%">
                    <Title />
                    <Content />
                </Flex>
            </MaxWidth>
        </Box>
    );
};

export default Section3;
