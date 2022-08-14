import { FC } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyInput } from '../../components';


interface InitialValues {
  name: string,
  email: string
}

const initialValues: InitialValues = { name: '', email: '' };
const validationSchema = Yup.object({
  name: Yup.string()
    .min(5, 'Must be at leats 5 characters long')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
});

export const ContactForm: FC = () => {
  return (
    <section>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(values);
          resetForm();
          setSubmitting(false);
        }}
      >
        <Form className="form">
          <h2 className="form__heading">Contact Form</h2>
          <MyInput placeholder="Name" type="text" name="name" />
          <MyInput placeholder="Email" type="email" name="email" />
          <button className="btn" type="submit">Submit</button>
        </Form>
      </Formik>
    </section>
  );
};
