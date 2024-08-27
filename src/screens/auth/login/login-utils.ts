import * as yup from 'yup';

export const loginValidationSchema = (t: any) =>
  yup.object({
    Username: yup
      .string()
      .required(t('login:validtion.username'))
      .min(1, t('login:validtion.usernameMin')),

    Password: yup.string().required(t('login:validtion.password')),
  });

export const forgotUsernameValidationSchema = (t: any) =>
  yup.object({
    email: yup.string().required(t('login:validtion.email')).email(),
    lastName: yup
      .string()
      .required(t('login:validtion.lastname'))
      .min(1, t('login:validtion.lastnameMin')),
  });

export const forgotPasswordQuestionValidationSchema = () =>
  yup.object({
    answer: yup.string().required('answer is required'),
  });

export const forgotPasswordValidationSchema = (t: any) =>
  yup.object({
    Username: yup
      .string()
      .required(t('login:validtion.username'))
      .min(1, t('login:validtion.usernameMin')),
  });

export const forgotPasswordResetValidationSchema = () =>
  yup.object({
    newPassword: yup
      .string()
      .required('New password is required')
      .min(9, 'Password must be at least 9 characters')
      .max(32, 'Password must not exceed 32 characters')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{9,32}$/,
        'Password must contain at least one lowercase letter, one uppercase letter, and one number',
      ),
    confirmNewPassword: yup
      .string()
      .required('Confirm password is required')
      .oneOf([yup.ref('newPassword'), null], 'Passwords must match'),
  });
