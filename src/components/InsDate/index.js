

import {it} from "date-fns/locale";
import {formatRelative} from "date-fns";

const InsDate = (props) => {
    return ( <p>
               <small> {formatRelative(new Date(props.date), new Date() , {addSuffix:true, locale:it,})} </small>     
                </p>
            );
    }

    export {InsDate};