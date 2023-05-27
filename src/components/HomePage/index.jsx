import React, { Component } from 'react';
import NavBar from './NavBar';
import SearchForm from '../SearchForm';
import { UserPost } from '../UserPost/UserPost';
import Footer from '../Footer';
import Filter from '../Filter';


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
                <div className='d-flex justify-content-center'> 
                  <p style={{ textAlign: 'center'}} >
                     Related:  &nbsp;
                  </p>
                  <p style={{ textAlign: 'center', color:'#ea4c89'}}>
                    sign up log in login sign in page sign in form signup
                  </p>
                </div>
            
              </div>
              <Filter />
          </div>

        </div>
        <UserPost />
        <Footer />
      </div>
    );
  }
}

export default HomePage;