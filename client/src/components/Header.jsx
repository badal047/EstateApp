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
    <header className='bg-blue-700 shadow-md fixed w-full }'  >
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          
          <div>
            {/* Include Google Fonts */}
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap" rel="stylesheet"  />
            
            {/* Your JSX content */}
            <div>
            <h1 style={{fontFamily: '"Alex Brush", cursive',fontWeight: 600,fontStyle: 'normal',fontSize: '32px'}}>
              <div className='flex flex-wrap bg-zinc-400 p-1 rounded-md shadow-md'>
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
          className='bg-slate-50 p-3 rounded-lg flex items-center border-2 border-orange-200 '
        >
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64 hover:font-semibold'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className='text-orange-200 hover:text-orange-400' />
          </button>
        </form>
        <ul className='flex gap-4'>
          <Link to='/' className="flex items-center">
            <li className='hidden sm:inline items-center text-slate-950 hover:underline px-1'>
              HOME
            </li>
          </Link>
          <Link to='/create-listing' className="flex items-center">

            <div className='flex-wrap items-center bg-orange-400 p-2 rounded-md shadow-md hover:bg-slate-100'>
                <span className='black '>POST PROPERTY</span>
            </div>

          </Link>

          

          <Link to='/profile' className="flex items-center">
            {currentUser ? (
              <img
              className='rounded-full h-7 w-7 object-cover'
              src={currentUser.avatar}
              alt='profile'
            />
            ) : (
              <li className=' text-slate-950 hover:font-semibold'> SIGN IN</li>
            )}
          </Link>
          
          <Dropdown/>
        </ul>
      </div>
    </header>
  );
}