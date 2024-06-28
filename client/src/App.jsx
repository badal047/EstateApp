import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './components/Header';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute.jsx';
import CreateListing from './pages/CreateListing';
import UpdateListing from './pages/UpdateListing';
import Listing from './pages/Listing';
import Search from './pages/Search';
import Faq from './pages/Faq';
import ContactUs from './pages/ContactUs';
import Testimonials from './pages/Testimonials';
import OurServices from './pages/OurServices';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import Career from './pages/Career';
import OurTeam from './pages/OurTeam';
import SavedListings from './pages/SavedListing'; 


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/about' element={<About />} />
        <Route path='/our-services' element={<OurServices />} />
        <Route path='/our-team' element={<OurTeam />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/termsandconditions' element={<TermsConditions />} />
        <Route path='/career' element={<Career />} />
        <Route path='/search' element={<Search />} />
        <Route path='/listing/:listingId' element={<Listing />} />
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/create-listing' element={<CreateListing />} />
          <Route
            path='/update-listing/:listingId'
            element={<UpdateListing />}
          />
          <Route path='/saved-listings' element={<SavedListings />} />
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App
