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
      <div  onClick={() => this.props.manageBooks(this.props.book)}>
        <h2>{this.props.book.name}</h2>
      </div>
    );
  }

}

export default BookCard;
