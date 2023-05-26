import React, { Component } from 'react';
import NavBar from './NavBar';
import CardForm from '../common/CardForm';
import SearchForm from '../common/SearchForm';
import { Product } from '../product/Product';
import Footer from '../Footer';


const data = [
  {
    id: '1',
    title: 'demo',
  },
  {
    id: '2',
    title: 'demo',
  },
  {
    id: '3',
    title: 'demo',
  },
  {
    id: '4',
    title: 'demo',
  },
  {
    id: '5',
    title: 'demo',
  },
  {
    id: '6',
    title: 'demo',
  },
  {
    id: '7',
    title: 'demo',
  },
  {
    id: '8',
    title: 'demo',
  },
]

class HomePage extends Component {

  render() {
    return (
      <div className='app-container'>
        <NavBar/>
       
        <div className='search-header'>
          <div className='back-ground-bar'>
          </div>
          <div className='search-result-details'>
            <SearchForm />
            <div>
              {/* sign in */}
              <h1 style={{textAlign:'center'}}>
                Sign in
              </h1>
              <div style={{ textAlign: 'center'}}>

                <span >Discover 10,000+ sign in designs for inspiration</span>
              </div>
                {/* related  */}
                <div>
                  <p style={{ textAlign: 'center'}}>
                  Related: sign up log in login sign in page sign in form signup
                  </p>
                </div>
            
              </div>
              <div class="container px-5 pt-5 mx-0">

                <div class="row">
                  <div className='col-4'>
                    <select className="form-select" aria-label="Default select example">
                      <option selected>Popular</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <hr />
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className='col-7'>

                  <ul className='d-flex flex-row gap-5 m-0'>
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                  </div>
                </div>
              </div>
          </div>

        </div>
        <Product />
        <Footer />
      </div>
    );
  }
}

export default HomePage;