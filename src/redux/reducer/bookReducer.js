export default function bookReducer(state = [] , action){

    switch(action.type){
        case "SET_BOOKS":
             return action.value;
        default:
             return state;
    }

}