import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if(isLoading) {
        return <div>
            Please Wait
        </div>
    }
    return (
        <div>
            <Route

                {...rest}
                render={({ location }) => user.email ? children
                    :
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location }
                        }}
                    ></Redirect>
                }

            >

            </Route>
        </div>
    );
};

export default PrivateRoute;