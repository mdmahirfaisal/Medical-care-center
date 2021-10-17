// import React from 'react';
// import { Route } from 'react-router';

// const PrivateRoute = ({ children, ...rest }) => {
//     const { user, isLoading } = useAuth();
//     if (isLoading) {
//         return <Spinner animation="border" variant="danger" />
//     }


//     ////////
//     return (
//         <Route
//             {...rest}
//             render={({ location }) => user.email ? children : <Redirect
//                 to={{
//                     pathname: "/login",
//                     state: { from: location }
//                 }}
//             ></Redirect>}
//         >

//         </Route>
//     );
// };

// export default PrivateRoute;