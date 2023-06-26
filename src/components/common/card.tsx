import cn from 'classnames';
import { memo } from 'react';

type Props = {
    className?: string;
    [key: string]: unknown;
};

const Card: React.FC<Props> = ({ className, ...props }) => {
    return <div className={cn('p-5 md:p-8 rounded', className)} {...props} />;
};

export default memo(Card);
