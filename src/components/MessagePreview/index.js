import style from "./MessagePreview.module.scss";
import {InsDate} from "../InsDate";

const MessagePreview = (props) => {
    const data = props.data || 
        {text: "Lorem Ipsum", date: new Date(), sender: "Pippo",};
    

       

    return (
        <div className={style.message}>
            <h5>{data.sender} </h5>
            <p>
            <small> <InsDate date = {data.date}/> </small>
            </p>
            <p> {data.text}</p>

        </div>
    )
}

export {MessagePreview}