import Text from '@/ui-kit/src/components/contents/Text/Text';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';

const ServiceModalContent = () => {
    return (
        <Flex direction="column">
            <Text size={16} color="#333" style={{ lineHeight: '150%' }}>
                · LOCA X Special SE를 최초 발급한 고객의 경우 카드 발급일로부터 다음달 말일까지이용실적에 관계없이
                10,000원 할인 한도가 제공됩니다.
            </Text>
            <Text size={16} color="#333" style={{ lineHeight: '150%' }}>
                · 카드발급일 ~ 다음달 말일 기간에도 지난달(1일~말일) LOCA X Special SE 이용실적이70만원 이상 또는
                150만원 이상일 경우, 해당 이용실적에 따라 할인 한도가 제공됩니다.
            </Text>
            <Text size={16} color="#333" style={{ lineHeight: '150%' }}>
                · LOCA X Special SE로 제휴사 렌탈료 자동이체 연결 시에만 결제일 할인 혜택을 받을 수있습니다. 렌탈료
                자동납부 승인 건이 여러 건인 경우 월 할인한도 내에서 할인됩니다.
            </Text>
            <Text size={16} color="#333" style={{ lineHeight: '150%' }}>
                · 렌탈료가 렌탈료 할인 금액보다 적을 경우 렌탈료 만큼만 할인이 됩니다.
            </Text>
            <Text size={16} color="#333" style={{ lineHeight: '150%' }}>
                · 렌탈료 자동이체 신청 후 자동이체 등록된 렌탈 요금이 롯데카드에 청구되는 시점부터할인혜택을 받으실 수
                있습니다.
            </Text>{' '}
            <Text size={16} color="#333" style={{ lineHeight: '150%' }}>
                · LOCA X Special SE로 제휴사에 고객센터를 통해 자동납부 신청하시기 바랍니다
            </Text>
        </Flex>
    );
};
export default ServiceModalContent;
