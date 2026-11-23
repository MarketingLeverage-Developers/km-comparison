'use client';
import Box from '@/ui-kit/src/components/layouts/Box/Box';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import Item from '@/ui-kit/src/components/layouts/Item/Item';
import { IoClose } from 'react-icons/io5';
import { useModal } from '@/headless/Modal/Modal';
import { FormProvider } from '../formProvider';
import MainForm from './mainForm';

const closeStyle: React.CSSProperties = { position: 'absolute', right: 10, top: 10, zIndex: 50, cursor: 'pointer' };

/** 빠른 문의 모달 — 모달마다 독립 폼 상태 (inquireLocation: 메인-모달) */
const ModalForm = () => {
    const { closeModal } = useModal();
    return (
        <FormProvider inquireLocation="메인-모달">
            <Item desktop>
                <Box width={'400px'} style={{ position: 'relative' }} backgroundColor="transparent">
                    <Flex style={closeStyle} onClick={() => closeModal()}>
                        <IoClose color="#1A1A1A" size={28} />
                    </Flex>
                    <MainForm />
                </Box>
            </Item>
            <Item mobile>
                <Box width={'320px'} style={{ position: 'relative' }} backgroundColor="transparent">
                    <Flex style={closeStyle} onClick={() => closeModal()}>
                        <IoClose color="#1A1A1A" size={26} />
                    </Flex>
                    <MainForm />
                </Box>
            </Item>
        </FormProvider>
    );
};

export default ModalForm;
