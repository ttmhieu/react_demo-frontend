import React from 'react';
import './custom.scss';

const SearchForm = () => {
  return (
    <div>
      <div className="search__container"> 
        <div className="search__wrapper">
          <div className="row">
            <div className="col-md-6">
              <div className="search-box-1">
                <i className='bx bx-search-alt'></i>
                <input type="text" placeholder="UX Designer"/>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <div className="search-box-2">
                  <i className='bx bxs-map' ></i>
                    <input type="text" placeholder="San Francisco,USA" />
                      <button>Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  };

export default SearchForm;
