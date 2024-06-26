import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getsavedListings } from '../redux/savedListing/savedListingSlice';
import ListingItem from '../components/ListingItem';

const SavedListings = () => {
  const dispatch = useDispatch();
  const savedListings = useSelector((state) => state.savedListing.savedListings);
  const loading = useSelector((state) => state.savedListing.loading);

  useEffect(() => {
    dispatch(getsavedListings());
  }, [dispatch]);

  console.log("See Badal",savedListings)

  return (
    
    <div className='max-w-6xl mx-auto pt-16 flex flex-col gap-8 my-10'>
    {/* <h2 className='text-2xl font-bold text-slate-700 text-center'>SAVED LISTINGS</h2> */}
    <h2 className='cs-title'>SAVED LISTINGS</h2>
    {loading ? (
      <p>Loading...</p>
    ) : (
      savedListings?.data?.savedListingsAggregate?.length === 0 ? (
        <p className='cs-text'>Oops, You have not saved any listing yet</p>
      ) : (
        <div className='flex flex-wrap gap-4'>
          {savedListings?.data?.savedListingsAggregate?.map((item, index) => (
            <div key={index}>
              <ListingItem listing={item.savedListing} key={index} />
            </div>
          ))}
        </div>
      )
    )}
  </div>
  

  

  );
};

export default SavedListings;
