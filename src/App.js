// import book from '/public';
import './App.css';
import React from 'react'
import BookContainer from './components/BookContainer'
import MyBooks from './components/MyBooks';
import BookForm from './components/BookForm';

class App extends React.Component {

  state = {
    books: [],
    book: {},
    allBooks: false, 
    myBooks: [],
    displayMyBooks: false, 
    displayForms: false
  }
  
allBooks = () => {
  this.setState({ allBooks: !this.state.allBooks })
}

displayMyBooks = () => {
  this.setState({ displayMyBooks: !this.state.displayMyBooks })
}

displayForms = () => {
  this.setState({ displayForms: !this.state.displayForms})
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

    bookEdit = (book) => {
    console.log(book)
    this.setState({book: book})
    }

    changeName = (e) => {
    const bookName = e.target.value 
    this.setState(bookBefore => {
    return {book: {...bookBefore.book, name: bookName}}
    })
    }

    updateBook = () => {
  // console.log('submitted', pizzaSelected)
  if (this.state.book.id) {
    const bookId = this.state.book.id
    fetch(`http://localhost:3000/books/${bookId}`, {
      method: "PATCH", 
      headers: {
        'content-type':'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify(this.state.book)
    })
    .then(resp => resp.json())
    .then(updatedbook => {
      const newbook = this.state.books.map(book => 
        {
        if(book.id === bookId) {
          return updatedbook
        } else {
          return book 
        }
      })
      this.setState({books: newbook, displayMyBooks: true})
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
 <h1 className="title"> BOOK CLUB </h1>
{/* <img alt= '' src={window.location.origin + '/book.jpg' } /> */}
 <br></br>
 <br></br>
<button onClick={this.allBooks}> All Books </button>
<button onClick={this.displayMyBooks}> My Books  </button>
<br></br>
 <button onClick={this.displayForms}>Add or Edit Books </button>
{this.state.displayForms && <BookForm book={this.state.book} bookSubmit={this.bookSubmit} bookEdit={this.bookEdit} updateBook={this.updateBook} changeName={this.changeName}/>}
<br></br>
{this.state.allBooks && <BookContainer addBook={this.addBook}  books={this.state.books} bookDelete={this.bookDelete} bookEdit={this.bookEdit}/>}
{this.state.displayMyBooks && <MyBooks removeBooks={this.removeBooks} myBooks={this.state.myBooks} />}
    </div>
    )}

  }


export default App;
