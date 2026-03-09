import { createSlice } from "@reduxjs/toolkit";

const customerSlice = createSlice({
    name: "customer",
    initialState: {
        customers: [],
        status: "idle",
    },
    reducers: {
        loadCustomers: (state) => {
            state.status = "loading";
        },
        setCustomers: (state, action) => {
            state.customers = action.payload;
            state.status = "success";
        },
    },
});

export const { loadCustomers, setCustomers } = customerSlice.actions;
export default customerSlice.reducer;