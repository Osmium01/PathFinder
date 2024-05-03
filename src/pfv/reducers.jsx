
import { AlgoDescription } from "./data";
export function error(msg){
    console.log(msg);
}

export function reducer(state, action){
    switch(action.type){
        case 'chooseStart':
            console.log('a')
            return {...state, idx : 0}

        case 'chooseEnd':
            return {...state, idx : 1}

        case 'changePosition':
            var idx = action.payload;
            if(state.start == true){
                return state
            }
            else if(state.idx == 0){
                console.log(idx)
                return {...state, startPos : idx}
            }else{
                return {...state, endPos : idx}
            }

        case 'MouseChange':
            return {...state, pressed : !state.pressed}

        case 'chooseWeight':
            var Weight = action.payload;
            return {...state, weight : Weight}

        case 'startGame':
            return {...state, start : true}
        
        case 'stopGame':
            return {...state, start : false}
        
        case 'setDescription':
            var key = action.payload
            return {...state, Description: AlgoDescription[key]}
        
        default:
            error('No valid action type found ' + action.type)
            return state
    }
}