import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { selectToken } from '../Redux/reducers/userReducer';

function PrivateRoute({ children }) {
  const token = useSelector(selectToken)
  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  )
}
export default PrivateRoute;