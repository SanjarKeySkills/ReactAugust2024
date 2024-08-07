import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header/Header";
// import Menu from "./components/Menu/Menu";
import Footer from "../components/Footer/Footer";

const MainPageLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            {/* <Menu /> */}
            <Footer />
        </div>
        // о сути тут все что внутри роутера <Route path="/" element={<MainPage />} />
        // B вот теперь раз <Outlet /> это наши компоненты, мы сверху него можем показать Header
    );
};

export default MainPageLayout;
