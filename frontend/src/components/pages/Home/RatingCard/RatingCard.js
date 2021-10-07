import React from 'react';
import './RatingCard.css';
import Star from '../pictures/star.png'

export const RatingCard = ({
    src,
    name,
    text
}) => {
    return (
        <>
            <div className="ratingBox">
                <div className="firstColumn">
                    <img src={src}></img>
                    <p className="ratingName">{name}</p>
                </div>
                <div className="secondColumn">
                    <p className="ratingText">{text}</p>
                    <div className="stars">
                        <img src={Star} alt="Star"></img>
                        <img src={Star} alt="Star"></img>
                        <img src={Star} alt="Star"></img>
                        <img src={Star} alt="Star"></img>
                        <img src={Star} alt="Star"></img>
                    </div>
                </div>
            </div>
        </>
    )
}