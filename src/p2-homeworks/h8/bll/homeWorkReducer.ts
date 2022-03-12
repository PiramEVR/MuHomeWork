import {UserType} from "../HW8";

export const homeWorkReducer = (state: UserType[], action: any): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const copyState = [...state].sort((a, b) => a.name.toLocaleUpperCase() < b.name.toUpperCase() ? -1 : 1)
            if(action.payload === 'up') {
                return copyState
            }
            return copyState.reverse()
        }
        // case 'down': {
        //     return[...state].sort((a, b) => a.name.toLocaleUpperCase() < b.name.toUpperCase() ? -1 : 1).reverse()
        // }
        case 'check': {
            return state.filter(u => u.age >= 18)
        }
        default:
            return state
    }
}



