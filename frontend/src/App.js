
import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Main from './components/Main';
import { AuthProvider} from './components/auth';
import { RequireAuth } from './components/RequireAuth';

function App() {


  return (
    <AuthProvider>
      <div className="h-100" id="chat">
        <div className="d-flex flex-column h-100">
          <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
              <div className="container"><Link className="navbar-brand" to="/">Hexlet Chat</Link></div>
          </nav>
          <Routes>
            <Route path="/" element={<RequireAuth><Main/></RequireAuth>}></Route>
             <Route path="/login" element={<Login/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
          </Routes>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
