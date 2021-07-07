import React, { Component } from 'react'

class BookForm extends Component {

render () {

    return (

        <div>
            <h2>Add a new Book to the collection</h2>
<form onSubmit={this.props.bookSubmit}>
<input type="text" name="name" placeholder="name"></input>
<button className="favorite-button" type="submit"> send </button>
<br></br>
</form>
        </div>
    )
}


}

export default BookForm