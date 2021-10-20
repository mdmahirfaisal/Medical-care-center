// import React from 'react';
// import './Login.css';
// // import { useForm } from "react-hook-form";
// // import { Form, Modal, Button } from 'react-bootstrap';
// // import { useHistory, useLocation } from 'react-router';
// import useAuth from '../../../hooks/useAuth';
// import ShowModal from '../ShowModal/ShowModal';
// import { Link } from 'react-router-dom';

// const Login = () => {
//     const { setModalShow, modalShow } = useAuth();

//     return (
//         <div className="login-bg-container pt-5">
//             <div className="container mt-5 shadow p-5 login-text w-75 mx-auto">
//                 <h2 className="text-secondary fw-bold">If you want to login, click on the button below</h2>
//                 <h4 className="text-secondary ">Please forgive me for not being able to open the direct model to go private. Sorry</h4>
//                 <button onClick={() => setModalShow(true)} className="btn btn-danger py-2 px-4 rounded-pill w-50 mx-auto mt-3">Show Login form </button><br /><br />
//                 <Link to="/home"><button className="btn btn-danger py-2 px-4 rounded-pill w-50 mx-auto mt-3">Back to home</button></Link>
//             </div>
//             <ShowModal
//                 show={modalShow}
//                 onHide={() => setModalShow(false)}
//             ></ShowModal>
//         </div>
//     );
// };

// export default Login;