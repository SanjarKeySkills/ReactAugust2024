import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage/MainPage";
import MainPageLayout from "./layouts/MainPageLayout";

import "./App.css";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage/ProfilePage";
import { ThemeContext } from "./context/Theme/ThemeContext";

const App = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    // этот хук который предоставляет нам котекст если он завернут в провайдер
    // это часто используется для языков, для тем, для модалок

    const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

    return (
        <div className={`app ${theme}`}>
            <Routes>
                <Route element={<MainPageLayout />}>
                    {/* еще одно обворачивание в Route нужно чтоб ставить Layouts */}
                    <Route path="/" element={<MainPage />} />
                    {/* этот компонент будет отрендривать <MainPage />
						теперь <MainPage /> является дочерним к лэйауту <MainPageLayout />
						и его в файле <MainPageLayout /> можно показывать через <Outlet>
					*/}
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
                {/* Это подучается целая старница с NotFoundPage в которой есть компонент NotFound */}
            </Routes>
            <button onClick={toggleTheme}>TOGGLE THEME</button>
        </div>
    );
};

export default App;
