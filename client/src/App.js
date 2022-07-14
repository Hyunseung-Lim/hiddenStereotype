import { BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom'
import { MainPage } from './Pages/MainPage'
import { PlayPage } from './Pages/PlayPage'

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/play" element={<PlayPage/>}/>
      </Routes>
      </div>      
    </Router>
  );
}

export default App;