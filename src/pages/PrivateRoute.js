import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <div>
            <Spinner animation="border" role="status" className="spin">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
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