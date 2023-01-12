import React from "react";
import Heart from '@mui/icons-material/Favorite';
import Share from '@mui/icons-material/Share';
import Location from '@mui/icons-material/LocationOn';
import { Star, Message, Call } from "@mui/icons-material";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Product = (e) => {

    const data = e.data;
    const [viewForm, setViewForm] = React.useState(false);
    const handleForm = () => {
        setViewForm(true);
    }

    return (
        <div className="product__container">
            <div className="product__tab">
                <div className="product__tab__item">
                    <span> {data.service} . {data.location} </span>
                </div>
                <div className="product__tab__item">
                    <Heart/> <Share/>
                </div>
            </div>
            <div className="product__body">
                <div className="product__body__left">
                    <div className="product__body__left__top">
                        <img src={data.images[0]} alt="product" />
                    </div>
                    <div className="product__body__left__bottom">
                        <div className="product__body__left__bottom__item">
                            <div className="s1">
                                <span className="title">{data.title}</span>
                                <span className="location"> <Location/> {data.location}</span>
                                <span className="contact" onClick={handleForm}> <Call/> Contact </span>
                            </div>
                            <div className="s2">
                                <span className="rating"> <Star/> {data.rating} </span>
                                <span className="reviews"> {data.reviews} Reviews </span>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="product__body__right">
                    <div className="product__body__right__top">
                        <p> Starting Price </p>
                        <span>  &#8377;  {data.price} per {data.service}</span>
                    </div>
                    <div className="product__body__right__mid">
                        <div className="send_message" onClick={handleForm}><span> <Message/> Send Message </span></div>
                        <div className="view_contact" onClick={handleForm}><span> <Call/> View Contact </span></div>
                    </div>
                    {
                        viewForm ? <div className="product__body__right__bottom">
                        <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" placeholder="Enter Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <Form.Label>Phone No.</Form.Label>
                            <Form.Control type="phone" placeholder="Enter Phone No." />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        </Form>
                    </div> : null
                    }
                    
                </div>
            </div>
            <div className="footer__container dfccc">
                <div className="footer__container__info">Copyright © House Of Couton</div>
            </div>
        </div>
    )
}

export default Product;