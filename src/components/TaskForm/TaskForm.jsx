import { Button } from 'components/Button/Button';
import { Field, InputForm } from './TaskForm.styled';

export const TaskForm = () => {
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    form.reset();
  };

  return (
    <InputForm onSubmit={handleSubmit}>
      <Field type="text" name="text" placeholder="Enter task text..." />
      <Button type="submit">Add task</Button>
    </InputForm>
  );
};
