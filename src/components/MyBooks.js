import React, { Component } from 'react';
import BookCard from '../components/BookCard'

class MyBooks extends Component {

  render() {
    return (
      <div >
      <div className="second">
        <h1 className="books">My Favorite Books</h1>
          {  
            this.props.myBooks.map(book => <BookCard key={book.id} book={book} manageBooks={this.props.removeBooks}/>)
          }
          {/* <h2>{this.props.book.name}</h2> */}
      </div>
      </div>
    );
  }

}

export default MyBooks;
