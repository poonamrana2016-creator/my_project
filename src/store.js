import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counter-slice";
import categoryReducer from "./slice/category-slice";
import Product from "./components/auth/Product";
import productReducer from "./slice/product-slice";
const store = configureStore ({
    reducer : {
        counter: counterReducer,
        category : categoryReducer,
        Product : productReducer,
    }
});

export default store