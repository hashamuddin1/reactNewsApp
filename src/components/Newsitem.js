import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let title = this.props.title;
    let description = this.props.description;
    let imageUrl = this.props.imageUrl;
    let newsUrl = this.props.newsUrl;
    return (
      <>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={imageUrl}
            className="card-img-top"
            alt="..."
            style={{ height: "150px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target="_blank" className="btn btn-primary">
              Go To News
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Newsitem;
