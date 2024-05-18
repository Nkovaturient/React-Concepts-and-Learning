import './App.css'
import './Amazon.css'
import Price from './Price'
import Description from './Description';


function handleHover(){
    console.log(" btn was hovered!");
}


export default function AmazonCard({title, descIndex, idx}){

    let oldPrice=["12,495", "11,900", "829", "598"];
    let newPrice=["8,999", "9,199", "567", "298"];
    // let d1=[ "8,000 DPI", "Intuitive touch surface", "Designed for iPad Pro", "Wireless Mouse 2.4GHz"];
    // let d2=["5 Programmable Buttons", "Designed for iPad Pro",  "Intuitive touch surface", "Optical orientation"];

    // or 2d array
    let desc=[["8,000 DPI", "5 Programmable Buttons"],
     ["Intuitive touch surface", "Designed for iPad Pro"],
    ["Designed for iPad Pro",  "Intuitive touch surface"],
    ["Wireless Mouse 2.4GHz", "Optical orientation" ] 
];
    return (
        <>
        <div className="card-container">
            <h4>{title}</h4>
            <Description d1={desc[idx][0]} d2={desc[idx][1]} />
            {/* <Description d1={d1[descIndex]} d2={d2[descIndex]} /> */}
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
        </div>
        </>
    )
}