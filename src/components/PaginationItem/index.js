import { Fragment } from "react";
import style from "./PaginationItem.module.scss";

const PaginationItem = ({pageNumber, callback}) => {
    return (
        <li>
            <button onClick={callback}>{pageNumber}</button>
        </li>
    );
};

export default PaginationItem;