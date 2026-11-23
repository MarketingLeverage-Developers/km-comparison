import styles from './slidingarrows.module.scss';

const SlidingArrows = () => {
    return (
        <div className={styles.arrowContainer}>
            <span className={styles.arrow}>▶</span>
            <span className={styles.arrow}>▶</span>
            <span className={styles.arrow}>▶</span>
        </div>
    );
};

export default SlidingArrows;
