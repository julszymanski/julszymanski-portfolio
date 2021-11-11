//define all states to be maintained by redux, write reducer fns to alter states for those variables

const initState = {
    counterValue:0
}

const reducer = (state=initState, action) => {
    if(action.type === 'LIKED') {
        //sending as comma separated list to return an array
        return {
            counterValue: state.counterValue+1
        }
    }
    return state;
}

export default reducer;

// after defining reducer fn, create store// 