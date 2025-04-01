import React from "react";

export const Card = (props) => {

    return(
        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3  mb-4">
          <div className="border">
            <img src={props.imageUrl} className="card-img-top" alt="..." />
            <div className="card-body text-center mb-4">
              <h5 className="card-title my-4">Card title</h5>
              <p className="card-text mb-4 px-5">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
         </div>
        </div>
      </div>
    )

    

    

}

