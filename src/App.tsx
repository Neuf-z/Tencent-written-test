import './App.less';
import { useRoutes } from 'react-router';
import routes from './router';
 
function App() {
  return (
    <div className="App">
      {useRoutes(routes)}
    </div>
  );
}
 
export default App;