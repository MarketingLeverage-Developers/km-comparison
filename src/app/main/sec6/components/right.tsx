import Text from '@/ui-kit/src/components/contents/Text/Text';
import Box from '@/ui-kit/src/components/layouts/Box/Box';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import { ls, paperlogy } from '@/configs/site';
import bgPerson from '@/assets/images/bg-person.webp';

const Right = ({ mobile }: { mobile: boolean }) => (
    <Box
        backgroundImage={bgPerson.src}
        backgroundColor="#1A1A1A"
        radius={mobile ? 16 : 20}
        height={mobile ? undefined : '100%'}
        style={{ overflow: 'hidden', ...(mobile ? { aspectRatio: '592 / 512' } : {}) }}
    >
        <Flex
            direction="column"
            gap={10}
            s={mobile}
            style={{
                position: 'absolute',
                left: mobile ? 20 : 'calc(37 / 592 * 100%)',
                bottom: mobile ? 20 : 'calc(35 / 512 * 100%)',
            }}
        >
            <Text size={mobile ? 22 : 32} s={mobile} weight={800} color="#fff" style={{ ...paperlogy, ...ls(), lineHeight: 1.1 }}>
                시세만 알아보셔도 충분합니다!
            </Text>
            <Text size={mobile ? 14 : 20} s={mobile} color="#fff" style={{ ...ls(), lineHeight: 1.4 }}>
                당장 판매 계획이 없으셔도 괜찮습니다.
                <br />
                현재 내 차의 정확한 가치만 먼저 확인해 보세요.
            </Text>
        </Flex>
    </Box>
);

export default Right;
