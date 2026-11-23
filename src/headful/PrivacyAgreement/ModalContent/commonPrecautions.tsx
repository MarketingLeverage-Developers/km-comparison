import Text from '@/ui-kit/src/components/contents/Text/Text';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';

const CommonPrecautions = () => {
    return (
        <Flex direction="column">
            <Text size={16} color="#333" style={{ lineHeight: '150%' }}>
                · 렌탈료 결제일 할인 서비스와 장기할부 캐시백 서비스는 중복으로 혜택이 제공되지 않습니다.
            </Text>
            <Text size={16} color="#333" style={{ lineHeight: '150%' }}>
                · LOCA X Special SE는 지난달(1일~말일) 일시불, 할부 이용실적에 따라 이번달(1일~말일) 결제일 할인 또는
                캐시백이 적용됩니다. 할인 결제 건 이용일을 기준으로 전체 이용금액이 실적에 합산됩니다.
            </Text>
            <Text size={16} color="#333" style={{ lineHeight: '150%' }}>
                · 해외 이용금액 및 수수료 결제 건(예: 후불교통 이용건 등)의 경우, 롯데카드에 접수되는 일자를 기준으로
                이용실적에 포함됩니다.
            </Text>
            <Text size={16} color="#333" style={{ lineHeight: '150%' }}>
                · 취소 매출은 집계 승인된 달의 이용실적에서 제외되며, 지난달 매출을 취소하는 경우 지난달 실적 및 이번 달
                혜택이 변경될 수 있습니다.
            </Text>
            <Text size={16} color="#333" style={{ lineHeight: '150%' }}>
                (예시: 6월에 5월 승인 취소 시, 5월 이용실적에서 제외)
            </Text>
        </Flex>
    );
};
export default CommonPrecautions;
