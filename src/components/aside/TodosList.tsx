import { FC, useState, MouseEventHandler } from 'react';
import '@animxyz/core';
import { XyzTransitionGroup } from '@animxyz/react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { useAuthContext, useTodosContext } from '../../contexts';
import { Modal, LoginForm, Spinner } from '..';
import './aside.css';


export const TodosList: FC = () => {
  const [toggleEditModal, setToggleEditModal] = useState(false);
  const [toggleTrashModal, setToggleTrashModal] = useState(false);
  const { isLogged } = useAuthContext();
  const {
    todos, isLoading, error, deleteTodo,
  } = useTodosContext();

  const closeEditModal: MouseEventHandler = (e) => {
    if (!((e.target as HTMLElement).closest('.form-login')
     || (e.target as HTMLElement).closest('.create-todo-form')
    )) {
      setToggleEditModal(false);
    }
  };


  if (isLoading) {
    return (
      <Spinner size="font-5" />
    );
  }
  if (error) {
    return <div className="todos-list">{error}</div>;
  }
  return (
    <XyzTransitionGroup
      appearVisible
      xyz="fade big up appear-stagger ease-in-out-back delay-5"
      className="todos-list"
    >
      {!todos.length && <p>There are no Todos by now.</p>}

      {todos.length && todos.map(({ id, name, description }) => {
        return (
          <div key={id} className="todo">
            <div className="todo__content">
              <h5>{name}</h5>
              <p>{description}</p>
            </div>

            <div className="todo__actions">
              <FaEdit className="todo__icon" onClick={() => setToggleEditModal(true)} />

              <FaTrashAlt
                className="todo__icon"
                onClick={() => {
                  if (!isLogged) {
                    setToggleTrashModal(true);
                  } else {
                    deleteTodo(id);
                  }
                }}
              />

              {toggleTrashModal && !isLogged && (
                <Modal onClick={(e) => {
                  if (!((e.target as HTMLElement).closest('.form-login')
                  )) {
                    setToggleTrashModal(false);
                  }
                }}
                >
                  <LoginForm />
                </Modal>
              )}

              {toggleEditModal && (
              <Modal onClick={closeEditModal}>
                {!isLogged && <LoginForm />}
                {isLogged && <div>Edit Form</div>}
              </Modal>
              )}
            </div>
          </div>
        );
      })}
    </XyzTransitionGroup>
  );
};
