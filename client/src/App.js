import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { MainPage } from './Pages/MainPage';
import { PlayPage } from './Pages/PlayPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App' id='app__wrap'>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/play' element={<PlayPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
