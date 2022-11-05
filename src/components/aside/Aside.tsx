import {
  FC, MouseEventHandler, useState,
} from 'react';
import { useAuthContext } from '../../contexts';
import {
  Modal, LoginForm, CreateTodoForm, TodosList,
} from '..';
import './aside.css';


export const Aside: FC = () => {
  const [toggleModal, setToggleModal] = useState(false);
  const { isLogged } = useAuthContext();

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
    <aside className="aside" aria-label="todos-list-column">
      <h3 className="todos-list__heading">
        <span className="todos-list__heading--main">Coming Soon</span>
        {toggleModal && (
          <Modal onClick={closeModal}>
            {!isLogged && <LoginForm />}
            {isLogged && <CreateTodoForm onCloseModal={() => setToggleModal(false)} />}
          </Modal>
        )}
      </h3>

      <TodosList />
    </aside>
  );
};
