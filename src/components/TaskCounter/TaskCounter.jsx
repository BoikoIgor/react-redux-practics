import { getTasks } from 'redux/selectors';
import { Text } from './TaskCounter.styled';
import { useSelector } from 'react-redux';

export const TaskCounter = () => {
  // Отримуємо масив завдань із стану Redux
  const tasks = useSelector(getTasks);
  // На базі стану Redux отримуємо похідні дані
  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );
  return (
    <div>
      <Text>Active: {count.active}</Text>
      <Text>Completed: {count.completed}</Text>
    </div>
  );
};
