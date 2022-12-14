import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Acceuil } from './components/Acceuil';
import DetailUser from './components/DetailUser';
import ListTodo from './components/ListTodo';
import ListUser from './components/ListUser';

function App() {
  return (
    <div className="App">
      <h1></h1>
      <Routes>
        <Route path='/' element={<Acceuil />}>
          <Route index element={<ListUser />}/>
          <Route path='detailuser/:id' element={<DetailUser/>}/>
          <Route path='listuser/:id' element={<ListTodo/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
