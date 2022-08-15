import { FC } from 'react';
import '@animxyz/core';
import { XyzTransitionGroup } from '@animxyz/react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { useTodosContext } from '../../contexts';
import { Spinner } from '../spinner/Spinner';
import './aside.css';


export const TodosList: FC = () => {
  const {
    todos, isLoading, error, deleteTodo,
  } = useTodosContext();


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
              <FaEdit className="todo__icon" />
              <FaTrashAlt className="todo__icon" onClick={() => deleteTodo(id)} />
            </div>
          </div>
        );
      })}
    </XyzTransitionGroup>
  );
};
