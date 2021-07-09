import React, { Component } from 'react'

class BookForm extends Component {

render () {

    return (
<div>
        <div>
            <h2 className="add-edit">Add a new Book to the collection</h2>
<form onSubmit={this.props.bookSubmit}>
<input type="text" name="name" placeholder="name"></input>
<button className="favorite-button" type="submit"> send </button>
<br></br>
</form>
        </div>
        <div>
            <h2 className="add-edit">Edit the Book Info</h2>
<form onSubmit={this.props.updateBook}>
<input type="text" name="name" placeholder="name" onChange={this.props.changeName}  value={this.props.book.name}></input>
<button className="favorite-button" type="submit"> edit </button>
<br></br>
</form>
        </div>
        </div>
    )
}


}

export default BookForm