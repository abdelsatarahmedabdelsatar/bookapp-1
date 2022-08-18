export default function PreviuosReducer(state = [] , action){

    switch(action.type){
        case "SET_PREVIOUS_PAGE":
             return action.value;
        default:
             return state;
    }

}