import React, { useState,useEffect } from "react";
import { useDispatch , useSelector} from "react-redux";
import Heart from "react-heart"
import { toggleListingSave } from "../redux/savedListing/savedListingSlice";

export default function LikeButton(props) {
    const dispatch = useDispatch();
    const { listing } = props;
    const listingId = listing._id;
    const isSaved = listing.isSaved;


    const savedListings = useSelector((state) => state.savedListing.savedListings);
    console.log(savedListings?.data?.savedListingsAggregate);

    console.log(savedListings?.data?.savedListingsAggregate);

    console.log("ListingName=",listing.name,"active",savedListings?.data?.savedListingsAggregate?.some(item => item._id === listing._id))
    // console.log("ListingId=",listingId,"ItemId",)

    const [active, setActive] = useState(savedListings?.data?.savedListingsAggregate?.some(item => item.savedListing._id === listing._id));

    useEffect(() => {
        setActive(savedListings?.data?.savedListingsAggregate?.some(item => item.savedListing._id === listing._id));
    }, [savedListings, listing._id]);

	// const [active, setActive] = useState(isSaved);

    // useEffect(() => {
    //     // Update the active state when the isSaved status changes
    //     setActive(isSaved);
    // }, [isSaved]);



    const handleToggleSave = () => {
        console.log('Listing ID:', listingId);
        console.log("LikeButton invoked"  );

        setActive(!active); // Toggle the local state
        dispatch(toggleListingSave(listingId)); // Dispatch the toggleListingSave action with the listingId
    };

	return (
		<div style={{ width: "2rem" }}>
			<Heart isActive={active} onClick={handleToggleSave}/>
		</div>
	);
}