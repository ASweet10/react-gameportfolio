import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [ navOpen, setNavOpen ] = useState(false)
  const navLinks = [
    {
        id: 0,
        link: "/",
        name: "About"
    },
    {
        id: 1,
        link: "/",
        name: "Projects"
    },
    {
        id: 2,
        link: "/",
        name: "Contact",
    },
  ]

  return (
    <div className='absolute md:fixed flex w-full md:px-60 xl:px-[500px] h-16 items-center justify-center z-40 bg-opacity-0 gap-12'>
      <div className='hidden md:flex'>
        <div className='flex'>
          <Link to="/" className='flex items-center gap-3 text-white text-2xl text-semibold'>
            Game Design Portfolio
          </Link>
        </div>
      </div>

      <div className='hidden md:flex ml-auto pr-8 text-primary'>
        { navLinks.map( (item) => (
            <Link 
                to={item.link}
                key={item.id}
                className='mr-4 cursor-pointer text-white font-medium text-lg'
            >
                {item.name}
            </Link>
        ))}
      </div>

      <div onClick={() => setNavOpen(!navOpen)} className='cursor-pointer z-10 md:hidden text-white'>
        { !navOpen && (
          <FaBars className='text-text-dark dark:text-text-light' size={30}/>
        )
        }
      </div>

      {navOpen && (
        <div className='flex flex-col justify-center items-center fixed top-0 left-0 w-full h-screen bg-blue-950 z-50'>

          <ul className=''>
            {navLinks.map(({ id, link, name }) => {
              return(
                <li key={id} className='px-4 uppercase font-bold text-4xl py-6 flex items-end gap-3 text-white'>
                  <Link 
                    onClick={() => setNavOpen(!navOpen)}
                    to={link}
                    >
                      {name}
                  </Link>
              </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar