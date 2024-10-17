import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/Home/HomePage';
import { Toaster } from "sonner"; 

function App() {
  return (
    <div>
      <Toaster /> 
  <Router>
    <Routes>
        <Route path='/*' element = {<HomePage/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
