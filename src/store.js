import { createStore } from "redux";
import rootred from "./components/redux/reducers/main";
// import rootred from "./redux/reducers/main";


const store = createStore(
    rootred
);


export default store;