'use client';
import styles from './PrivacyCheckBox.module.scss';
import { CSSPropertiesWithVars, FontSize, HexColor } from '@/ui-kit/src/types';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import Item from '@/ui-kit/src/components/layouts/Item/Item';
import Text from '@/ui-kit/src/components/contents/Text/Text';

interface PrivacyCheckBoxProps {
    color?: HexColor;
    size?: FontSize;
    checked: boolean;
    boxSize?: FontSize;
    onChange: (checked: boolean) => void;
    style?: React.CSSProperties;
    fixed?: boolean;
}

const PrivacyCheckBox = ({ checked, onChange, size, color, boxSize, style, fixed = false }: PrivacyCheckBoxProps) => {
    const cssVariables: CSSPropertiesWithVars = {
        '--box-size': typeof boxSize === 'number' ? `${boxSize}px` : boxSize,
    };

    // fixed 상태일 때 스타일 클래스만 조건부로 추가
    const checkboxClassName = `${styles.CustomCheckbox} ${fixed ? styles.FixedState : ''}`;

    return (
        <Flex align="center" style={{ ...style }}>
            <label className={`${styles.CheckboxWrapper} ${styles.Privacy}`}>
                {/* disabled 속성 없이 기능은 항상 동일하게 유지 */}
                <input type="checkbox" checked={checked} onChange={() => onChange(!checked)} />
                <span style={cssVariables} className={checkboxClassName}>
                    <i className="xi-check"></i>
                </span>
                {fixed ? (
                    <Text color={color} size={size} weight={400}>
                        개인정보 수집 및 이용 안내 동의{' '}
                        <Text color={color} size={size} weight={600}>
                            (필수)
                        </Text>
                    </Text>
                ) : (
                    <Item desktop>
                        <Text size={size} color={color} weight={400}>
                            개인정보 수집 및 이용 안내 동의(필수)
                        </Text>
                    </Item>
                )}
                <Item mobile>
                    <Text color={color} weight={400}>
                        개인정보 수집/이용 동의
                    </Text>
                </Item>
            </label>
        </Flex>
    );
};

export default PrivacyCheckBox;
