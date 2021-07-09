import React from 'react';
import BookCard from './BookCard'

const BookContainer = ({books, addBook, bookDelete, bookEdit}) => {
   
  return(
    <div >
    <div className="first" >
      {/* Render the collection of BookCards */}
      {/* map array of books  */}
    {/* {toys.map(toy => {
		return ( 
	<BookCard key={toy.id} toy={toy}/>
        )
      })} */}
      <h1 className="books">All Books</h1>
    {books.map(book => {
		return ( 
	<BookCard key={book.id} book={book} manageBooks={addBook} bookDelete={bookDelete} bookEdit={bookEdit}/>
        )
      })}

    </div>
    </div>
  );
}

export default BookContainer;
