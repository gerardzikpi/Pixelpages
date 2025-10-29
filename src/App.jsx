import { Routes,Route  } from "react-router-dom";
import ErrorBoundary from './components/ErrorBoundary'
import Home from './pages/Home'
import Library from './pages/Library'
import './App.css';

function App(){
  return (
    <>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/library' element={<Library />} />
      </Routes>
    </>
  )
}

export default App
