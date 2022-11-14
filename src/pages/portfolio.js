import React from "react";
import "./style.css";
// import "./pages/images";

function PortfolioPage() {
    return <section>
        <h2>Portfolio</h2>
        <section class="page-section" id="work">
            <h2>Work</h2>
            <div class="flex-container">
                 <a class="flex-item" href="https://rubendc91.github.io/NutriTeam/" target="_blank">
                    <div>
                        <h3>Project 1</h3>
                        <span>Nutrition Finder</span>
                    </div>
                </a> 
                <a class="flex-item" href="https://github.com/Grunt395/Trivia-Game" target="_blank">
                    <div>
                        <h3>Project 2</h3>
                        <span>Trivia Game</span>
                    </div>
                </a>
                <a class="flex-item" href="https://github.com/hale-bopp97/fantastic_ecomerce" target="_blank">
                    <div class="container">
                        <h3>Project 3</h3>
                        <span>Ecommerce App</span>
                    </div>
                </a>
                 <a class="flex-item" href="https://github.com/Grunt395/Placeholder-Project-4" target="_blank">
                    <div>
                        <h3>Placeholder 4</h3>
                        <span>Survey Form</span>
                    </div>
                </a>
                 <a class="flex-item" href="https://github.com/Grunt395/Placeholder-Project-5" target="_blank">
                    <div>
                        <h3>Placeholder 5</h3>
                        <span>Messaging App</span>
                    </div>
                </a>
            </div>
        </section>
    </section>
}

export default PortfolioPage;