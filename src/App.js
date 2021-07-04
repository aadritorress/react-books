// import book from '/public';
import './App.css';
import React from 'react'

class App extends React.Component {

  state = {
    books: []
  }
  
allBooks = () => {
  console.log('all books')
}

myBooks = () => {
  console.log('my books')
}


componentDidMount() {
    
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
<button onClick={this.myBooks}> My Books  </button>
    </div>
    )}

  }


export default App;
