import React from 'react'
import moment from "moment";

export default function Card({data}) {

    return (
      <div className="card mb-4 shadow border-0 rounded-lg">
        <div className="row g-0">
          <div className="col-md-4 p-0">
            <img
              src={
                data.urlToImage
                  ? data.urlToImage
                  : "https://launchfulfillment.com/wp-content/uploads/2016/04/dummy-post-horisontal.jpg"
              }
              className="img-fluid rounded-start h-100"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h6 className="card-title">{data.title}</h6>
              <p className="card-text">{data.description}</p>
              <div className="d-flex justify-content-between">
                <p className="card-text">
                  <small className="text-muted">{data.author}</small>
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    {moment(data.publishedAt).fromNow()}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
