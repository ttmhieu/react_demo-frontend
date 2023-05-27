import React from 'react';
import './custom.scss';

const SearchForm = () => {  
  return (
    <div>
      <div className="search__container"> 
        <div className="search__wrapper justify-content-between">
          <div className="d-flex">
              <div className="search-box-1 d-flex">
                <input type="text" placeholder="UX Designer" value={'Sign in'}/>
              </div>
            </div>
              <div>
                <select className="form-select" aria-label="Default select example">
                  <option selected>Popular</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <hr />
                  <option value="3">Three</option>
                </select>
              </div>
          </div>
        </div>
    </div>
    );
  };

export default SearchForm;
