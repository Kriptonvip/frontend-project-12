
import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './pages/login';
import NotFound from './pages/notFound';

function App() {
  return (
      <div className="h-100" id="chat">
        <div className="d-flex flex-column h-100">
          <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
              <div className="container"><a className="navbar-brand" href="/">Hexlet</a></div>
          </nav>
          <Routes>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/" element={<Login/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
          </Routes>
        </div>
      </div>
  );
}

export default App;
