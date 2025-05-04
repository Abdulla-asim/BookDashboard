import { useContext, useState } from "react";
import { RoleContext } from "../context/RoleContext";
import BookCard from "./BookCard";

const ToDoList = () => {

    const {role} = useContext(RoleContext);

    const [todos, setTodos] = useState([
        {id: 1, title: "The Alchemist", author: "Paulo Coelho", image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg"},
        {id: 2, title: "Mala", author: "Nemrah Ahmad", image: "https://i0.wp.com/www.vanguardbooks.com/wp-content/uploads/2024/03/A9002-f.jpg?fit=308%2C395&ssl=1"},
        {id: 3, title: "Namal", author: "Nemrah Ahmad", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL37rotrZu7XO3mktQJeMzxIdLo8Ha3ObAtg&s"},
    ]);
    
    const generateId = () => {
        return Math.max(0, ...todos.map(item => item.id)) + 1;
    }

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [image, setImage] = useState('');
    
    const addBook = () => {
        if (title.trim()) {
            setTodos([
                ...todos,
                {id: generateId(), title: title, author: author, image: image}
            ]);
            // Empty the input box value
            setTitle(''); 
            setAuthor(''); 
            setImage(''); 
        }
    }

    const deleteBook = (id) => {
        setTodos(
            todos.filter(item => item.id != id)
        );
    }

    const hadleKeyDown = (e) => {
        if (e.key == 'Enter') {
            addBook();
        }
    }

    return (
        <div className="book-list">
            <div className="books">
                <h2>My Books</h2>
                {   
                    role === "admin" 
                    &&
                    <div className="add-book">
                        <input type="text" placeholder="Book Title" value={title} onChange={(e) => (
                            setTitle(e.target.value)
                        )}/>
                        <input type="text" placeholder="Author" value={author} onChange={(e) => (
                            setAuthor(e.target.value)
                        )}/>
                        <input type="text" placeholder="Image Link" value={image} onChange={(e) => (
                            setImage(e.target.value)
                        )}/>
                        <button onClick={addBook}>Add</button>
                    </div>
                }
                <ul>
                    {todos.map(item => (
                        <li key={item.id}>
                            <BookCard item={item} />
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default ToDoList;