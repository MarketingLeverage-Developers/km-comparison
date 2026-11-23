'use client';
import { useState } from 'react';
import Text from '@/ui-kit/src/components/contents/Text/Text';
import { BoxSize, CSSPropertiesWithVars, FontSize, HexColor } from '@/ui-kit/src/types';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import { dimensionToVariable } from '@/ui-kit/src/utils';
import BasicModal from './BasicModal/BasicModal';
import PrivacyPolicyText from './ModalContent/PrivacyContent';

interface PrivacyAgreementProps {
    trigger?: FontSize;
    boxSize?: BoxSize | string;
    color?: HexColor;
    text?: string;
    fixed?: boolean;
}

const PrivacyAgreement = ({ trigger, boxSize, color, text = '전문보기', fixed = false }: PrivacyAgreementProps) => {
    const [open, setOpen] = useState(false);

    const cssVariables: CSSPropertiesWithVars = {
        '--box-size': dimensionToVariable(boxSize),
    };
    return (
        <Flex align="center" justify="space-between">
            <Text
                color={color}
                size={trigger}
                weight={400}
                onClick={() => setOpen(true)}
                style={{ cursor: 'pointer', textDecoration: fixed ? 'underline' : 'none' }}
            >
                {text}
            </Text>
            <BasicModal isOpen={open} onClose={() => setOpen(false)} title="개인정보 수집·이용 안내">
                <PrivacyPolicyText />
            </BasicModal>
        </Flex>
    );
};

export default PrivacyAgreement;
