
import TicketNum from './TicketNum';
import { v4 as uuidv4 } from 'uuid';

export default function Ticket({ ticket }){
    
    return(
        <div >
           
            {
                ticket.map((num, idx)=>  //remove curly braces- when map() showing undefined
                    <TicketNum num={num} key={idx} />

                )
            }
       
        </div>
        
    );

}