import React, { Component } from 'react';
import BookCard from '../components/BookCard'

class MyBooks extends Component {

  render() {
    return (
      <div>
        <h2>My Books</h2>
          {
            //render your portfolio stocks here
            this.props.books.map( book => <BookCard key ={book.id} book={book} managebooks={this.props.removeBooks}/>)
          }
      </div>
    );
  }

}

export default MyBooks;
