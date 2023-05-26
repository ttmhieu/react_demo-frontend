import React from 'react';

const CardForm = (props) => {
  return (

      <div className="card d-block mx-3" style={{ width: '20rem'}}>
        <img src="..." className="card-img-top d-block" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
  );
};

export default CardForm;