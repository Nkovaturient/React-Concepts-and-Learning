function handleClick(event){
    event.preventDefault();
console.log("btn was clicked!");
console.log(event);
}

function handleHover(){
    console.log(" btn was hovered!");
}

function handleDblClick(){
    console.log("btn was double clicked!");
}

export default function Button() {
    return(
        <div>
            <button onClick={handleClick}>Click Me!</button>
            <p onMouseOver={handleHover}>Hover over Me! Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quo, quae soluta atque placeat dolor magni ducimus quam assumenda dicta voluptas dolorem voluptatibus sint, enim provident rerum! Impedit, corrupti iste!</p>
            <button onDoubleClick={handleDblClick}>Double click</button>
        </div>
    )
}