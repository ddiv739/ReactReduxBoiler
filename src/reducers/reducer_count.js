export default function(state = 0, action) {

    switch(action.type) {
        case "INCREMENT": 
            return state = state + action.payload;
        case "RESET":
            return state = 0;
        default:
            return state;

    }   

}