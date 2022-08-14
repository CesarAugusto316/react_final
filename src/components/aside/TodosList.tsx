import { FC } from 'react';
import '@animxyz/core';
import { XyzTransitionGroup } from '@animxyz/react';
import { useTodosContext } from '../../contexts';
import { Spinner } from '../spinner/Spinner';
import './aside.css';


export const TodosList: FC = () => {
  const { useGetTodos } = useTodosContext();
  const { isLoading, todos, error } = useGetTodos();


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
      {todos.map(({ id, name, description }) => {
        return (
          <div key={id} className="todo">
            <h5>{name}</h5>
            <p>{description}</p>
          </div>
        );
      })}
    </XyzTransitionGroup>
  );
};
