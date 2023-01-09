
import './App.css';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Header } from './Components/Header';
import { Home } from './Components/Home';
import { ReviewList } from './Components/Reviews';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/reviews' element={<ReviewList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
