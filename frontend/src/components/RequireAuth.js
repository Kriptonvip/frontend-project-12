import { useAuth } from '../context/auth';
import { Navigate } from 'react-router-dom';


export const RequireAuth = ({children}) => {
    const auth = useAuth();
    // console.log(localStorage.user, auth.username, 'localStorage.user, auth.username');
    if (!localStorage.user && auth.username === '') {
        return <Navigate to='/login' />
    }
    return children;
}

