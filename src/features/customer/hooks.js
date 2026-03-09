import { useDispatch, useSelector } from "react-redux";
import { loadCustomers } from "./reducer";

export const useCustomers = () => {
    const dispatch = useDispatch();
    const customers = useSelector((state) => state.customer.customers);
    const status = useSelector((state) => state.customer.status);

    return {
        customers,
        status,
        load: () => dispatch(loadCustomers()),
    };
};