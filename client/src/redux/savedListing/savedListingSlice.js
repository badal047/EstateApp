






import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

// Async thunk for fetching saved listings
export const getsavedListings = createAsyncThunk(
    "getsavedListings",
    async () => {
        try {
            const response = await fetch(`/api/savedlisting/user`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!response.ok) {
                // Handle non-successful response
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            // console.log("Ye dekho Badal")
            // console.log(data)
            return data;
        } catch (error) {
            // Log error and display toast notification
            console.error("Get Saved Listings Error:", error);
            toast.error("Error fetching saved listings");
            throw error;
        }
    }
);

// Define initial state
const initialState = {
    loading: false,
    savedListings: [],
};

export const toggleListingSave = createAsyncThunk(
    "toggleListingSave",
    async (listingId) => {
        try {
            const response = await fetch(`/api/savedlisting/toggle/saved/${listingId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!response.ok) {
                // Handle non-successful response
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            console.log("Toggle Listing Save Response:", data.data);
            return data.data;
        } catch (error) {
            // Log error and display toast notification
            console.error("Toggle Listing Save Error:", error);
            toast.error("Error toggling listing save");
            throw error;
        }
    }
);

// Create slice
const savedListingSlice = createSlice({
    name: "savedListing",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getsavedListings.pending, (state) => {
                // Set loading state to true when fetching starts
                state.loading = true;
            })
            .addCase(getsavedListings.fulfilled, (state, action) => {
                // Update state with fetched saved listings when successful
                state.loading = false;
                state.savedListings = action.payload;
            })
            .addCase(getsavedListings.rejected, (state) => {
                // Set loading state to false when fetching fails
                state.loading = false;
            });
    },
});

// Export the reducer function
export default savedListingSlice.reducer;

