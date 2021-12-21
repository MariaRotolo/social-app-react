import {InsDate} from "../InsDate";
import styles from './PostPreview.module.scss'

const PostPreview = (props) => {
    const data = props.data || {
        author:'User',
        text: 'lorem ipsum', 
        date: new Date(), 
        photo: 'https://images.unsplash.com/photo-1639512398860-be15f48100ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80'
    }

   // const createDate = (date) => new Date(date);

    return (
        <article className={styles.post}>
            <h3>{data.author}</h3>
            <p><small>{data.date? <InsDate date = {data.date}/> : <></>} </small></p>
            <p>{data.text}</p>

            {data.photo ? <img src={data.photo} alt={data.author}/> : <></>}
        </article>
    )
}

export {PostPreview}