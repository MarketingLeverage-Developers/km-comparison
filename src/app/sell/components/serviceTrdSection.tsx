'use client';
import { useState } from 'react';
import AccordionBar from '@/headful/accordionBar/A/accordionBar';
import Text from '@/ui-kit/src/components/contents/Text/Text';
import Box from '@/ui-kit/src/components/layouts/Box/Box';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import Item from '@/ui-kit/src/components/layouts/Item/Item';
import { DARK, ls, paperlogy } from '@/configs/site';
import { QnA, Tip } from './data';

type ListProps = {
    title: string;
    list: { title: string; content: React.ReactNode }[];
    mobile: boolean;
};

const AccordionList = ({ title, list, mobile }: ListProps) => {
    const [open, setOpen] = useState<number | null>(null);
    return (
        <Flex direction="column" gap={mobile ? 16 : 20} width="100%" s={mobile}>
            <Text color={DARK} size={mobile ? 22 : 28} s={mobile} weight={700} style={{ ...paperlogy, ...ls() }}>
                {title}
            </Text>
            <Flex direction="column" gap={10} s={mobile}>
                {list.map((el, idx) => (
                    <AccordionBar
                        key={idx}
                        title={el.title}
                        content={el.content}
                        isOpen={open === idx}
                        onToggle={() => setOpen((prev) => (prev === idx ? null : idx))}
                    />
                ))}
            </Flex>
        </Flex>
    );
};

const ServiceTrdSection = () => (
    <>
        <Item desktop>
            <Box padding={{ y: 100 }}>
                <Flex width="100%" justify="center" align="start" gap={20}>
                    <Box width={600}>
                        <AccordionList title="내 차 팔기 TIP!" list={Tip} mobile={false} />
                    </Box>
                    <Box width={600}>
                        <AccordionList title="자주하는 질문" list={QnA} mobile={false} />
                    </Box>
                </Flex>
            </Box>
        </Item>
        <Item mobile>
            <Flex direction="column" gap={50} s padding={{ x: 20, y: 50 }}>
                <AccordionList title="내 차 팔기 TIP!" list={Tip} mobile />
                <AccordionList title="자주하는 질문" list={QnA} mobile />
            </Flex>
        </Item>
    </>
);

export default ServiceTrdSection;
