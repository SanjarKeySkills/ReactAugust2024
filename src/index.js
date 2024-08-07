import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import ThemeProvider from "./context/Theme/ThemeProvider";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>
);
{
    /* это в роутах тоже рассматривает как врапперы контекста - в данном случае для <App /> */
}

// это называется propd trelling - любые компоненты в любом месте можно взяти
