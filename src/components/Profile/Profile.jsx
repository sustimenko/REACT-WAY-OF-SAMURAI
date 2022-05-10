import React from "react";
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx'

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src='https://variety.com/wp-content/uploads/2022/03/MCDTRAG_EC024.jpg?w=681&h=383&crop=1' />
      </div>
      <div>
        ava + description
      </div>
      <MyPosts />
    </div>);
}

export default Profile;