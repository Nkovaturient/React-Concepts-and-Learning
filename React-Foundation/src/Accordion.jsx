import { useState } from "react"

export const ImageAccordion= ({items}) =>{
    const [active, setActive] = useState(0);
    const handToggle= (index) => setActive(index);
    return (
        <section className="image-accordion">
            {items.map((item, index) => {
                const isActive = 
                active === index ? "active" : "";
                return(
                    <article
                    key={item.image}
                    className= {
                        `image-accordion-item ${isActive}`
                    }
                    onClick={ ()=> handToggle(index)}
                    >
                        <img src={item.image} alt="img" />
                        <div className="content">
                            <span className="material-symbols-outlined">photo_camera</span>
                            <div>
                        <h2>{item.header}</h2>
                        <p>{item.text}</p>
                        </div>
                        </div>
                    </article>
                );
            })}

        </section>
    );
}