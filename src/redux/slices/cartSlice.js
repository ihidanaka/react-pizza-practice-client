import {
    createSlice
} from "@reduxjs/toolkit";
import _ from "lodash";


const initialState = {
    totalPrice: 0,
    itemsInCart: []
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemCart(state, action) {
            const equalItem = state.itemsInCart.find(obj => (_.isEqual(obj.id, action.payload.id)) && (_.isEqual(obj.activeParams, action.payload.activeParams)))
            if (equalItem) equalItem.amountInCart++;
            else {
                action.payload.amountInCart++;
                state.itemsInCart.push(action.payload);

            };
            state.totalPrice = state.itemsInCart.reduce((sum, obj) => {
                return obj.price * obj.amountInCart + sum;
            }, 0)
        },
        changeItemAmount(state, action) {
            const equalItem = state.itemsInCart.find(obj => (_.isEqual(obj.id, action.payload.id)) && (_.isEqual(obj.activeParams, action.payload.activeParams)))
            if (equalItem && equalItem.amountInCart > 1) equalItem.amountInCart--;
            state.totalPrice = state.itemsInCart.reduce((sum, obj) => {
                return obj.price * obj.amountInCart + sum;
            }, 0)
        },
        removeItem(state, action) {

            state.itemsInCart = state.itemsInCart.filter(obj => {
                return !((_.isEqual(obj.id, action.payload.id)) && (_.isEqual(obj.activeParams, action.payload.activeParams)))
            }) //!((_.isEqual(obj.id, action.payload.id)) && (_.isEqual(obj.activeParams, action.payload.activeParams)))
        },
        clearCart(state) {
            state.itemsInCart = [];
        },

        setTotalPrice(state, action) {
            state.totalPrice = action.payload;
        },

    }
});

export const {
    addItemCart,
    setTotalPrice,
    removeItem,
    clearCart,
    changeItemAmount,

} = cartSlice.actions;

export default cartSlice.reducer;