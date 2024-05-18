import Product from './Product.jsx';
import viteLogo from '/vite.svg'
import reactLogo from './assets/react.svg'

function ProductTab(){
    let options= ["high-tech", "fast", "durable", "efficient"];
    // let opt= { a: "high-tech", b: "fast", c:"durable", d:"efficient" };

    return (
        <>
        <Product icon={viteLogo}
         title="Sira Software"
         description= "Project and issue tracking"
          price={3000}
          
        //   features={options}
         
             />
        <Product icon={reactLogo} title="Sira Legos" description= "Legos and issue tracking"
         price={1600}
          />
        <Product title="Sira Analytics" description= "Analytics and issue tracking!"
         price={6500}
         />
         </>
    );
}

export default ProductTab