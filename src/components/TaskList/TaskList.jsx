import { Task } from 'components/Task/Task';
import { List, ListItem } from './TaskList.styled';

export const TaskList = () => {
  return (
    <List>
      {[].map(task => (
        <ListItem key={task.id}>
          <Task task={task} />
        </ListItem>
      ))}
    </List>
  );
};
