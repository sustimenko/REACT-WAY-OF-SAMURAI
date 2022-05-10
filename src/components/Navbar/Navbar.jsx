import React from "react";
import s from './Navbar.module.css';

console.log(s);

//Такая вот структура classes
//  let classes = {
//    'nav':'Navbar_nav__SVyNT',
//    'item':'Navbar_item__zkklD'
// }

//Из браузера
// .Navbar_nav__SVyNT {
//   grid-area: n;
//   background-color:white;
// }

// .Navbar_item__zkklD {
//     color: red;
// }
// /*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL05hdmJhci5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtFQUN4Qjs7RUFFQTtNQUNJLFVBQVU7RUFDZCIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYge1xyXG4gICAgZ3JpZC1hcmVhOiBuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5pdGVtIHtcclxuICAgICAgY29sb3I6IHJlZDtcclxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ== */

const Navbar = () => {
    return    <nav className={s.nav}>
    <div className={s.item}>
      <a>Profile</a>
    </div>
    <div className={`&{s.item}  &{s.active}`}>
      <a>Messages</a>
    </div>
    <div className={s.item}>
      <a>News</a>
    </div>
    <div className={s.item}>
      <a>Music</a>
    </div>
    <div className={s.item}>
      <a>Settings</a>
    </div>
  </nav>;
}

export default Navbar;