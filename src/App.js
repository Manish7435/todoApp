import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Todo from './Components/Todo';
import { DndProvider } from  "react-dnd";
import { HTML5Backend } from  "react-dnd-html5-backend"

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
        <BrowserRouter>
          <Routes>
            <Route path= '/' element = {<Todo/>}/>
          </Routes>
        </BrowserRouter>
    </DndProvider>
  );
}

export default App;
