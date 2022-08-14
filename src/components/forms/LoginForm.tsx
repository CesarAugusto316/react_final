import { FC, useEffect } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { UserPayload } from '../../interfaces';
import { useAuthContext } from '../../contexts';
import {
  MyInput, Button, Spinner, CreateTodoForm,
} from '..';
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

interface LoginFormProps {
  onCloseModal: () => void
}

/**
 *
 * discordID: 890827972238528572
 * @description Formik Form
 */
export const LoginForm: FC<LoginFormProps> = ({ onCloseModal }) => {
  const { isLoading, isLogged, signIn } = useAuthContext();


  useEffect(() => {
    console.log('isLogged:', isLogged);
  }, [isLogged]);

  if (isLoading) {
    return <Spinner size="font-6" />;
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
          // onCloseModal();
        } catch (error) {
          console.log(error);
        }
        setSubmitting(false);
      }}
    >
      <Form className="form-login">
        <h2 className="form-login__heading">Sign In</h2>
        <MyInput type="text" placeholder="DiscordId" name="discordId" />
        <MyInput type="email" placeholder="Email" name="email" />
        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
  );
};
