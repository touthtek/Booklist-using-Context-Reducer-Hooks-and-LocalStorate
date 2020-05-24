import React, { useContext } from 'react';
import { BookContext } from '../context/bookcontext';


const NavBar = () => {
    
    const {books} =  useContext(BookContext);
     
    return (
         <div className="navbar">
             <h1>Olu-Johnson reading list</h1>
             <p>you have {books.length} to read</p>
         </div>
      );

    }
        
export default NavBar;
