import React from 'react';
import FormikFormControl from '@components/ui/formik-form-control';
import { useField } from 'formik';

export type withFormikFieldProps = {
    name?: string;
    // eslint-disable-next-line
    onChange?: (value: any) => void;
    // eslint-disable-next-line
    onBlur?: (e?: any) => void;
    // eslint-disable-next-line
    value?: any;
    fullValueOnChange?: boolean;
    updateOnBlur?: boolean;
};

/**
 * High Order Component for Form Fields
 *
 * @param defaultName
 * @returns
 */
export function withFormikField(defaultName?: string) {
    return function <T>(Component: React.ComponentType<T>) {
        // eslint-disable-next-line
        function ComponentWithFormik(props: Omit<T, 'value' | 'onChange' | 'onBlur'> & withFormikFieldProps, ref: any) {
            const name = props.name || defaultName || '';
            const [field, _meta, _helpers] = useField(name);

            return (
                <FormikFormControl name={name}>
                    <Component
                        ref={ref}
                        name={name}
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        {...(props as T)}
                    />
                </FormikFormControl>
            );
        }
        return React.forwardRef(ComponentWithFormik);
    };
}
