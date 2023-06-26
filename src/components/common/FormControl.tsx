import classNames from 'classnames';
import React from 'react';

export type FormControlProps = {
    label?: string;
    children: React.ReactNode;
    className?: string;
};

const FormControl = ({ children, label = '', className }: FormControlProps) => {
    return (
        <div className={classNames('block sm:flex items-center mb-4 lg:w-6/12', className)}>
            <p className="mr-4 mb-2 sm:mb-0 w-48 sm:text-right">{label ?? ''}</p>
            <div className="flex-1">{children}</div>
        </div>
    );
};

export default React.memo(FormControl);
