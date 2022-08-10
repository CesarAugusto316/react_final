import { FC } from 'react';
import { useTodosContext } from '../../contexts';
import './aside.css';


export const Aside: FC = () => {
  const { isLoading, todos } = useTodosContext();

  if (isLoading) {
    return <div className="aside">Is loading ...</div>;
  }
  return (
    <aside className="aside">
      <div className="todos-list">
        <h3 className="todos-list__heading">
          <span className="todos-list__heading--main">ToDos</span>
          <span className="todos-list__heading--subtitle">crear</span>
        </h3>

        {todos.map(({ id, name, description }) => {
          return (
            <div key={id} className="todo">
              <h5>{name}</h5>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </aside>
  );
};
