

const  INITIAL_STATE = {
    productLists:"test"
};
 
const reduce = (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case "productList":
            return {
                ...state,
                productLists:action.payLoad
            }
        default:
            return state;
    }
}

export default reduce;