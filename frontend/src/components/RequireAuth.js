import { useAuth } from './auth';
import { Navigate } from 'react-router-dom';


export const RequireAuth = ({children}) => {
    console.log(localStorage)
    if (!localStorage.token) {
        return <Navigate to='/login' />
    }
    return children;
}

