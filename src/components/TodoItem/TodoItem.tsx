import { FC } from 'react';
import cn from 'classnames';
import { Todo } from '../../types/types';

type Props = {
  todo: Todo;
  activeIds: number[];
  handleRemoveTodo: (buttonId: number) => void;
  handleCheckboxClick: (todo: Todo) => void;
};

export const TodoItem: FC<Props> = ({
  todo,
  activeIds,
  handleRemoveTodo,
  handleCheckboxClick,
}) => {
  const { title, completed, id } = todo;

  // const [isChecked, setIsChecked] = useState(completed);

  const test = () => {
    handleCheckboxClick(todo);
    // setIsChecked(!isChecked);
    // console.log('clicked');
    // get element from here
    // eslint-disable-next-line no-console
    console.log('clicked');
  };

  return (
    <div
      className={cn(
        'todo',
        'item-enter-done',
        { completed },
      )}
      data-cy="todo"
    >
      <div className="todo__status-label">
        <input
          type="checkbox"
          className="todo__status"
          // checked={isChecked}
          onChange={test}
        />
      </div>

      <span className="todo__title">{title}</span>

      <button
        type="button"
        className="todo__remove"
        onClick={() => handleRemoveTodo(id)}
      >
        ×
      </button>

      <div
        className={cn(
          'overlay',
          'modal',
          {
            'is-active': activeIds.some(activeId => activeId === id),
          },
        )}
      >
        <div
          className="modal-background has-background-white-ter"
        />
        <div className="loader" />
      </div>
    </div>
  );
};
