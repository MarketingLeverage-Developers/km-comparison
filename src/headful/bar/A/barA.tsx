import styles from './barA.module.scss';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import Box from '@/ui-kit/src/components/layouts/Box/Box';
import Text from '@/ui-kit/src/components/contents/Text/Text';

type BarAProps = {
    New?: string;
    Content?: string;
    Status?: string;
};

const BarA = ({ New, Content, Status }: BarAProps) => {
    return (
        <div className={styles.Container}>
            <Flex width="100%" justify="space-between" align="center">
                <Flex gap={10} align="center">
                    <Box padding={{ x: 10, y: 10 }} backgroundColor="#FFC800" radius={6}>
                        <Text color="#1A1A1A" size={16} weight={700}>
                            {New}
                        </Text>
                    </Box>
                    <Text color="#121212" size={18} weight={600}>
                        {Content}
                    </Text>
                </Flex>
                <Text color="#E6AB0A" size={18} weight={600}>
                    {Status}
                </Text>
            </Flex>
        </div>
    );
};
export default BarA;
