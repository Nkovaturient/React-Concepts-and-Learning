import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export default function Header(){
    const {isDarkMode, toggleTheme}= useContext(ThemeContext);

    return(
        <section className={`${isDarkMode? "header header--dark": "header"}`}>
            <button className="header--btn" onClick={toggleTheme}>
                {
                    isDarkMode? "Light Mode": "Dark Mode" 
                }
            </button>
        </section>
    )
}