import React from "react";

import About from "../../pages/about";
import Portfolio from "../../pages/portfolio";
import Contact from "../../pages/contact";
import Resume from "../../pages/resume";
import PageContent from "../PageContent";

function Page({currentPage}) {
    const renderPage = () => {
        if (currentPage.name === "About") {
            return <About></About>
        } else if (currentPage.name === "Portfolio") {
            return <Portfolio></Portfolio>
        } else if (currentPage.name === "Contact") {
            return <Contact></Contact>
        } else if (currentPage.name === "Resume") {
            return <Resume></Resume>
        } else {
            return <About></About>
        }
    }
    return <section>
        <PageContent>{renderPage()}</PageContent>
    </section>
}

export default Page;