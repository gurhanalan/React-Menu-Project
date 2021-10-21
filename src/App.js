import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

/* 
const filtersAlternative = [
    "all",
    ...new Set(items.map((item) => item.category)),
];
console.log(filtersAlternative);
 */
function App() {
    const [menuItems, setMenuItems] = useState(items);

    const [filters, setFilters] = useState(
        items
            .map((item) => item.category)
            .reduce(
                (prev, curr) => {
                    if (!prev.includes(curr)) {
                        prev.push(curr);
                    }

                    return prev;
                },
                ["all"]
            )
    );

    const filterMenu = (filter) => {
        if (filter === "all") {
            setMenuItems(items);
        } else {
            setMenuItems(items.filter((item) => item.category === filter));
        }
    };
    return (
        <>
            <Menu filterMenu={filterMenu} filters={filters} />
            <div className="section-center">
                {menuItems.map((item) => (
                    <Categories key={item.id} item={item} />
                ))}
            </div>
        </>
    );
}

export default App;
