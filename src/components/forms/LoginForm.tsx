import { FC, useEffect } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { UserPayload } from '../../interfaces';
import { useAuthContext } from '../../contexts';
import { MyInput, Button, Spinner } from '..';
import './loginForm.css';


const initialValues: UserPayload = {
  discordId: '',
  email: '',
};

const validationSchema = Yup.object({
  discordId: Yup.string()
    .min(17, 'Must be at least 18 characters long').required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
});

/**
 *
 * discordID: 890827972238528572
 * email: riveramirandac@gmail.com
 *
 * @description Formik Form
 */
export const LoginForm: FC = () => {
  const {
    isLoading, error, signIn,
  } = useAuthContext();

  if (isLoading) {
    return <Spinner size="font-6" />;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm, setSubmitting }) => {
        console.log(values);
        resetForm();
        try {
          await signIn(values);
        } catch (error) {
          console.log(error);
        }
        setSubmitting(false);
      }}
    >
      <Form className="form-login slide-in-elliptic--entrance ">
        <h2 className="form-login__heading">Sign In</h2>
        <MyInput type="text" placeholder="Discord ID" name="discordId" />
        <MyInput type="email" placeholder="Email" name="email" />
        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
  );
};
