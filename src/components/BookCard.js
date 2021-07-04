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
      <div>
        <h2>{this.props.book.name}</h2>
        {/* <img
          src={this.props.toy.image}
          alt={this.props.toy.name}
          className="toy-avatar"
        />
        <p>{this.props.toy.likes} Likes </p>
        <button className="like-btn" onClick={this.handleClick}>
          Like {"<3"}
        </button>
        <button className="del-btn" onClick={this.handleClick}>
          Donate to GoodWill
        </button> */}
      </div>
    );
  }

}

export default BookCard;
