
import './App.css'

function Title () {
  let msg = "Title Component";
    return (
        <div>
           <h2>{msg.toUpperCase()}</h2>
           <code> 2+ 2= {2+2}</code>
            <b> Convention: Each component to be created separately</b>
            <p>I am the Description! is it working?! <b> but multiple nodes- use- "<> </>" </b>  </p>
        </div>
    );
}


// export default Title // default export
export {Title}