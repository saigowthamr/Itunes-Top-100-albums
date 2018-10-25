import React from 'react';
import moment from 'moment';
import LazyLoad from 'react-lazyload';


import './albums.css'

export default (props) => {

    function formatDate(date, format) {
        return moment(date).format(format);
    };

    return (
        <ul className="album">

            <li className="album-item">
                <a href={props.link} target="blank" className="link">
                    <LazyLoad height={200} >
                        <img className="album-img" src={props.image} alt={'itunes' + Math.random()} />
                    </LazyLoad>
                </a>
            </li>

            <li className="title album-item">
                <a href={props.link} target="blank" className="link">
                    {props.title.slice(0, 20)}..</a></li>
            <li className="price album-item">Price:{props.price}</li>

            <li className="date album-item">Released:{formatDate(props.date, "MMM Do YY")}</li>


        </ul>
    )

}