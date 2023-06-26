import FormikFormControl from '@components/ui/formik-form-control';
import { useField } from 'formik';
import { forwardRef } from 'react';

export type withFormikCustomProps = {
    name?: string;
    // eslint-disable-next-line
    onChange?: (value: any) => void;
    // eslint-disable-next-line
    onBlur?: (e?: any) => void;
    // eslint-disable-next-line
    value?: any;
    fullValueOnChange?: boolean;
    updateOnBlur?: boolean;
    touched?: boolean;
    errorClass?: string;
};

/**
 * High Order Component for Form Fields
 *
 * @param defaultName
 * @returns
 */
export function withFormikCustom(defaultName = '') {
    return function <T>(Component: React.ComponentType<T>) {
        function ComponentWithFormik(
            props: Omit<T, 'value' | 'onChange' | 'onBlur'> & withFormikCustomProps,
            // eslint-disable-next-line
            ref: any
        ) {
            const { name = defaultName, touched = true, errorClass = '' } = props;
            const [field, _meta, helpers] = useField(name);

            return (
                <FormikFormControl name={name} touched={touched} errorClass={errorClass}>
                    <Component
                        ref={ref}
                        name={name}
                        value={field.value}
                        // eslint-disable-next-line
                        onChange={(v: any) => {
                            helpers.setTouched(true);
                            helpers.setValue(v);
                        }}
                        {...(props as T)}
                    />
                </FormikFormControl>
            );
        }
        return forwardRef(ComponentWithFormik);
    };
}
