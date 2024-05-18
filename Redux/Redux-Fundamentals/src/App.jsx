
import './App.css'
import Todo from './components/Todo';
import { Provider } from 'react-redux'; //allows redux store to be available to every nested components
import { store } from './app/store.js';


function App() {
  
  return (
    
<div>
    <Provider store={store}>
     <Todo />
    
     </Provider >

     </div>
    
  )
}

export default App
