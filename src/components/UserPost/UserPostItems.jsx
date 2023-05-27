import React from "react"
import { AiFillHeart, AiFillFileAdd, AiFillEye } from "react-icons/ai"


export const UserPostItems = ({ postItems }) => {
 
  return (
    <>
      <div className='userpost_items'>
        {postItems.map((items) => (
          <div className='box' key={items.id}>
            <div className='img'>
              <img src={items.cover} alt='' />
              <div className='overlay'>
                  <div className="overlay__footer px-3 d-flex justify-content-between align-items-center">
                    <div className="title align-items-center d-flex">
                      <p>Sign in page</p>
                    </div>
                    <div className="button-wrapper d-flex">
                      <button className='button'>
                        <AiFillFileAdd className="icon" />
                      </button>
                      <button className='button'>
                        <AiFillHeart className="icon" />
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
                <div className="like-count d-flex">
                  <div className="icon-wrapper">
                    <AiFillHeart className="icon"/>
                  </div>
                  <p>100k</p>
                </div>
                <div className="view-count d-flex mx-3">
                  <div className="icon-wrapper">
                   <AiFillEye className="icon"/>
                  </div>
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
