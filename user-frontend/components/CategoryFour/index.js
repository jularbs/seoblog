import React from "react";
import FontAwesome from "../uiStyle/FontAwesome";
import Link from "next/link";
const category = [
  "Restaurent",
  "Intertainment",
  "Sports",
  "Business",
  "Financial",
  "Business",
];
const CategoryFour = () => {
  return (
    <div className="category4 mb30 border-radious5 shadow7 white_bg padding20">
      <h3 className="widget-title">Categories</h3>
      <ul>
        {category.map((cat, i) => (
          <li key={i}>
            <Link href="/">
              <a>
                {cat}
                <FontAwesome name="play" />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFour;
