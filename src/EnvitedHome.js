import NavBarLanding from './envited/nav-bar-landing.png';
import ProductImageLeft from './envited/product-image-left.png';
import ProductImageRight from './envited/product-image-right.png';
import ProductImageMiddle from './envited/product-image-middle.png';
import SocialMediaIcons from './envited/social-media-icons2.png';
import './EnvitedHome.css';

function EnvitedHome() {
  return (
    <div className="EnvitedHome">
      <EnvitedNavbar />
      <EnvitedHomeParagraph />
      <EnvitedNextEventButton />

      {/* Given product images have borders, so they look weird
      No way of fixing without better resources */}
      <EnvitedProductImage />
      
      {/* Need to fix social media icons */}
      <EnvitedSocialMediaIcons />
    </div>
  );
}

function EnvitedNavbar() {
  return (
    <img src={NavBarLanding}  className='EnvitedNavBarLanding' alt='Header' />
  );
}

function EnvitedHomeParagraph() {
  return(
    <div className="EnvitedHomeParagraph">
      <h2 className="EnvitedHomeParagraphTitle">Facebook events without Facebook.</h2>
      <h3 className="EnvitedHomeParagraphBody">Easily host and share events with your friends across any social media.</h3>
    </div>
  )
}

function EnvitedNextEventButton() {
  return(
    <div className="EnvitedNextEventButton">
      <a className="EnvitedNextEventButtonText" href="/create">🎉 Create my next event</a>
    </div>
  )
}

function EnvitedProductImage() {
  return(
    <div className="EnvitedProductImage">
      <img src={ProductImageLeft} className="EnvitedProductImageLeft" alt="Product" />
      <img src={ProductImageMiddle} className="EnvitedProductImageMiddle" alt="Product" />
      <img src={ProductImageRight} className="EnvitedProductImageRight" alt="Product" />
    </div>
  )
}

function EnvitedSocialMediaIcons() {
  <div >
    <img src={SocialMediaIcons} className="EnvitedSocialMediaIcons" alt="Social Media" />
  </div>
}

export default EnvitedHome;



