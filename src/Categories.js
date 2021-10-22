import React from "react";

const Categories = ({ item: { title, price, img, desc } }) => {
    return (
        <div className="menu-item">
            <img className="photo" src={img} alt={title} />
            <div className="item-info">
                <header>
                    <h4>{title}</h4>
                    <h4 className="price">${price}</h4>
                </header>
                <p className="item-text">{desc}</p>
            </div>
        </div>
    );
};

export default Categories;
