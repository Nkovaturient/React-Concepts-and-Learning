import './App.css'
import './Product.css'

function Product({icon, title, description, price, features}){
    // console.log(features);
    // console.log(features2);
    // console.log(props);
    let isDiscount= price> 3000 ;

    let styles= {backgroundColor: isDiscount? "aqua" : ""}; //stles basis pr condition (Dynamic Component Styling)
    return (
        <div className='Product' style={styles}>
            <img src={icon} alt="img" />
            <h3>{title}</h3>
            <p>{description}</p>
            <i>Price: {price}</i>
            {isDiscount && <p>Discount: 5%</p> }
            {/* <p>{features}</p> 
            <p>{features && features.map((feature) => { <li>{feature}</li> })}</p> */}
          
        </div>
    );
}

export default Product