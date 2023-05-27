import React, { useEffect, useState } from 'react';
import './custom.scss';
import { FilterIcon } from '../common/CustomIcon';

const filterOption = [
  {title:'Discover', id: 1},
  {title:'Animation', id: 2},
  {title:'Branding', id: 3},
  {title:'Illustration', id: 4},
  {title:'Mobile', id: 5},
  {title:'Print', id: 6},
  {title:'Product', id: 7},
  {title:'Design', id: 8},
  {title:'Typography', id: 9},
  {title:'Web Design', id: 10},
]

const Filter = () => {
  const [selectedOption, setSelectedOption] = useState(1);
  useEffect(() =>{

  }, [selectedOption]);
  return (
    <div class="filter-container px-5 mx-4 pt-5 mx-0">
      <div class="d-flex filter__wrapper flex-row">
        <div className='col-4 filter__views'>
          <select className="form-select" aria-label="Default select example">
            <option selected>Popular</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <hr />
            <option value="3">Three</option>
          </select>
        </div>
        <div className='filter__options'>
            {/* Discover Animation Branding Illustration Mobile Print Product Design Typography Web Design */}
          <ul className='d-flex flex-row  m-0'>
            {
              filterOption.map((item) =>(
                <li key={item.id}
                  onClick={() => setSelectedOption(item.id)}
                  className={`${selectedOption === item.id ? 'active' : ''}`}>
                  <p className="dropdown-item p-2 m-0">
                    {item.title}
                  </p>
                </li>
              ))
            }
          </ul>
        </div>
        <div class="filter-settings js-shot-settings">
          <div className='wrap'>

            <FilterIcon />
              <span span class="label" title="Filters">Filters</span>
              
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;