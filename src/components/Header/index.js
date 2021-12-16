import styles from "./Header.module.scss";

const Header = (props) => {
    const name = props.name || "App";
    const links = props.links || [{link: "", label: "Link"}]; // questo componente non è davvero astratto, quindi va inserito in modo specifico nel codice.
    
    return (
        <header className={styles.header}> 
            <h1> {props.name}</h1>
            <nav>
                <ul>
                { props.links.map ((item, index) => <li key={index}>
                    <a href={item.link}> {item.label}</a>
                </li>)}
                </ul>
            </nav>
        </header>
    );
};

export default Header; 