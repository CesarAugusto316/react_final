import {
  FC, MouseEventHandler, useState,
} from 'react';
import '@animxyz/core';
import { XyzTransitionGroup } from '@animxyz/react';
import { useTodosContext } from '../../contexts';
import { Modal, LoginForm, Spinner } from '..';
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
  const { useGetTodos } = useTodosContext();
  const { isLoading, todos, error } = useGetTodos('?email=riveramirandac@gmail.com');

  const openModal: MouseEventHandler = () => {
    setToggleModal(true);
  };

  const closeModal: MouseEventHandler = (e) => {
    if (!(e.target as HTMLElement).closest('.form-login')) {
      setToggleModal(false);
    }
  };


  if (isLoading) {
    return (
      <div className="aside">
        <Spinner size="font-5" />
      </div>
    );
  }
  if (error) {
    return <div className="aside">{error}</div>;
  }
  return (
    <aside className="aside">
      <div>
        <h3 className="todos-list__heading">
          <span className="todos-list__heading--main">ToDos</span>
          {toggleModal && (
          <Modal onClick={closeModal}>
            <LoginForm onCloseModal={() => setToggleModal(false)} />
          </Modal>
          )}
          <span
            className="todos-list__heading--subtitle"
            onClick={openModal}
          >
            crear
          </span>
        </h3>

        <XyzTransitionGroup
          appearVisible
          xyz="fade big up appear-stagger ease-in-out-back delay-5"
          className="todos-list"
        >
          {todos.map(({ id, name, description }) => {
            return (
              <div key={id} className="todo">
                <h5>{name}</h5>
                <p>{description}</p>
              </div>
            );
          })}
        </XyzTransitionGroup>
      </div>
    </aside>
  );
};
