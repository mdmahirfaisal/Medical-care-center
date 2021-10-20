import React from 'react';
import './AddToCart.css';

const AddToCart = () => {
    return (
        <div className="cart-container mt-5 pt-5">
            <div className="container ">
                <div className="shadow p-4 mb-3  cart-image ">
                    <h2 className="text-success fw-bold">Your Order Booking is done</h2>
                    <p>Physicians and surgeons work in both clinical and nonclinical settings. Clinical settings include physicians' offices and hospitals; nonclinical settings include government agencies, nonprofit organizations, and insurance companies.</p>
                </div>
                <h3 className="text-secondary fw-bold">Your Room is Ready</h3>
                <div className=" p-3 ">
                    <img className=" cart-image" src="https://images.unsplash.com/photo-1512678080530-7760d81faba6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1174&q=80" alt="" />
                </div>
            </div>



        </div>
    );
};

export default AddToCart;