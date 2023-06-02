import { Task } from 'components/Task/Task';
import { List, ListItem } from './TaskList.styled';
import { useSelector } from 'react-redux';
import { selectVisibleTasks } from 'redux/selectors';

export const TaskList = () => {
  // Отримуємо масив завдань із стану Redux
  const tasks = useSelector(selectVisibleTasks);
  // Рендер JSX розмітки
  return (
    <List>
      {tasks.map(task => (
        <ListItem key={task.id}>
          <Task task={task} />
        </ListItem>
      ))}
    </List>
  );
};
