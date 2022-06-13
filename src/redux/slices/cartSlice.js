import {
    createSlice
} from "@reduxjs/toolkit";
import _ from "lodash";


const initialState = {
    totalPrice: 0,
    amountItems:0,
    itemsInCart: []
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemCart(state, action) {
            let equalItem;
            state.itemsInCart.forEach(item => {

                if ((_.isEqual(item.id, action.payload.id)) && (_.isEqual(item.activeParams, action.payload.activeParams))) {
                    equalItem = item;

                }

            })
            if (equalItem) equalItem.amountInCart++;
            else {
                action.payload.amountInCart++;
                state.itemsInCart.push(action.payload);
            };
           
        },
        removeItem(state,action){
            state.itemsInCart = state.itemsInCart.filter(obj => {
                state.totalPrice = 0;
                state.amountItems = 0;
                

                return !((_.isEqual(obj.id, action.payload.id)) && (_.isEqual(obj.activeParams, action.payload.activeParams)))})//!((_.isEqual(obj.id, action.payload.id)) && (_.isEqual(obj.activeParams, action.payload.activeParams)))
        },
        clearCart(state){
            state.itemsInCart = [];
        },
        setTotalPrice(state,action){
            state.totalPrice = action.payload;
        },
        setAmountItems(state,action){
            state.amountItems = action.payload;
        }

    }
});

export const {
    addItemCart,
    setTotalPrice,
    setAmountItems,
    removeItem,
    clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;