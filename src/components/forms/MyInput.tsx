import { FC } from 'react';
import { Field, ErrorMessage, FieldProps } from 'formik';
import './myInput.css';


interface MyInputProps {
  type: string,
  placeholder: string,
  name?: string,
}

export const MyInput: FC<MyInputProps> = ({ type, placeholder, name }) => {
  return (
    <div className="form__label">
      <ErrorMessage name={name || type} className="form__error-msg" component="div" />
      <Field name={name}>
        {({ field, meta }: FieldProps) => (
          <input
            type={type}
            placeholder={placeholder}
            className={`form__input ${meta.error
              && meta.touched && 'form__input--error'}`}
            {...field}
          />
        )}
      </Field>
    </div>
  );
};

MyInput.defaultProps = {
  name: '',
};
