import { FC } from 'react';
import { Formik, Form } from 'formik';
import Typewriter from 'typewriter-effect';
import * as Yup from 'yup';
import { MyInput, Button } from '..';
import { useTodosContext } from '../../contexts';
import './createTodoForm.css';
import { Todo } from '../../interfaces';


interface TodoFormProps {
  onCloseModal: () => void
}

export const CreateTodoForm: FC<TodoFormProps> = ({ onCloseModal }) => {
  const { createTodo } = useTodosContext();

  return (
    <Formik
      initialValues={{ name: '', description: '' }}
      validationSchema={Yup.object({
        name: Yup.string().min(5, 'Must be at least 5 characters long')
          .required('Required'),
        description: Yup.string().min(5, 'Must be at least 5 characters long')
          .required('Required'),
      })}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        console.log(values);
        createTodo(values as Todo);
        resetForm();
        onCloseModal();
        setSubmitting(false);
      }}
    >
      <Form className="create-todo-form slide-in-elliptic--entrance ">
        <h2 className="create-todo-form__heading">
          <Typewriter
            options={{ loop: true }}
            onInit={(typewriter) => {
              typewriter.typeString('Create a ToDo')
                .pauseFor(5_000)
                .deleteAll()
                .start();
            }}
          />
        </h2>
        <MyInput type="text" name="name" placeholder="Name" />
        <MyInput type="text" name="description" placeholder="Description" />
        <Button type="submit">Create Todo</Button>
      </Form>
    </Formik>
  );
};
