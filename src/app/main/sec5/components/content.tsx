'use client';
import Box from '@/ui-kit/src/components/layouts/Box/Box';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import Grid from '@/ui-kit/src/components/layouts/Grid/Grid';
import ReviewCard from './reviewCard';
import { REVIEWS as reviews } from './reviews';

const scrollerStyle: React.CSSProperties = {
    overflowX: 'auto',
    scrollSnapType: 'x mandatory',
    scrollbarWidth: 'none',
    padding: '10px 16px 6px 26px',
    boxSizing: 'border-box',
};

const Content = ({ mobile = false }: { mobile?: boolean }) => {
    if (!mobile) {
        return (
            <Grid gridTemplateColumns="repeat(3, 1fr)" gap={20} width="100%">
                {reviews.slice(0, 3).map((r) => (
                    <ReviewCard key={r.key} r={r} mobile={false} />
                ))}
            </Grid>
        );
    }
    return (
        <Flex gap={14} s width="100%" style={scrollerStyle}>
            {reviews.map((r) => (
                <Box key={r.key} style={{ flex: '0 0 82%', scrollSnapAlign: 'center' }}>
                    <ReviewCard r={r} mobile />
                </Box>
            ))}
        </Flex>
    );
};

export default Content;
