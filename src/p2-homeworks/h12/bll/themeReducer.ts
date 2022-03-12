export type ThemeType = 'dark' | 'red' | 'some'
type InitStateThemeType = {
    theme: ThemeType
}

const initState: InitStateThemeType = {
    theme: 'some'
};

export const themeReducer = (state = initState, action: changeThemeActionType): InitStateThemeType => { // fix any
    switch (action.type) {
        case "SELECT_THEME": {
            return {...state, theme: action.theme};
        }
        default:
            return state;
    }
};

export const changeThemeC = (theme: ThemeType) => {
    return {
        type: 'SELECT_THEME',
        theme
    } as const
};

type changeThemeActionType = ReturnType<typeof changeThemeC>