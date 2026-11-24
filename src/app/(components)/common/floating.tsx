'use client';
import Text from '@/ui-kit/src/components/contents/Text/Text';
import Image from '@/ui-kit/src/components/contents/Image/Image';
import Fixed from '@/ui-kit/src/components/layouts/Fixed/Fixed';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import Box from '@/ui-kit/src/components/layouts/Box/Box';
import Item from '@/ui-kit/src/components/layouts/Item/Item';
import ScrollUpbutton from '@/ui-kit/src/components/templates/floatingButton/scrollUpButton/A/scrollUpButton';
import ModalA from '@/headful/modalA/A/ModalA';
import NextPortal from '@/headless/NextPortal/NextPortal';
import { MdCall } from 'react-icons/md';
import { DARK, PHONE_TEL, PRIMARY } from '@/configs/site';
import topIcon from '@/assets/images/float-top.svg';
import ModalForm from './modalForm';

const callPhone = () => {
    window.location.href = `tel:${PHONE_TEL}`;
};

const Floating = () => {
    return (
        <ModalA>
            <Item desktop>
                <Fixed right={44} bottom={110}>
                    <Flex direction="column" gap={15}>
                        <Box
                            width="70px"
                            height="70px"
                            radius="50%"
                            backgroundColor={PRIMARY}
                            aria-label="전화 상담"
                            onClick={callPhone}
                            style={{ cursor: 'pointer' }}
                        >
                            <Flex justify="center" align="center" height="100%">
                                <Text size={24} color={DARK}>
                                    <MdCall />
                                </Text>
                            </Flex>
                        </Box>
                        <ModalA.Trigger>
                            <Box
                                width="70px"
                                height="70px"
                                radius="50%"
                                backgroundColor="#E6AB0A"
                                aria-label="빠른 문의 열기"
                                style={{ cursor: 'pointer' }}
                            >
                                <Flex justify="center" align="center" height="100%">
                                    <Text
                                        size={16}
                                        weight={700}
                                        color={DARK}
                                        align="center"
                                        style={{ lineHeight: 1.2 }}
                                    >
                                        빠른
                                        <br />
                                        문의
                                    </Text>
                                </Flex>
                            </Box>
                        </ModalA.Trigger>
                        <ScrollUpbutton
                            bgColor="transparent"
                            Content={<Image image={topIcon.src} width={'70px'} alt="맨 위로" />}
                        />
                    </Flex>
                </Fixed>
            </Item>
            <Item mobile>
                <Fixed right={16} bottom={76}>
                    <Box
                        width={'50px'}
                        height={'50px'}
                        radius="50%"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        style={{ overflow: 'hidden', cursor: 'pointer' }}
                    >
                        <Image image={topIcon.src} width={'50px'} alt="맨 위로" style={{ display: 'block' }} />
                    </Box>
                </Fixed>
            </Item>
            <NextPortal>
                <ModalA.Backdrop />
                <ModalA.Content title="빠른 문의" width="400px">
                    <ModalForm />
                </ModalA.Content>
            </NextPortal>
        </ModalA>
    );
};

export default Floating;
