import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActiveCategoryId } from "../redux/slices/filterSlice";

function Categories() {
  const { activeCategoryId, categoriesTitles } = useSelector(
    (state) => state.filter
  );
  const dispatch = useDispatch();
  return (
    <div className="categories">
      <ul>
        {categoriesTitles.map((categoryName, index) => (
          <li
            key={index}
            onClick={() => {
              dispatch(setActiveCategoryId(index));
            }}
            className={activeCategoryId === index ? "active" : ""}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Categories;
