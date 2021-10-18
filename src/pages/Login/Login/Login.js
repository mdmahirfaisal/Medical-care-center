import React from 'react';
import './Login.css';
import { useForm } from "react-hook-form";
import { Form, Modal, Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = (props) => {
    const { signInUsingGoogle, logOut, setError, setUser, setEmail, setPassword, setIsLoading } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        setEmail(data.email);
        setPassword(data.password);
        setUser(data);
    };

    ///  google login
    const handleGoogleLogin = () => {
        setIsLoading(true);
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
                setUser(result.user)
                setError('');

            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false))
    };

    /////

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="login-bg-container py-5">
                    <h1 className=" pt-5 mt-5 text-light">Sign in to join </h1>

                    <div className="container">
                        <div className="shadow w-75 mx-auto login-form-container text-start py-5">
                            <form onSubmit={handleSubmit(onSubmit)} className="p-5 w-75  mx-auto">
                                <Form.Label>Name</Form.Label>
                                <input className="input-field form-control" placeholder="" {...register("name")} />
                                <Form.Label>Email address</Form.Label>
                                <input className="input-field form-control" placeholder="" {...register("email", { required: true })} />
                                <Form.Label>Password</Form.Label>
                                <input type="password" className="input-field form-control" placeholder="" {...register("password", { required: true })} />
                                {errors.email && <span className="text-danger text-center">Email field is required</span>}
                                <br />
                                <input className="form-control " type="submit" />
                            </form>
                        </div>
                        <div>
                            <h2 className="text-light fw-bold">Continue With Google</h2>
                            <button onClick={handleGoogleLogin} className="btn btn-outline-danger me-3">Continue with google</button>
                            <button onClick={logOut} className="btn btn-outline-danger">Sign  out </button>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default Login;