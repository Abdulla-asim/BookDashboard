import { useContext } from "react";
import { RoleContext } from "../context/RoleContext";
import "./bookCard.css";

const BookCard = ({ item }) => {

    const { role } = useContext(RoleContext);

    return (
        <div className="book-card">
            <div className="container">
                <img style={{ height: "200px", width: "140px", objectFit: "cover" }} src={item.image} alt="" />
                <div>{item.title}</div>
                <div> by {item.author}</div>
                {role === "admin" && <button id="delete" onClick={() => deleteBook(item.id)}>Delete</button>}
            </div>
        </div>
    )
}

export default BookCard