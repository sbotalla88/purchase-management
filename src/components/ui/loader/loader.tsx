import styles from './loader.module.css';
import cn from 'classnames';
import { memo } from 'react';

interface Props {
    isLoading?: boolean;
    className?: string;
    text?: string;
    showText?: boolean;
    simple?: boolean;
    fullHeight?: boolean;
}

const Loader = (props: Props) => {
    const { className, showText = true, text = 'Loading...', isLoading = true, simple, fullHeight = true } = props;

    if (!isLoading) {
        return null;
    }

    return (
        <>
            {simple ? (
                <div className={cn(className, styles.simple_loading)} />
            ) : (
                <div
                    className={cn('w-full flex flex-col items-center justify-center', className)}
                    style={{ height: fullHeight ? 'calc(100vh - 200px)' : 'auto' }}
                >
                    <div className={styles.loading} />

                    {showText && <h3 className="text-lg font-semibold text-body italic">{text}</h3>}
                </div>
            )}
        </>
    );
};

export default memo(Loader);
