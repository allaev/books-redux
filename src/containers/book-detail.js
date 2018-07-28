import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div>Select a book to get started</div>
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Author: {this.props.book.author}</div>
        <div>Genre: {this.props.book.genre}</div>
        <div>Pages: {this.props.book.pages}</div>
        <div>
          <a href={this.props.book.link}>
            <img src={this.props.book.image} className='img-thumbnail'/>
          </a>
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
