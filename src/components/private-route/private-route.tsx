import { Navigate } from 'react-router-dom';
import { AuthStatus as AuthStatus, AppRoute } from '@consts';

type PrivateRouteProps = {
  authorizationStatus: AuthStatus;
  children: JSX.Element;
}

export default function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AuthStatus.Auth
      ? children
      : <Navigate to={ AppRoute.Login }/>
  );
}

