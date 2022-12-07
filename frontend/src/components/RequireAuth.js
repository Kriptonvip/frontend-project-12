import { useAuth } from './auth';
import { Navigate } from 'react-router-dom';


export const RequireAuth = ({children}) => {
    const auth = useAuth();
    // console.log(!localStorage.token, auth.username === null)
    if (!localStorage.token || auth.username === null) {
        return <Navigate to='/login' />
    }
    return children;
}

