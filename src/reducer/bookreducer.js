import React, {useState} from 'react';
import uuid from 'react-uuid';

const BookReducer = (state, action) => {
    
     switch(action.type)
     {

         case 'Add_Book' : 
         console.log(action.book);
         if(action.book.title ==="" || action.book.author ==="")
         {
             return state;
         }
         const newItem = {id : uuid(), title : action.book.title, author : action.book.author }
         return [
             ...state,
             newItem
         ];
         case 'Remove_Book' : 
          return state.filter(items => items.id !== action.book.id );

         default : 
         return state
     }


}
 
export default BookReducer;