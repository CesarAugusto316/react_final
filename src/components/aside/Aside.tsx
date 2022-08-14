import {
  FC, MouseEventHandler, useState,
} from 'react';
import { useAuthContext, useTodosContext } from '../../contexts';
import {
  Modal, LoginForm, CreateTodoForm, TodosList,
} from '..';
import './aside.css';


/**
 *
 * TODO: when the create button is click, we should open a modal to
 * enter discordId & email.
 *
 * <LoginForm/> should be wrapped inside a modal-window.
 */
export const Aside: FC = () => {
  const [toggleModal, setToggleModal] = useState(false);
  const { isLogged } = useAuthContext();
  const { useCreateTodo } = useTodosContext();


  const openModal: MouseEventHandler = () => {
    setToggleModal(true);
  };

  const closeModal: MouseEventHandler = (e) => {
    if (!((e.target as HTMLElement).closest('.form-login')
     || (e.target as HTMLElement).closest('.create-todo-form')
    )) {
      setToggleModal(false);
    }
  };


  return (
    <aside className="aside">
      <h3 className="todos-list__heading">
        <span className="todos-list__heading--main">ToDos</span>
        <span
          className="todos-list__heading--subtitle"
          onClick={openModal}
        >
          crear
        </span>
      </h3>

      {toggleModal && (
        <Modal onClick={closeModal}>
          {isLogged && <CreateTodoForm onCloseModal={() => setToggleModal(false)} />}
          {!isLogged
              && <LoginForm onCloseModal={() => setToggleModal(false)} />}
        </Modal>
      )}

      <TodosList />
    </aside>
  );
};
