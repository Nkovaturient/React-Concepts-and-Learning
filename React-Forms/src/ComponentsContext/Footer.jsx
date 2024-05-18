import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export default function Footer(){
    const {isDarkMode}= useContext(ThemeContext);

    return(
        <section className={`${isDarkMode? "footer footer--dark" : "footer"}`}>
            <div className="container">
                <p>&copy; 2024 React Project. All Rights Reserved.</p>
            </div>
        </section>
    )
}