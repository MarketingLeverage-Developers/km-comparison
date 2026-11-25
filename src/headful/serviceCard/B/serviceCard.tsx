import React from 'react';
import classNames from 'classnames';
import styles from './serviceCard.module.scss';
import Flex from '@/ui-kit/src/components/layouts/Flex/Flex';
import Image from '@/ui-kit/src/components/contents/Image/Image';

export interface ServiceCardProps {
    number?: string;
    content?: React.ReactNode | string;
    title?: React.ReactNode | string;
    image: string;
    index?: number;
    hightlight?: React.ReactNode | string;
}

const ServiceCardB = ({ number, content, image, index, title, hightlight }: ServiceCardProps) => {
    const imgWrapperClass = classNames(styles.ImgWrapper, {
        [styles.ImgWrapper1]: index === 0,
        [styles.ImgWrapper2]: index === 1,
        [styles.ImgWrapper3]: index === 2,
        [styles.ImgWrapper4]: index === 3,
        [styles.ImgWrapper5]: index === 4,
        [styles.ImgWrapper6]: index === 5,
    });

    return (
        <div className={styles.container}>
            <Flex direction="column" gap={15}>
                <div className={styles.Number}>STEP 0{number}</div>
                {title}
                <Flex direction="column">
                    {content}
                    {hightlight && hightlight}
                </Flex>
            </Flex>
            <div className={imgWrapperClass}>
                <Image image={image} alt="img" />
            </div>
        </div>
    );
};

export default ServiceCardB;
