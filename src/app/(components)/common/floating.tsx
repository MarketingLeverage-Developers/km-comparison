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

const circle: React.CSSProperties = {
    width: 70,
    height: 70,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    border: 0,
    padding: 0,
};

const Floating = () => {
    return (
        <ModalA>
            <Item desktop>
                <Fixed right={58} bottom={130}>
                    <Flex direction="column" gap={15}>
                        <a href={`tel:${PHONE_TEL}`} aria-label="전화 상담" style={{ ...circle, background: PRIMARY }}>
                            <Text size={24} color={DARK}>
                                <MdCall />
                            </Text>
                        </a>
                        <ModalA.Trigger>
                            <button type="button" aria-label="빠른 문의 열기" style={{ ...circle, background: '#E6AB0A' }}>
                                <Text size={16} weight={700} color={DARK} align="center" style={{ lineHeight: 1.2 }}>
                                    빠른
                                    <br />
                                    문의
                                </Text>
                            </button>
                        </ModalA.Trigger>
                        <ScrollUpbutton bgColor="transparent" Content={<Image image={topIcon.src} width={'70px'} alt="맨 위로" />} />
                    </Flex>
                </Fixed>
            </Item>
            <Item mobile>
                <Fixed right={16} bottom={76}>
                    <Box width={'50px'} height={'50px'} style={{ overflow: 'hidden', borderRadius: '50%' }}>
                        <span
                            style={{ display: 'block', width: 50, height: 50, cursor: 'pointer' }}
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            <Image image={topIcon.src} width={'50px'} alt="맨 위로" />
                        </span>
                    </Box>
                </Fixed>
            </Item>
            <NextPortal>
                <ModalA.Backdrop />
                <ModalA.Content title="빠른 문의" width="fit-content">
                    <ModalForm />
                </ModalA.Content>
            </NextPortal>
        </ModalA>
    );
};

export default Floating;
