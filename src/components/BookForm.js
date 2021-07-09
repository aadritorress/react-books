import React, { Component } from 'react'

class BookForm extends Component {

render () {

    return (
<div>
        <div className="first">
            <h2 className="add-edit">Add Book</h2>
<form onSubmit={this.props.bookSubmit}>
<input type="text" name="name" placeholder="name"></input>
<button className="favorite-button" type="submit"> send </button>
<br></br>
</form>
<br></br>
<br></br>
        </div>
        <div className="second">
            <h2 className="add-edit">Edit Book</h2>
<form onSubmit={this.props.updateBook}>
<input type="text" name="name" placeholder="name" onChange={this.props.changeName}  value={this.props.book.name}></input>
<button className="favorite-button" type="submit"> edit </button>
</form>
<br></br>
<br></br>
        </div>
        </div>
    )
}


}

export default BookForm