// import book from '/public';
import './App.css';
import React from 'react'
import BookContainer from './components/BookContainer'
import MyBooks from './components/MyBooks';
import BookForm from './components/BookForm';

class App extends React.Component {

  state = {
    books: [],
    allBooks: false, 
    myBooks: [],
    displayMyBooks: false, 
    showEditForm: false
  }
  
allBooks = () => {
  this.setState({ allBooks: !this.state.allBooks })
}

displayMyBooks = () => {
  this.setState({ displayMyBooks: !this.state.displayMyBooks })
}

myBooks = () => {
  console.log('my books')
}


  bookSubmit = (e) => {
    e.preventDefault()

    let newBook = { name: e.target.name.value }
    console.log(newBook)

    fetch("http://localhost:3000/books", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(newBook)
    })
      .then(resp => resp.json())
      .then(bookCreated => this.setState({ books: [...this.state.books, bookCreated] })
      )
    e.target.reset();
  }

    updateBook = () => {

    }

    bookEdit = (book) => {
    console.log(book)
      if (book.id) {
        fetch(`http://localhost:3000/books/${book.id}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'accept': 'application/json'
    }
  })
  .then(res => res.json())
  .then(bookInfo => {
    this.setState({book: bookInfo, showEditForm: true})
      }) 
      }
    }

    bookDelete = (book) => {
      console.log(book)
    fetch(`http://localhost:3000/books/${book.id}`,{
      method: 'DELETE'
    })
    this.setState({
      book: this.state.books.filter((obj) => {return obj !== book})
    })
  }

componentDidMount() {
   fetch('http://localhost:3000/books')
  .then(resp => resp.json())
  .then(books => this.setState({books}));
  }

addBook = (newBook) => {
  if(!this.state.myBooks.find(book => book === newBook)){
  this.setState({myBooks: [...this.state.myBooks, newBook]})}
}

removeBooks = (deletedBook) => {
  this.setState({myBooks: this.state.myBooks.filter(Book => Book !== deletedBook)})
}

  render() 
    { 
  return (
    <div>
 <h1> BOOK CLUB </h1>
<img alt= '' src={window.location.origin + '/book.jpg' } />
 <br></br>
 <br></br>
<BookForm bookSubmit={this.bookSubmit} />
<button onClick={this.allBooks}> All Books </button>
<button onClick={this.displayMyBooks}> My Books  </button>

{this.state.allBooks && <BookContainer addBook={this.addBook}  books={this.state.books} bookDelete={this.bookDelete} bookEdit={this.bookEdit}/>}
{this.state.displayMyBooks && <MyBooks removeBooks={this.removeBooks} myBooks={this.state.myBooks} />}
    </div>
    )}

  }


export default App;
