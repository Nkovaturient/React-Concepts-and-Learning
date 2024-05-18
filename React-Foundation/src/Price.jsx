
export default function Price({oldPrice, newPrice}) {


    return(
        <div className="price">
            &#8377; <strike>{oldPrice}</strike>  &nbsp; &nbsp;
            <b>{newPrice}</b>
        </div>
    )
}