import React from "react";
import {connect} from "react-redux";
import {addAuthor} from "./redux/actionCreators";


const Sidebar = props => {
    const newAuthor = {
        id: props.newAuthorId,
        first_name: "Author",
        last_name: "McAuthorFace",
        imageUrl:
            "https://www.netz.de/images/2016-11-21-firefox-focus-header-58cfedd908c25_500_300.jpg",
        books: [
            {
                title: "Anonymous book",
                color: "mysterious color"
            }
        ]
    };


  return (
    <div id="sidebar">
      <img src="theindex.svg" className="logo" alt="the index logo" />
      <section>
        <h4 className="menu-item active">
          <button>AUTHORS</button>
        </h4>
        <button
          id="add-button"
          className="btn btn-block btn-light"
          onClick={() => props.addAuthorHandler(newAuthor)}
        >
          + ADD AUTHOR
        </button>
      </section>
    </div>
  );
};

const mapStateToProps = state => {
    return {
        newAuthorId: state.newAuthorId +1,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addAuthorHandler: (newAuthor) => dispatch(addAuthor(newAuthor))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
