import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export default function About(){
    const {isDarkMode}= useContext(ThemeContext);

    return(
        <section className={`${isDarkMode? "about about--dark" : "about"}`}>
            <div className="container">
                <h2>About Us</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur 
                    adipisicing elit. Sapiente magni eaque ratione
                     saepe quaerat officia quis. Aut perferendis, adipisci dicta nisi
                     quas saepe veniam ea in cumque quos, quod consequatur.
                </p>
                <p>Lorem ipsum dolor sit amet
                     consectetur adipisicing elit. 
                     Molestias provident nam quis tempora, 
                     deserunt a magnam eligendi id animi.
                      Exercitationem itaque enim, sunt dolores minima voluptatibus corporis veniam dolore natus.</p>
            </div>
        </section>
    )
}