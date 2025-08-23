import {useContext , createContext} from 'react';

export const ThemeContext = React.createContext({
    themeMode: "light",
    lightTheme: () => {},
    darkTheme: () => {},

});


export const ThemeProvider = ThemeContext.Provider

export default useTheme = () => {
    return useContext(ThemeContext);
}