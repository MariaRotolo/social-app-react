import { Link, useMatch, useResolvedPath } from "react-router-dom";

import styles from "./Header.module.scss";

const Header = (props) => {
    const name = props.name || "App";
    const links = props.links || [{link: "", label: "Link"}]; // questo componente non è davvero astratto, quindi va inserito in modo specifico nel codice.
    
    const CheckActive = (link) => {
        const resolved = useResolvedPath(link);
        const match = useMatch({path: resolved.pathname, end:true});

        return match ? styles.active : "";
    };
    return (
        <header className={styles.header}> 
            <h1> {props.name}</h1>
            <nav>
                <ul>
                { props.links.map ((item, index) => <li key={index}>
                    <Link className={CheckActive(item.link)} to={item.link}> {item.label}</Link>
                </li>)}
                </ul>
            </nav>
        </header>
    );
};

export default Header; 