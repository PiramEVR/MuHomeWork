type InitStateType = {
    isLoading: boolean
}

const initState: InitStateType = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: LoadingActionType): InitStateType => { // fix any
    switch (action.type) {
        case 'LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean) => {
    return {
        type: 'LOADING',
        isLoading
    }as const
}

type LoadingActionType = ReturnType<typeof loadingAC>