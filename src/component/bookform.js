import React, {useState, useContext} from 'react';
import { BookContext } from '../context/bookcontext';
const initialvalue = {
    title : "",
    author : ""
};
const BookForm = () => {
    const [userData, setUserData] = useState(initialvalue);

    const {dispatch} = useContext(BookContext);
    const handleOnchange = event =>{
        setUserData({
            ...userData,
            [event.target.name] : event.target.value
        });

        
    }
    const handleSubmit = event =>{
        event.preventDefault();
        dispatch({type:'Add_Book', book:{title : userData.title, author : userData.author}}); 
        
        setUserData(initialvalue);
    }

    return (  
        <form  onSubmit={handleSubmit}> 

           <input type="text" 
            placeholder="title"
            name="title"
            value={userData.title}
            onChange ={handleOnchange}
            />
             <input type="text" 
             placeholder="Author"
            name ="author"
            value = {userData.author}
            onChange ={handleOnchange}
            />
            <input type="submit" value ="Add Book" />
        </form>
    );
}
 
export default BookForm;