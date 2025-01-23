import React, {useRef, useEffect} from 'react'
import PropTypes from 'prop-types'

const debounce = (func, delay) => {
  let timer;
  return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
};

const Navbar = ({navOpen}) => {
    const lastActiveLink = useRef()
    const activeBox = useRef()

    const initActiveBox = () => {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
      activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
    }
    const debouncedResize = debounce(initActiveBox, 100);

    useEffect(debouncedResize, [])
    window.addEventListener('resize', debouncedResize)

    const activeCurrentLink = (event) => {
      lastActiveLink.current?.classList.remove('active');
      event.target.classList.add('active');
      lastActiveLink.current = event.target;

      activeBox.current.style.top = event.target.offsetTop + 'px';
      activeBox.current.style.left = event.target.offsetLeft + 'px';
      activeBox.current.style.width = event.target.offsetWidth + 'px';
      activeBox.current.style.height = event.target.offsetHeight + 'px';
    }

    const navItems = [
        {
          label: 'Home',
          link: '#home',
          className: 'nav-link active',
          ref: lastActiveLink
        },
        {
          label: 'About',
          link: '#about',
          className: 'nav-link'
        },
        {
          label: 'Works',
          link: '#work',
          className: 'nav-link'
        },
        {
          label: 'YT Videos',
          link: '#ytVideos',
          className: 'nav-link'
        },
        {
          label: 'Contact',
          link: '#contact',
          className: 'nav-link md:hidden'
        }
    ];

    return (
        <nav className={'navbar ' + (navOpen ? 'active' : '')}>
            {navItems.map((item) => (
                <a href={item.link} key={item.label} ref={item.ref} className={item.className} onClick={activeCurrentLink}>
                    {item.label}
                </a>
            ))}

            <div className='active-box' ref={activeBox}></div>
        </nav>
    )
}

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired
}

export default Navbar