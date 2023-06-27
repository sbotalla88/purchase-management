import classNames from 'classnames';
import cn from 'classnames';
import React, { InputHTMLAttributes, memo } from 'react';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    inputClassName?: string;
    labelClassName?: string;
    placeholder?: string;
    label?: string;
    note?: string;
    name: string;
    error?: string;
    type?: string;
    shadow?: boolean;
    rightIcon?: React.ReactNode;
    touched?: boolean;
    containerClass?: string;
    variant?: 'normal' | 'solid' | 'outline' | 'base';
    readonly?: boolean;
}
const classes = {
    root: 'pl-4 pr-9 h-12 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-blue-cta placeholder:text-blue-placeholder placeholder:font-normal text-base font-medium focus:outline-none',
    normal: 'bg-gray-100 border border-border-base focus:shadow focus:bg-light focus:border-accent',
    solid: 'bg-gray-100 border border-border-100 focus:bg-light focus:border-accent',
    outline: 'border border-solid border-blue-placeholder focus:border-blue-cta focus:border-[3px]',
    base: 'h-11 bg-blue-10 border border-blue-450 text-sharpBlue placeholder:text-sharpBlue font-normal !text-base',
    error: 'border border-red-500',
    shadow: 'focus:shadow',
};
const Input = React.forwardRef<HTMLInputElement, Props>(
    (
        {
            className,
            label,
            touched,
            note,
            name,
            error,
            variant = 'normal',
            shadow = false,
            type = 'text',
            inputClassName,
            labelClassName,
            containerClass,
            rightIcon,
            readOnly,
            ...rest
        },
        ref
    ) => {
        const rootClassName = cn(
            classes.root,
            {
                [classes.normal]: variant === 'normal',
                [classes.solid]: variant === 'solid',
                [classes.outline]: variant === 'outline',
                [classes.base]: variant === 'base',
            },
            {
                [classes.shadow]: shadow,
            },
            inputClassName
        );
        const _labelClassName = 'text-accent mb-2 text-base font-medium inline-block';
        return (
            <div className={className}>
                {label && (
                    <label htmlFor={name} className={cn(_labelClassName, labelClassName)}>
                        {label}
                    </label>
                )}
                <div className={cn(`relative flex items-center`, containerClass)}>
                    <input
                        id={name}
                        name={name}
                        type={type}
                        ref={ref}
                        className={classNames(
                            `${rootClassName} ${error && touched ? classes.error : ''}`,
                            readOnly ? 'bg-gray-200 focus:border' : ''
                        )}
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"
                        aria-invalid={error ? 'true' : 'false'}
                        readOnly={readOnly}
                        {...rest}
                    />
                    <div className="absolute right-3">{rightIcon}</div>
                </div>
                {note && <p className="mt-2 text-xs text-body">{note}</p>}
                {touched && error && <p className="my-2 text-xs text-start text-red-500">{error}</p>}
            </div>
        );
    }
);

export default memo(Input);
