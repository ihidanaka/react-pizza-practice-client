import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items:[],
  activeType:[],
  sizesPattern:[{"size":26,"price":100},{"size":30,"price":150},{"size":40,"price":200}],
  typesPattern:[{"name":"тонкое","price":100},{"name":"традиционное","price":150}],
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers:{
    setItems(state,action) {

      state.items = action.payload;
    },
    setSizes(state, action){
      state.sizesPattern = action.payload;
    },
    setTypes(state,action){
      state.typesPattern = action.payload;
    }
  }
});

export const { setItems, setSizes, setTypes } = itemsSlice.actions;

export default itemsSlice.reducer;