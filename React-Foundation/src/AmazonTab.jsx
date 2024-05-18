import AmazonCard from "./AmazonCard";
import Price from "./Price";
import './Amazon.css';

export default function AmazonTab(){

    return (
        <>
         <div className="head">
            <h2>Blockbuster Deals on Computer Accessories | Shop Now</h2>
        </div>
        <div className="body">
        <AmazonCard title="Logitech MX Master 35" 
        descIndex={0}
        idx={0}
        />
        <AmazonCard title="Apple Pencil (2nd Gen)"  descIndex={1}  idx={1} />
        <AmazonCard title="Zebronics Zeb-Transformer"  descIndex={2}  idx={2} />
        <AmazonCard title="Petronics Toad"  descIndex={3} idx={3} />
        </div>
        </>
    )
}