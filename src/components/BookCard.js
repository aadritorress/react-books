import React, { Component } from 'react';
// import ToyContainer from './ToyContainer'


class BookCard extends Component {

//create event for click
handleClick (e) {
  e.preventDefault();
  console.log('clicked')
  //compare event with ternary operator
//   e.target.classsName === "like-btn" ? this.props.handleLike(this.props.toy) : this.props.handleDonation(this.props.toy)
}

  render() {

    return (
      <div >
        <h2>{this.props.book.name}</h2>

        <button onClick={() => this.props.manageBooks(this.props.book)} className="favorite-button"> click here to add or remove book </button>
        <button className="favorite-button"> delete book </button>
      </div>
    );
  }

}

export default BookCard;
