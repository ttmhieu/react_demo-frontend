import React from "react"
import { AiFillHeart, AiFillFileAdd } from "react-icons/ai"


export const ProductItems = ({ cartItems }) => {
 
  return (
    <>
      <div className='product_items'>
        {cartItems.map((items) => (
          <div className='box' key={items.id}>
            <div className='img'>
              <img src={items.cover} alt='' />
              <div className='overlay'>
                  <div className="overlay__footer px-3 d-flex justify-content-between align-items-center">
                    <div className="title align-items-center">
                      <p>Sign in page</p>
                    </div>
                    <div className="button-wrapper">
                      <button className='button'>
                        <AiFillFileAdd />
                      </button>
                      <button className='button'>
                        <AiFillHeart />
                      </button>
                    </div>
                  </div>
              </div>
            </div>
            <div className='details d-flex'>
              <div className="user-info d-flex">
                <img src="" alt="" className="user-avatar" />
                <p className="display-name">Kawsar Ahmed</p>
              </div>
              <div className="social-statistics d-flex">
                <div className="like-count">
                  <p>100k</p>
                </div>
                <div className="view-count">
                  <p>200k</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </>
  )
}
