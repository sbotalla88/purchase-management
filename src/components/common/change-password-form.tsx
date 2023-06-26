import { connect } from 'react-redux';

import Button from '@components/ui/button';
import PasswordInput from '@components/ui/password-input';

import { useForm } from 'react-hook-form';
import { yupResolver } from '../../../node_modules/@hookform/resolvers/yup/dist/yup';

import * as yup from 'yup';
import * as authActions from '@redux/auth/actions';

/* eslint-disable */

type resetPasswordProps = {
    auth: any;
    /**
     * injected rdx action
     */
    resetPassword: (data: any) => void;
    passwordHistory: (data: any) => void;
    token: string;
    setResetSuccess: (value: boolean) => void;
};

type FormValues = {
    password: string;
    passwordConfirm: string;
};
const resetPasswordFormSchema = yup.object().shape({
    password: yup
        .string()
        .required('Password required')
        .matches(/^(?=.{6,})/, 'Password should be atleast 6 characters'),
    passwordConfirm: yup.string().when('password', {
        is: (val: string) => !val,
        then: (schema) => schema,
        otherwise: (schema) =>
            schema
                .oneOf([yup.ref('password'), undefined], 'Passwords must match!')
                .required('Confirm password is required'),
    }),
});

const defaultValues = {
    password: '',
    passwordConfirm: '',
};

const ChangePasswordForm = (props: resetPasswordProps) => {
    // const { mutate: login, isLoading: loading } = useLoginMutation();
    const { auth, token } = props;
    const { resetPassword, setResetSuccess, passwordHistory } = props;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        defaultValues,
        resolver: yupResolver(resetPasswordFormSchema),
    });

    const onSubmit = async ({ password }: FormValues) => {
        try {
            await resetPassword({ token, password });
            await passwordHistory({ token, password });
            setResetSuccess(true);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <form noValidate>
                <div className="flex flex-col">
                    <div className=" py-7 flex flex-col md:flex-row items-center gap-3 ">
                        <div className="flex flex-1 gap-4 flex-col md:flex-row w-full">
                            <PasswordInput
                                label={'New Password'}
                                {...register('password')}
                                error={errors?.password?.message}
                                variant="outline"
                                className="flex-1"
                                placeholder="at least 6 characters"
                            />

                            <PasswordInput
                                label={'Confirm New Password'}
                                {...register('passwordConfirm')}
                                error={errors?.passwordConfirm?.message}
                                variant="outline"
                                className="flex-1"
                                placeholder="at least 6 characters"
                            />
                        </div>
                        <Button
                            size="medium"
                            onClick={handleSubmit(onSubmit)}
                            loading={auth.isLoading}
                            disabled={auth.isLoading}
                            type="button"
                            className="text-xl !bg-cta-blue w-full md:w-fit self-end"
                        >
                            Update Password
                        </Button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default connect(
    (state: any) => ({
        auth: state.auth,
    }),
    {
        resetPassword: authActions.resetPassword,
        passwordHistory: authActions.passwordHistory,
    }
)(ChangePasswordForm);
