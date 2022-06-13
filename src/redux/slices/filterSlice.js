import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeCategoryId: 0,
  categoryItems: ["-rating","price","title"],
  //тип сортировки по умолчанию
  sortType: 0,
  sortList:['популярности','цене','названию'],
  categoriesTitles:['Все','Мясные','Вегетарианская','Гриль','Острые'],
  
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers:{
    setActiveCategoryId(state, action){
        state.activeCategoryId = action.payload;
    },
    setSortType(state,action){
        state.sortType = action.payload;
    },
    setCategoryItems(state,action) {
        state.categoryItems = action.payload;
    },
    setSortList(state,action){
        state.sortList = action.payload;
    },
    setCategoriesTitles(state,action){
      state.categoriesTitles = action.payload;
    },
    setFilters(state,action){
      state.activeCategoryId = Number(action.payload.category); 
      state.sortType = state.categoryItems.indexOf(action.payload.sort);
    },
  }
});

export const { setActiveCategoryId, setSortType, setCategoryItems, setSortList, setCategoriesTitles, setFilters } = filterSlice.actions;

export default filterSlice.reducer;