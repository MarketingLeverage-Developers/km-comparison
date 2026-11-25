import React from 'react';
import Pagination from '@/headless/Pagination/Pagination';
import styles from './BasicPagination.module.scss';

import prev from '@/assets/images/next.svg';
import next from '@/assets/images/prev.svg';
import end from '@/assets/images/end.svg';
import start from '@/assets/images/start.svg';

type ValueType = {
    page: number;
    size: number;
    total: number;
};

type BasicPaginationProps = {
    value: ValueType;
    onChange?: (newValue: ValueType) => void;
};

const BasicPagination = ({ value, onChange }: BasicPaginationProps) => {
    return (
        <Pagination defaultValue={value}>
            <Pagination.FastPrev onFastPrevClick={onChange} className={styles.Button}>
                <img src={start.src} alt="왼쪽 꺽쇠 2개 있는 처음가기 아이콘" />
            </Pagination.FastPrev>
            <Pagination.Prev className={styles.Button} onPrevClick={onChange}>
                <img src={next.src} alt="꺽쇠 1개 있는 이전 페이지 아이콘" />
            </Pagination.Prev>
            <Pagination.Pages
                onPagesClick={onChange}
                className={`${styles.Button} ${styles.Pages}`}
                activeClassName={styles.active}
            />
            <Pagination.Next onNextClick={onChange} className={styles.Button}>
                <img src={prev.src} alt="꺽쇠 1개 있는 다음 페이지 아이콘" />
            </Pagination.Next>
            <Pagination.FastNext onFastNextClick={onChange} className={styles.Button}>
                <img src={end.src} alt="오른쪽 꺽쇠 2개 있는 끝에 가기 아이콘" />
            </Pagination.FastNext>
        </Pagination>
    );
};

export default BasicPagination;
