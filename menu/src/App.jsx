import React from "react";
import menu from "./data";
import { useState } from "react";
import Menu from "./MEnu";
import Categories from "./Categories";

const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main className="menu">
      <div className="title">
        <h2 className="title ">Our Menu</h2>
        <div className="title-underline"> </div>
        <Categories categories={categories} filterItems={filterItems} />
      </div>
      {<Menu items={menuItems} />}
    </main>
  );
}

export default App;
