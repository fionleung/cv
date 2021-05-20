import React,{useEffect}from "react";
import './navBar.styles.scss';

const Navbar = () => {

    const [scrolled,setScrolled]=React.useState(false);
    const handleScroll=() => {
        const offset=window.scrollY;
        if(offset > 600 ){
          setScrolled(true);
        }
        else{
          setScrolled(false);
        }
      }
    
      useEffect(() => {
        window.addEventListener('scroll',handleScroll)
      })
      
  return (
    <div className= {scrolled? 'navbar scrolled' : 'navbar'} >
      <nav>
        <ul>
          <li>
            <a href="#Web/APP development">Web/app projects</a>
          </li>
          <li>
            <a href="#Deep learning">Deep Learning projects</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;