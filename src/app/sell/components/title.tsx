import Text from '@/ui-kit/src/components/contents/Text/Text';
import Box from '@/ui-kit/src/components/layouts/Box/Box';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import Item from '@/ui-kit/src/components/layouts/Item/Item';
import { DARK, SITE_NAME, ls, paperlogy } from '@/configs/site';

type Props = {
    title: string;
    children: React.ReactNode;
};

export const PageTitle = ({ title, children }: Props) => (
    <>
        <Item desktop>
            <Box padding={{ t: 50, b: 20 }}>
                <Flex direction="column" align="center" gap={15}>
                    <Text color={DARK} size={38} weight={800} style={{ ...paperlogy, ...ls() }}>
                        {title}
                    </Text>
                    <Text color="#777777" size={18} weight={400} align="center" style={{ lineHeight: '24px' }}>
                        {children}
                    </Text>
                </Flex>
            </Box>
        </Item>
        <Item mobile>
            <Flex direction="column" align="center" gap={10} s padding={{ t: 36, b: 20, x: 20 }}>
                <Text color={DARK} size={26} s weight={800} style={{ ...paperlogy, ...ls() }}>
                    {title}
                </Text>
                <Text color="#777777" size={14} s weight={400} align="center" style={{ lineHeight: '20px' }}>
                    {children}
                </Text>
            </Flex>
        </Item>
    </>
);

const SellPageTitle = () => (
    <PageTitle title="내 차 팔기">
        번거롭고 까다로운 내차팔기,
        <br /> {SITE_NAME}이 쉽고 간편하게 도와드리겠습니다.
    </PageTitle>
);

export default SellPageTitle;
