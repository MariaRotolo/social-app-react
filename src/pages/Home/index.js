import {useEffect, useState} from "react";
import { FriendPreview } from "../../components/FriendPreview/index.js";
import {MessagePreview} from "../../components/MessagePreview/index.js";
import { PostPreview } from '../../components/PostPreview/index.js';
import { http } from "./../../libs/http.js";
import styles from "./Home.module.scss";
import react from "react";
//import style from "../../components/FriendPreview.module.scss";

const friends = [
    { name: "Chandler", photo: "https://elementsrl.it/wp-content/uploads/2018/01/avatar-1577909_960_720.png"},
    { name: "Chandler", photo: "https://elementsrl.it/wp-content/uploads/2018/01/avatar-1577909_960_720.png"},
    { name: "Chandler", photo: "https://elementsrl.it/wp-content/uploads/2018/01/avatar-1577909_960_720.png"},
];

const posts = [
    {author: "User",
    text: "Oggi ho mangiato robba buona",
    date: new Date(),
    },
    {author: "User",
    text: "Oggi ho mangiato robba buona",
    date: new Date(),
    },
    {author: "User",
    text: "Oggi ho mangiato robba buona",
    date: new Date(),
    }
];

const messages = [
    {text: "Lorem Ipsum", date: new Date(), sender: "Pippo",},
    {text: "Lorem Ipsum", date: new Date(), sender: "Pippo",},
    {text: "Lorem Ipsum", date: new Date(), sender: "Pippo",},
];

const Home = () => {
    
    const [friendsPreview, setFriendsPreview] = useState(friends); // inizializzo uno stato.
    const [allPosts, setAllPosts] = useState(posts);
    const [messagesPreview, setMessagesPreview] = useState(messages);
    
    

    useEffect(() =>{
        http("/friends?_limit=4") 

        .then ((data) => setFriendsPreview(data));

        http("/messages?_limit=4") 
        
        .then ((data) => setMessagesPreview(data));

        http("/posts") 
        
        .then ((data) => setAllPosts(data));

    }, []);

    return <section className={styles.home}> 
        <h3> Benvenuto utente</h3>
        <div className={styles.grid}>
            <aside>
                {friendsPreview.map((friends, index) => ( <FriendPreview key = {index} data = {friends} />
                ))}
            </aside>
            <main>
                {allPosts.map((posts, index) => (
                        <PostPreview key={index} data={posts} />
                    ))}
                </main>
            <aside> 
            {messagesPreview.map((messages, index) => ( <MessagePreview key = {index} data = {messages} />
                ))}
            </aside>
        </div>
    </section>
} 

export default Home;