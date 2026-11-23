import Text from '@/ui-kit/src/components/contents/Text/Text';
import Item from '@/ui-kit/src/components/layouts/Item/Item';
import { DARK, PRIMARY, ls, paperlogy } from '@/configs/site';

type Props = {
    /** [일반, 강조] 순서 — highlightFirst 면 강조가 앞 */
    plain: string;
    accent: string;
    highlightFirst?: boolean;
    size?: 40 | 35;
};

/** 섹션 제목: Paperlogy ExtraBold, 강조어 노란색 */
const SectionTitle = ({ plain, accent, highlightFirst, size = 40 }: Props) => {
    const parts = highlightFirst
        ? [
              { t: accent, c: PRIMARY },
              { t: plain, c: DARK },
          ]
        : [
              { t: plain, c: DARK },
              { t: accent, c: PRIMARY },
          ];
    const render = (mobile: boolean) => (
        <Text
            size={mobile ? 24 : size}
            s={mobile}
            weight={800}
            align="center"
            style={{ ...paperlogy, ...ls(), lineHeight: 1.3, display: 'block' }}
        >
            {parts.map((p, i) => (
                <span key={i} style={{ color: p.c }}>
                    {i > 0 ? ' ' : ''}
                    {p.t}
                </span>
            ))}
        </Text>
    );
    return (
        <>
            <Item desktop>{render(false)}</Item>
            <Item mobile>{render(true)}</Item>
        </>
    );
};

export default SectionTitle;
