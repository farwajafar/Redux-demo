import { Provider } from 'react-redux';
import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import store from './redux/store';

function App() {
  return (
    <Provider store = {store}>
    <div className="App">
      <HooksCakeContainer/>
      <CakeContainer/>
    </div>
    </Provider>
  );
}

export default App;
