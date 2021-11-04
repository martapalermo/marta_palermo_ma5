const defaultState = [['', '','',''], 0];


export default function boardReducer(state = defaultState, action) {   
   
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