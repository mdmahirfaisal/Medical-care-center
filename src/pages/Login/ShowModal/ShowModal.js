import React from 'react';
import { Form, Modal, Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

import './ShowModal.css';

const ShowModal = (props) => {
    const { modalShow } = props;


    const { signInUsingGoogle, setEmail, setPassword, signInUsingLoginForm, toggleSignIn, error, resetPassword, setError, setUser, setIsLoading, isLogin } = useAuth();
    /////////////
    let location = useLocation();
    let history = useHistory();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                setUser(result.user);
                setError('');
                history.push(from);

            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    //// login form 
    const useLoginForm = (e) => {
        e.preventDefault()
        signInUsingLoginForm()
    }

    /////////email set
    const handleEmailChange = e => {
        setEmail(e.target.value);
        console.log(e.target.value);
    };
    //////// password set 
    const handlePasswordChange = e => {
        setPassword(e.target.value);
        console.log(e.target.value);
    };
    ////////////////////////////////////
    return (
        <Modal
            show={modalShow}
            onHide={() => {
                modalShow(false);
            }}
            {...props}
            size="md"
            centered
            className="modal-background"
        >
            <Modal.Header className="border-0 fw-bold" closeButton>
            </Modal.Header>
            <Modal.Body className="">


                <Form onSubmit={useLoginForm} className="  p-3 ">
                    <h2 className="text-secondary w-50 mx-auto rounded fw-bold">Please, {isLogin ? 'Sign in' : 'Sign up'}</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-start">Email address</Form.Label>
                        <Form.Control onBlur={handleEmailChange} type="email" placeholder="Please enter your email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="text-start">Password</Form.Label>
                        <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Please enter your password" required />
                        <h5 className="row mb-3 text-danger text-center" >{error}</h5>

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check className="text-start" onChange={toggleSignIn} type="checkbox" label="Already Registered?" />
                    </Form.Group>

                    <Button variant="outline-danger w-100 mb-2" type="submit">
                        {isLogin ? 'Sign in' : 'Sign up'}
                    </Button>
                    <button className="btn border-0 my-3" onClick={resetPassword}>Forgot your password</button>

                    <br />
                    <input className="btn btn-outline-secondary w-50 mx-auto d-block rounded-pill " type="submit" />

                </Form>
                {/* <h5 className="text-secondary mt-2 fw-bold">CONTINUE WITH GOOGLE</h5> */}
                <button onClick={handleGoogleLogin} className="btn btn-outline-primary w-50 mt-3 rounded-pill mx-auto d-block">Continue with google</button>


            </Modal.Body>
        </Modal>


        // <form onSubmit={handleSubmit(onSubmit)} className="p-5 w-75  mx-auto">
        //                     <Form.Label>Name</Form.Label>
        //                     <input className="input-field form-control" placeholder="" {...register("name")} />
        //                     <Form.Label>Email address</Form.Label>
        //                     <input className="input-field form-control" placeholder="" {...register("email", { required: true })} />
        //                     <Form.Label>Password</Form.Label>
        //                     <input type="password" className="input-field form-control" placeholder="" {...register("password", { required: true })} />
        //                     {errors.email && <span className="text-danger text-center">Email field is required</span>}
        //                     <br />
        //                     <Form.Group className="mb-3" controlId="formBasicCheckbox">
        //                         <Form.Check className="text-start" onChange={toggleSignIn} type="checkbox" label="Already Registered?" />
        //                     </Form.Group>
        //                     <br />
        //                     <input className="btn btn-outline-secondary w-50 mx-auto d-block rounded-pill " type="submit" />
        //                     <button onClick={handleGoogleLogin} className="btn btn-outline-primary w-50 mt-3 rounded-pill mx-auto d-block">Continue with google</button>
        //                 </form> 
    );
};

export default ShowModal;