import React from 'react';
import { Form, Modal, Button } from 'react-bootstrap';

import './ShowModal.css';

const ShowModal = (props) => {
    const { handleGoogleLogin, modalShow, handleEmailChange, handlePasswordChange, toggleSignIn, resetPassword, isLogin, error } = props;
    ////////////////////////////////////
    return (
        <Modal
            show={modalShow}
            onHide={() => {
                modalShow(false);
            }}
            {...props}
            size="lg"
            centered
            className="modal-background"
        >
            <Modal.Header className="border-0 fw-bold" closeButton>
            </Modal.Header>
            <Modal.Body className=" modal-container">


                <h1 className=" text-secondary text-center">Sign in to join </h1>


                <Form onSubmit="" className="w-50 mx-auto border p-3 bg-color-form mb-5">
                    <h2 className="text-secondary w-50 mx-auto rounded fw-bold">Please, {isLogin ? 'Sign in' : 'Sign up'}</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-start">Email address</Form.Label>
                        <Form.Control onBlur={handleEmailChange} type="email" placeholder="Please enter your email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="text-start">Password</Form.Label>
                        <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Please enter your password" required />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check className="text-start" onChange={toggleSignIn} type="checkbox" label="Already Registered?" />
                    </Form.Group>

                    <div className="row mb-3 text-danger">{error}</div>
                    <Button variant="outline-danger w-100 mb-2" type="submit">
                        {isLogin ? 'Sign in' : 'Sign up'}
                    </Button>
                    <button className="border-0 w-50 p-2 rounded-pill" onClick={resetPassword}>Forgot your password</button>

                    <h5 className="text-secondary mt-2 fw-bold">CONTINUE WITH GOOGLE</h5>
                    <svg onClick={handleGoogleLogin} xmlns="http://www.w3.org/2000/svg" width="auto" height="50" fill="currentColor" className="bi bi-google btn btn-outline-primary w-25 mx-auto" viewBox="0 0 16 16">
                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                    </svg>

                </Form>


            </Modal.Body>
        </Modal>





        /* <form onSubmit={handleSubmit(onSubmit)} className="p-5 w-75  mx-auto">
                            <Form.Label>Name</Form.Label>
                            <input className="input-field form-control" placeholder="" {...register("name")} />
                            <Form.Label>Email address</Form.Label>
                            <input className="input-field form-control" placeholder="" {...register("email", { required: true })} />
                            <Form.Label>Password</Form.Label>
                            <input type="password" className="input-field form-control" placeholder="" {...register("password", { required: true })} />
                            {errors.email && <span className="text-danger text-center">Email field is required</span>}
                            <br />
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check className="text-start" onChange={toggleSignIn} type="checkbox" label="Already Registered?" />
                            </Form.Group>
                            <br />
                            <input className="btn btn-outline-secondary w-50 mx-auto d-block rounded-pill " type="submit" />
                            <button onClick={handleGoogleLogin} className="btn btn-outline-primary w-50 mt-3 rounded-pill mx-auto d-block">Continue with google</button>
                        </form> */
    );
};

export default ShowModal;