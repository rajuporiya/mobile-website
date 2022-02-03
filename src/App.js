import PreNavbar from "./components/PreNavbar";
import {BrowserRouter,Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import data from './data/data.json'
import Offers from "./components/Offers";
import Heading from "./components/Heading";
import StarProduct from "./components/StarProduct";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu";
import HotAccessories from "./components/HotAccessories";
import ProductReviews from "./components/ProductReviews";
import Videos from "./components/Videos";
import Banner from "./components/Banner";
import Footer from './components/Footer';
function App() {
  return (
    <BrowserRouter>
    <PreNavbar/>
    <Navbar/>
    <Slider start={data.banner.start}/>
    <Offers Offers={data.offer}/>
    <Heading text="STAR PRODUCTS"/>
    <StarProduct starProduct={data.starProduct}/>
    <Heading text="HOT ACCESSORIES"/>
    <HotAccessoriesMenu/>

    <Route exact path='/music'>
    <HotAccessories music={data.hotAccessories.music} cover={data.hotAccessoriesCover.music}/>
    </Route>  

    <Route exact path='/smartDevice'>
      <HotAccessories smartDevice={data.hotAccessories.smartDevice} cover={data.hotAccessoriesCover.smartDevice}/>
    </Route>

    <Route exact path='/home'>
      <HotAccessories home={data.hotAccessories.home} cover={data.hotAccessoriesCover.home}/>
    </Route>

    <Route exact path='/lifestyle'>
      <HotAccessories lifestyle={data.hotAccessories.lifeStyle} cover={data.hotAccessoriesCover.lifeStyle}/>
    </Route>

    <Route exact path='/mobileAccessories'>
      <HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} cover={data.hotAccessoriesCover.mobileAccessories}/>
    </Route>

    <Heading text="PRODUCT REVIEWS"/>

    <ProductReviews ProductReviews={data.productReviews}/>

    <Heading text="Video"/>

    <Videos Videos={data.videos}/>

    <Heading text="IN THE PRESS"/>

    <Banner banner={data.banner.end}/>

    <Footer footer={data.footer}/>

    </BrowserRouter>
  );
}

export default App;
