import React from "react";
import {deleteAuthor} from "./redux/actionCreators";
import {connect} from "react-redux";

const AuthorCard = props => {
  const author = props.author;
  const authorName = `${author.first_name} ${author.last_name}`;
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="card">
        <div className="image">
          <img
            className="card-img-top img-fluid"
            src={author.imageUrl}
            alt={authorName}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">
            <span>{authorName}</span>
          </h5>
          <small className="card-text">{author.books.length} books</small>
          <button className="btn btn-danger btn-block" onClick={() => props.deleteAuthorHandler(author)}>DELETE</button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    deleteAuthorHandler: (author) => dispatch(deleteAuthor(author))
  };
};

export default connect(null, mapDispatchToProps)(AuthorCard);
