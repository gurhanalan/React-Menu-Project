import React from "react";

const Menu = ({ filterMenu, filters }) => {
    return (
        <section className="menu">
            <div className="title">
                <h2>Our Menu</h2>
                <div className="underline" />
            </div>
            <div className="btn-container">
                {filters.map((filter, index) => (
                    <button
                        key={index}
                        className="filter-btn"
                        onClick={() => {
                            filterMenu(filter);
                        }}
                    >
                        {filter}
                    </button>
                ))}
            </div>
        </section>
    );
};

export default Menu;
