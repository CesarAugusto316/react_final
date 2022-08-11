import { FC } from 'react';
import {
  FormikConfig, FormikErrors, useFormik,
} from 'formik';
import { UserPayload } from '../../interfaces';
import './loginForm.css';


const initialValues: UserPayload = {
  discordId: '',
  email: '',
};

const validate = (values: UserPayload) => {
  const errors: FormikErrors<UserPayload> = {
  };

  if (!values.discordId) {
    errors.discordId = 'Required';
  } else if (values.discordId.length < 18) {
    errors.discordId = 'ID is at least 18 chars long';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

/**
 *
 * @description Formik Form
 */
export const LoginForm: FC = () => {
  // const [isLoading, setIsloading] = useState(false);
  // const navigate = useNavigate();
  // const { signIn } = useAuthContext();

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: (values: UserPayload) => {
      // setIsloading(true);
      // signIn(values, () => {
      //   setIsloading(false);
      //   navigate('/');
      // });
      formik.setValues(initialValues);
      formik.setTouched({});
      formik.setErrors({});
    },
  } as FormikConfig<UserPayload>);


  // if (isLoading) {
  //   return <Spinner size="font-6" />;
  // }
  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <h2 className="form__heading">Sign In</h2>

      <label className="form__label" htmlFor="discordId">
        {formik.touched.discordId && formik.errors.discordId
        && <div className="form__error-msg">{formik.errors.discordId}</div>}
        <input
          value={formik.values.discordId}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="discordId"
          name="discordId"
          className={`form__input ${formik.touched.discordId
            && formik.errors.discordId && 'form__input--error'}`}
          type="text"
          placeholder="DiscordID"
        />
      </label>

      <label className="form__label" htmlFor="email">
        {formik.touched.email && formik.errors.email
        && <div className="form__error-msg">{formik.errors.email}</div>}
        <input
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="email"
          name="email"
          className={`form__input ${formik.touched.email
            && formik.errors.email && 'form__input--error'}`}
          type="email"
          placeholder="Email"
        />
      </label>

      <button className="btn" type="submit">Log In</button>
    </form>
  );
};
