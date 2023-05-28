import { MdClose } from 'react-icons/md';
import { Btn, Checkbox, Text, Wrapper } from './Task.styled';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from 'redux/operations';
// import { deleteTask, toggleCompleted } from 'redux/tasksSlice';

export const Task = ({ task }) => {
  // Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTask(task.id));
  const handleToggle = () => dispatch(toggleCompleted(task));
  // Викликаємо генератор екшену та передаємо ідентифікатор завдання
  // Відправляємо результат - екшен видалення завдання
  // const handleDelete = () => dispatch(deleteTask(task.id));
  // Відправляємо результат - екшен перемикання статусу завдання
  // const handleToggle = () => dispatch(toggleCompleted(task.id));

  return (
    <Wrapper>
      <Checkbox
        type="checkbox"
        onChange={handleToggle}
        checked={task.completed}
      />
      <Text>{task.text}</Text>
      <Btn onClick={handleDelete}>
        <MdClose size={24} />
      </Btn>
    </Wrapper>
  );
};
