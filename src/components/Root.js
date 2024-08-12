import { Navigate } from 'react-router-dom';

const Root = () => {
    const isAuthenticated = !!localStorage.getItem('loggedInUser');
    return isAuthenticated? <Navigate to="/videos" /> : <Navigate to="/login" />;
}

export default Root;