// import book from '/public';
import './App.css';
import React from 'react'
import BookContainer from './components/BookContainer'
import MyBooks from './components/MyBooks';

class App extends React.Component {

  state = {
    books: [],
    allBooks: false, 
    myBooks: [],
    displayMyBooks: false, 
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


componentDidMount() {
   fetch('https://anapioficeandfire.com/api/books')
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
<button onClick={this.allBooks}> All Books </button>
<button onClick={this.displayMyBooks}> My Books  </button>

{this.state.allBooks && <BookContainer addBook={this.addBook}  books={this.state.books} />}
{this.state.displayMyBooks && <MyBooks removeBooks={this.removeBooks} myBooks={this.state.myBooks} />}
    </div>
    )}

  }


export default App;
