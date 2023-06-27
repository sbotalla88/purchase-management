import React from 'react';

export type TableCellProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
    children?: React.ReactNode;
};

const TableCell = ({ children, ...rest }: TableCellProps) => {
    return <div {...rest}>{children ?? ''}</div>;
};

export default React.memo(TableCell);
