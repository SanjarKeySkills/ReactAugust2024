import React, { useState } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark");

    const defaultProps = {
        theme: theme,
        setTheme: setTheme,
    };

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;

// ThemeContext.Provider - обеспечивает соединение с барузером, контекст это с джаваскрипта
// он позволяет создавать вонетекст внутри приложения чтоб передавать некоторые данные
// { children } - это то во что мы обертываем App. И этот App будет считаться чиддреном в этом компоненте.
// и теперь этот { children }  мы вставляем внутри этого Provider

// в value={{}} дарк или лайт - изменения темы, чтобы оно изменяло тему сайта
// поэтому в value={{}} передаем объект defaultProps с полями theme: theme и функцией setTheme: setTheme,
// далее создаем useState() c этими же полями

// в value={{}} мы можем получить любое значение из компонента { children }, а { children } это у нас App
// получается все что из App можем получить из него эти данные. А эо в данном случае тема и мы можем получить
// изменения темы
