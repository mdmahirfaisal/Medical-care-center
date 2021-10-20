import React from 'react';
import './Doctor.css';
import { Card, Carousel } from 'react-bootstrap';


const Doctors = () => {
    return (
        <div className="">
            <Carousel className="slider-container">
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block img-fluid slider-image"
                        src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1704&q=80"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2 className="text-dark fw-bold">Explore resources for employment and wages by state and area for physicians and surgeons.</h2>
                        <p className="text-light fw-bold">Doctor is an academic title that originates from the Latin word of the same spelling and meaning.[1] The word is originally an agentive noun of the Latin verb docēre [dɔˈkeːrɛ] 'to teach'. It has been used as an</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block img-fluid slider-image"
                        src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1478&q=80"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h2 className="text-dark fw-bold">Compare the job duties, education, job growth</h2>
                        <p className="text-light fw-bold">The doctorate (Latin: doceō, lit. 'I teach') appeared in medieval Europe as a license to teach (Latin: licentia docendi) at a medieval university.[2] Its roots can be traced to the early church when the term "doctor" referred to the Apostles, church fathers and other Christian authorities who taught and interpreted the Bible.[2] .</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block img-fluid slider-image"
                        src="https://images.unsplash.com/photo-1581056771392-8a90ddb76831?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h2 className="text-dark fw-bold">Physicians and surgeons work in both clinical and nonclinical settings</h2>
                        <p className="text-light fw-bold">The PhD was originally a degree granted by a university to learned individuals who had achieved the approval of their peers and who had demonstrated a long and productive career in the field of philosophy (in the broad sense of the term, meaning the pursuit of knowledge). The appellation "Doctor" (from Latin: teacher) was usually.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block img-fluid  slider-image"
                        src="https://images.unsplash.com/photo-1585139786570-905b59b4fddf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h2 className="text-dark fw-bold">Physicians and surgeons typically need a bachelor’s degree as well as a medical degree</h2>
                        <p className="text-light fw-bold">Despite being historically associated with doctorates in law, the title of doctor for lawyers has not customarily been used in English-speaking countries, where lawyers were traditionally not required to have a university.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block img-fluid slider-image "
                        src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h2 className="text-dark fw-bold">Bureau of Labor Statistics, U.S. Department of Labor,</h2>
                        <p className="text-light fw-bold">However, the title, not being protected by law, was adopted by quacks.[15] As a result, by the mid 19th century, it was normal in the UK to omit the title "Dr" when addressing letters to those holding doctoral degrees, and instead.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <h1 className="text-primary fw-bold my-4  ">All Doctors Details</h1>
            <div className="row g-4">
                <div className="col-12 col-md-6 col-lg-4">
                    <Card className="shadow border-0 h-100 p-3 rounded">
                        <Card.Img variant="top" src="https://i.ibb.co/n3gVjbt/ani-kolleshi-7jjn-J-QA9f-Y-unsplash.png" />
                        <Card.Body>
                            <Card.Title>Medical Care Center</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <button className="btn btn-danger w-50 mx-auto px-3 rounded-pill">Doctor details</button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Card className="shadow border-0 h-100 p-3 rounded">
                        <Card.Img variant="top" src="https://i.ibb.co/n3gVjbt/ani-kolleshi-7jjn-J-QA9f-Y-unsplash.png" />
                        <Card.Body>
                            <Card.Title>Medical Care Center</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <button className="btn btn-danger w-50 mx-auto px-3 rounded-pill">Doctor details</button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Card className="shadow border-0 h-100 p-3 rounded">
                        <Card.Img variant="top" src="https://i.ibb.co/n3gVjbt/ani-kolleshi-7jjn-J-QA9f-Y-unsplash.png" />
                        <Card.Body>
                            <Card.Title>Medical Care Center</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <button className="btn btn-danger w-50 mx-auto px-3 rounded-pill">Doctor details</button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Card className="shadow border-0 h-100 p-3 rounded">
                        <Card.Img variant="top" src="https://i.ibb.co/n3gVjbt/ani-kolleshi-7jjn-J-QA9f-Y-unsplash.png" />
                        <Card.Body>
                            <Card.Title>Medical Care Center</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <button className="btn btn-danger w-50 mx-auto px-3 rounded-pill">Doctor details</button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Card className="shadow border-0 h-100 p-3 rounded">
                        <Card.Img variant="top" src="https://i.ibb.co/n3gVjbt/ani-kolleshi-7jjn-J-QA9f-Y-unsplash.png" />
                        <Card.Body>
                            <Card.Title>Medical Care Center</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <button className="btn btn-danger w-50 mx-auto px-3 rounded-pill">Doctor details</button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Card className="shadow border-0 h-100 p-3 rounded">
                        <Card.Img variant="top" src="https://i.ibb.co/n3gVjbt/ani-kolleshi-7jjn-J-QA9f-Y-unsplash.png" />
                        <Card.Body>
                            <Card.Title>Medical Care Center</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <button className="btn btn-danger w-50 mx-auto px-3 rounded-pill">Doctor details</button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Card className="shadow border-0 h-100 p-3 rounded">
                        <Card.Img variant="top" src="https://i.ibb.co/n3gVjbt/ani-kolleshi-7jjn-J-QA9f-Y-unsplash.png" />
                        <Card.Body>
                            <Card.Title>Medical Care Center</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <button className="btn btn-danger w-50 mx-auto px-3 rounded-pill">Doctor details</button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Card className="shadow border-0 h-100 p-3 rounded">
                        <Card.Img variant="top" src="https://i.ibb.co/n3gVjbt/ani-kolleshi-7jjn-J-QA9f-Y-unsplash.png" />
                        <Card.Body>
                            <Card.Title>Medical Care Center</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <button className="btn btn-danger w-50 mx-auto px-3 rounded-pill">Doctor details</button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Card className="shadow border-0 h-100 p-3 rounded">
                        <Card.Img variant="top" src="https://i.ibb.co/n3gVjbt/ani-kolleshi-7jjn-J-QA9f-Y-unsplash.png" />
                        <Card.Body>
                            <Card.Title>Medical Care Center</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <button className="btn btn-danger w-50 mx-auto px-3 rounded-pill">Doctor details</button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Card className="shadow border-0 h-100 p-3 rounded">
                        <Card.Img variant="top" src="https://i.ibb.co/n3gVjbt/ani-kolleshi-7jjn-J-QA9f-Y-unsplash.png" />
                        <Card.Body>
                            <Card.Title>Medical Care Center</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <button className="btn btn-danger w-50 mx-auto px-3 rounded-pill">Doctor details</button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Card className="shadow border-0 h-100 p-3 rounded">
                        <Card.Img variant="top" src="https://i.ibb.co/n3gVjbt/ani-kolleshi-7jjn-J-QA9f-Y-unsplash.png" />
                        <Card.Body>
                            <Card.Title>Medical Care Center</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <button className="btn btn-danger w-50 mx-auto px-3 rounded-pill">Doctor details</button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Card className="shadow border-0 h-100 p-3 rounded">
                        <Card.Img variant="top" src="https://i.ibb.co/n3gVjbt/ani-kolleshi-7jjn-J-QA9f-Y-unsplash.png" />
                        <Card.Body>
                            <Card.Title>Medical Care Center</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <button className="btn btn-danger w-50 mx-auto px-3 rounded-pill">Doctor details</button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Card className="shadow border-0 h-100 p-3 rounded">
                        <Card.Img variant="top" src="https://i.ibb.co/n3gVjbt/ani-kolleshi-7jjn-J-QA9f-Y-unsplash.png" />
                        <Card.Body>
                            <Card.Title>Medical Care Center</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <button className="btn btn-danger w-50 mx-auto px-3 rounded-pill">Doctor details</button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Card className="shadow border-0 h-100 p-3 rounded">
                        <Card.Img variant="top" src="https://i.ibb.co/n3gVjbt/ani-kolleshi-7jjn-J-QA9f-Y-unsplash.png" />
                        <Card.Body>
                            <Card.Title>Medical Care Center</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <button className="btn btn-danger w-50 mx-auto px-3 rounded-pill">Doctor details</button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Card className="shadow border-0 h-100 p-3 rounded">
                        <Card.Img variant="top" src="https://i.ibb.co/n3gVjbt/ani-kolleshi-7jjn-J-QA9f-Y-unsplash.png" />
                        <Card.Body>
                            <Card.Title>Medical Care Center</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <button className="btn btn-danger w-50 mx-auto px-3 rounded-pill">Doctor details</button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Card className="shadow border-0 h-100 p-3 rounded">
                        <Card.Img variant="top" src="https://i.ibb.co/n3gVjbt/ani-kolleshi-7jjn-J-QA9f-Y-unsplash.png" />
                        <Card.Body>
                            <Card.Title>Medical Care Center</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <button className="btn btn-danger w-50 mx-auto px-3 rounded-pill">Doctor details</button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Card className="shadow border-0 h-100 p-3 rounded">
                        <Card.Img variant="top" src="https://i.ibb.co/n3gVjbt/ani-kolleshi-7jjn-J-QA9f-Y-unsplash.png" />
                        <Card.Body>
                            <Card.Title>Medical Care Center</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <button className="btn btn-danger w-50 mx-auto px-3 rounded-pill">Doctor details</button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <Card className="shadow border-0 h-100 p-3 rounded">
                        <Card.Img variant="top" src="https://i.ibb.co/n3gVjbt/ani-kolleshi-7jjn-J-QA9f-Y-unsplash.png" />
                        <Card.Body>
                            <Card.Title>Medical Care Center</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <button className="btn btn-danger w-50 mx-auto px-3 rounded-pill">Doctor details</button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Doctors;