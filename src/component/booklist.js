import React, { useState, useContext } from "react";
import { BookContext } from "../context/bookcontext";



const BookList = () => {

   const {books, dispatch} =  useContext(BookContext);

    return  books.length > 0 ?( 
        <div className="book-list">
          <ul>
            {
                books.map(items => {
               return ( <li key={items.id} onClick={()=>dispatch({type:'Remove_Book', book:{id:items.id}})}>
                     <div className='title'>{items.title}</div>
                     <div className='author'>{items.author}</div>
                   
                   </li>)
                })
            }
            </ul>
            </div>
             ): (
                 <div className="empty">No book to read. Hello free time :)</div>
             )
  
}
 
export default BookList ;