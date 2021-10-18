import React from 'react';
import './Login.css';
import { useForm } from "react-hook-form";
// import { Form, Modal, Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import ShowModal from '../ShowModal/ShowModal';

const Login = () => {
    const { signInUsingGoogle, logOut, setError, setUser, setEmail, setPassword, setIsLoading } = useAuth();

    const [modalShow, setModalShow] = React.useState(false);


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
        <div>
            <button className="btn btn-danger mt-5 pt-5 " onClick={() => setModalShow(true)}>modal show </button>
            <ShowModal
                handleGoogleLogin={handleGoogleLogin}
                handleSubmit={handleSubmit}
                register={register}
                onSubmit={onSubmit}
                errors={errors}
                logOut={logOut}
                redirect_uri={redirect_uri}
                show={modalShow}
                onHide={() => setModalShow(false)}
            ></ShowModal>
        </div>
    );
};

export default Login;