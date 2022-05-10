import React from "react";
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src='https://variety.com/wp-content/uploads/2022/03/MCDTRAG_EC024.jpg?w=681&h=383&crop=1' />
      </div>
      <div>
        ava + description
      </div>
      <div>
        My posts
        <div>
          New post
        </div>
        <div className={s.posts}>
          <div className={s.item}>
            Post 1
          </div>
          <div className={s.item}>
            Post 2
          </div>
        </div>
      </div>
    </div>);
}

export default Profile;