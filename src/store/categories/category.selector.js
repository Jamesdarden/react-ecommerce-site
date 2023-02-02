
import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

// create selector memorizes / caches state only if state changes does it cause a rerender in redux
export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories // copy of the categories array
);

export const selectCategoriesMap =  createSelector(
    [selectCategories],
    (categories) => categories.reduce(
      (acc, { title, items }) => {
        acc[title.toLowerCase()] = items;
        return acc;
      }, {})
);

