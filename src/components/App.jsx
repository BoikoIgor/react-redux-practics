import { AppBar } from './AppBar/AppBar';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { TaskForm } from './TaskForm/TaskForm';
import { TaskList } from './TaskList/TaskList';

export const App = () => {
  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList />
      <GlobalStyle />
    </Layout>
  );
};
