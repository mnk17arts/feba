import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Star from '@mui/icons-material/Star';
import Location from '@mui/icons-material/LocationOn';


function CarouselFadeExample(e) {
  return (
    <Carousel fade="true">
        {
            e.imgs.map((img, index) => {

                return (                
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={img}
                        alt={`${index} slide`}
                        />
                    </Carousel.Item>
                )

            })
        }

    </Carousel>
  );
}


const Card = (e) => {

    const data = e.data;

    return (
        <div className="card__container">
            <div className="card__media">
                <CarouselFadeExample imgs={data.images} />

            </div>
            <div className="card__content dfccc">
                <div className="card__location"> <span>SUPER VENDOR</span> <Location/> {data.location}</div>
                <div className="card__title">{data.title}  <span> <Star/> {data.rating} ({data.reviewers}) </span></div>
                <div className="card__price">
                    <p>{data.service + " "} Price </p>
                    <p><span className="rupee"> &#8377; </span>{data.price}  </p>
                </div>
                <div className="card__tags">
                    {
                        data.tags.map((tag) => {
                            return (
                                <div className="card__tags__tag"> {tag} </div> 
                            )
                        })
                    }
                </div>
            </div>
        </div>

    );
}

export default Card;