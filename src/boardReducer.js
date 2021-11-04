const defaultState = [['', '','',''], 0];


export default function boardReducer(state = defaultState, action) {
   
    // if (action.type === 'clickAction') {
    //     const value = state[action.x][action.y];

    //     if (value === action.curColor) {
    //         state[action.x][action.y] = action.nextColor;
    //         state[1] += 1;
    //     } else {
    //         state[action.x][action.y] = action.nextColor;
    //         state[1] -= 1;
    //     }
    //     return [...state];
    // }
   
   
    switch (action.type) {
        case 'clickAction':
            const value = state[action.x][action.y];
            if (value === '' || value === 'white') {
                state[action.x][action.y] = 'black';
                state[1] += 1;
            } else {
                state[action.x][action.y] = 'white';
                state[1] -= 1;
            }
            return [...state];
        default:
            return state;
    }
}