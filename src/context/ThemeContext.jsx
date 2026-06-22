import { createContext, useContext, useState , useEffect, Children } from 'react';


const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);


export const ThemeProvider = ({children}) => {

const [darkMode, setDarkMode ] = useState( () => {

    const savedTheme = localStorage.getItem("theme");

    if(savedTheme === "dark"){
        return true;
    }
    if(savedTheme === "light"){
        return false;
    }

    return false;
});

useEffect( () => {


    localStorage.setItem( "theme", darkMode ? "dark" : "light");

    if(darkMode) {
      document.documentElement.classList.add("dark");

    } else{
        document.documentElement.classList.remove("dark");
    }
}, [darkMode]);

const toggleTheme = () => {
    setDarkMode(!darkMode)
}


return( 
    <ThemeContext.Provider
    value={{darkMode, toggleTheme}}
    >
     {children}
    </ThemeContext.Provider>
)
}
