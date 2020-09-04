

const  INITIAL_STATE = {
    productDetailModal:false
};
 
const reduce = (state = INITIAL_STATE, action) => {
    
    switch (action.type) {
        case "productDetailModalToggle":
            return {
                ...state,
                productDetailModal:!state.productDetailModal
            }
        default:
            return state;
    }
}

export default reduce;