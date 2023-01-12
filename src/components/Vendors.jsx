import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "./Card";
import Data from "../data/data.json";
import {Link} from "react-router-dom";
import Heart from '@mui/icons-material/Favorite';
import Info from '@mui/icons-material/Info';

const Vendors = () => {
    const dataLen = Data.data.length ;
    const [data, setData] = React.useState(Data.data);
    const [showMore, setShowMore] = React.useState(6);

    const handleShowMore = () => {
        setShowMore(showMore + 6);
    }
    React.useEffect(() => {
        setData(Data.data.slice(0, showMore));
    }, [showMore])


return (
    <div className="home__div">
        <div className="home__filters">
            <div className="home__filters__btn"> <span>city </span></div>
            <div className="home__filters__btn"> <span>Wedding Services</span></div>
            <div className="home__filters__btn"> <span>Filter</span></div>
        </div>
        <div className="home__results-info">
            <div className="home__results-info-text">
                <p>Wedding Vendors</p>
                <p>Showing {dataLen} results</p>
            </div>
        </div>
        <div className="home__container">
            {data.map((item) => (
                <div>
                    <Link to={`/feba/${item.id}`}><Card key={item.id} data={item} /></Link>
                    <div className="more__info"> <span><Info/></span> </div>
                    <div className="fav__btn"> <span > <Heart/> </span> </div>
                </div>
            ))}
        </div>
        <div className="home__show-more">
            <button className="br5" onMouseEnter={handleShowMore}>Show More</button>
        </div>


    </div>

);
 
}

export default Vendors;