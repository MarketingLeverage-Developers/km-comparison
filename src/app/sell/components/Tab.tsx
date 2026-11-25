import Text from '@/ui-kit/src/components/contents/Text/Text';
import Box from '@/ui-kit/src/components/layouts/Box/Box';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import Item from '@/ui-kit/src/components/layouts/Item/Item';
import { DARK } from '@/configs/site';

export interface TabProps {
    service: boolean;
    setService: React.Dispatch<React.SetStateAction<boolean>>;
}

const tabs = [
    { label: '실시간 상담현황', value: false },
    { label: '내 차 팔기 서비스', value: true },
];

const Tab = ({ service, setService }: TabProps) => {
    const renderTabs = (mobile: boolean) =>
        tabs.map((tab) => {
            const active = service === tab.value;
            return (
                <Box
                    key={tab.label}
                    width="50%"
                    height={mobile ? '40px' : 65}
                    radius={5}
                    backgroundColor={active ? '#FFC800' : 'transparent'}
                    boxShadow={active ? '0px 4px 8px 0px #0000000F' : 'none'}
                    onClick={() => setService(tab.value)}
                    style={{ cursor: 'pointer' }}
                >
                    <Flex width="100%" height="100%" justify="center" align="center">
                        <Text color={DARK} size={mobile ? 15 : 24} s={mobile} weight={active ? 700 : 500}>
                            {tab.label}
                        </Text>
                    </Flex>
                </Box>
            );
        });

    return (
        <>
            <Item desktop>
                <Flex justify="center" width="100%">
                    <Box
                        width={500}
                        height={85}
                        padding={10}
                        backgroundColor="#F1F2F5"
                        boxShadow="0px 2px 2px 0px #00000017"
                        radius={10}
                    >
                        <Flex width="100%" justify="space-between">
                            {renderTabs(false)}
                        </Flex>
                    </Box>
                </Flex>
            </Item>
            <Item mobile>
                <Flex justify="center" width="100%">
                    <Box
                        width="300px"
                        height="54px"
                        backgroundColor="#F1F2F5"
                        boxShadow="0px 2px 2px 0px #00000017"
                        radius={10}
                        style={{ padding: '7px', boxSizing: 'border-box' }}
                    >
                        <Flex width="100%" justify="space-between">
                            {renderTabs(true)}
                        </Flex>
                    </Box>
                </Flex>
            </Item>
        </>
    );
};

export default Tab;
