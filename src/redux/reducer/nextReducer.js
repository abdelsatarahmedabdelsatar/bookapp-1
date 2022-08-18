export default function NextReducer(state = [] , action){

    switch(action.type){
        case "SET_NEXT_PAGE":
             return action.value;
        default:
             return state;
    }

}