import { useState } from "react"
import { userposts } from "../assets/data/data"
import { UserPostItems } from "./UserPostItems";
import './custom.scss';

export const UserPost = () => {
  const [postItems, setPostItems] = useState(userposts)
  return (
    <>
      <section className='userpost'>
          <UserPostItems postItems={postItems} />
      </section>
    </>
  )
}
