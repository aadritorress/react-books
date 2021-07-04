import React from 'react';
import BookCard from './BookCard'

const BookContainer = ({books}) => {
 
  return(
    <div >
      {/* Render the collection of BookCards */}
      {/* map array of books  */}
    {/* {toys.map(toy => {
		return ( 
	<BookCard key={toy.id} toy={toy}/>
        )
      })} */}
    {books.map(book => {
		return ( 
	<BookCard key={book.id} book={book}/>
        )
      })}

    </div>
  );
}

export default BookContainer;
