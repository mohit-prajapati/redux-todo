import { Provider } from 'react-redux'; /** The Provider component makes the redux store available to any nested components that need to access the redux store */
import './App.css'
import TodoHome from './components/TodoHome';
import { store } from './app/store';

function App() {

  return (
    <>
      <Provider store={store}>
        <TodoHome />
      </Provider>
    </>
  )
}

export default App
