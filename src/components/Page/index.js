import React from "react";

import About from "../../pages/about";
import Portfolio from "../../pages/portfolio";
import Contact from "../../pages/contact";
import Resume from "../../pages/resume";
import PageContent from "../PageContent";

function Page({currentPage}) {
    const renderPage = () => {
        if (currentPage.name === "about") {
            return <About></About>
        } else if (currentPage.name === "portfolio") {
            return <Portfolio></Portfolio>
        } else if (currentPage.name === "contact") {
            return <Contact></Contact>
        } else if (currentPage.name === "resume") {
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