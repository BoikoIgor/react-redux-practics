import { Button } from 'components/Button/Button';
import { Field, InputForm } from './TaskForm.styled';
import { useDispatch } from 'react-redux';
import { addTask } from 'redux/operations';
// Імпортуємо генератор екшену
// import { addTask } from '../../redux/tasksSlice';

export const TaskForm = () => {
  // Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    // Викликаємо генератор екшену та передаємо текст завдання для поля payload
    // Відправляємо результат – екшен створення завдання
    // dispatch(addTask(form.elements.text.value));
    dispatch(addTask(event.target.elements.text.value));
    form.reset();
  };

  return (
    <InputForm onSubmit={handleSubmit}>
      <Field type="text" name="text" placeholder="Enter task text..." />
      <Button type="submit">Add task</Button>
    </InputForm>
  );
};
