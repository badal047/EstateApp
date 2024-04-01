import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Dropdown  from './Dropdown';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  return (
    <header className='bg-slate-200 shadow-md fixed w-full '>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          
          <div>
            {/* Include Google Fonts */}
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap" rel="stylesheet"  />
            
            {/* Your JSX content */}
            <div>
            <h1 style={{fontFamily: '"Alex Brush", cursive',fontWeight: 600,fontStyle: 'normal',fontSize: '32px'}}>
              <div className='flex flex-wrap bg-gray-200 p-1 rounded-md shadow-md'>
                <span className='black '>Urban</span>
                <span className='black'>Nest.</span>
              </div>
            </h1>
          </div>
                {/* <h1 className='font-bold text-sm sm:text-xl flex flex-wrap bg-gray-200 p-2 rounded-md shadow-md'>
                
              </h1> */}
          </div>


        </Link>
        <form
          onSubmit={handleSubmit}
          className='bg-slate-100 p-3 rounded-lg flex items-center border-2 border-gray-300 '
        >
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className='text-slate-600' />
          </button>
        </form>
        <ul className='flex gap-4'>
          <Link to='/'>
            <li className='hidden sm:inline text-slate-700 hover:font-semibold px-1'>
              HOME
            </li>
          </Link>
          {/* <Link to='/faq'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              FAQs
            </li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              About
            </li>
          </Link>
          <Link to='/contact-us'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              ContactUs
            </li>
          </Link> */}
          <Link to='/create-listing'>
            <li className='hidden sm:inline text-slate-700 hover:font-semibold px-1'>
              POST PROPERTY
            </li>
          </Link>

          

          <Link to='/profile'>
            {currentUser ? (
              <img
              className='rounded-full h-7 w-7 object-cover'
              src={currentUser.avatar}
              alt='profile'
            />
            ) : (
              <li className=' text-slate-700 hover:underline'> Sign in</li>
            )}
          </Link>
          
          <Dropdown/>
        </ul>
      </div>
    </header>
  );
}