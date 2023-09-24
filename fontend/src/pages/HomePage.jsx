import React from 'react'
import Header from "../components/Layout/Header";
import BestDeals from "../components/Route/HomeProduct/BestDeals";
import HomeBlog from "../components/Route/HomeBlog/HomeBlog";
import { Link } from 'react-router-dom'
import Footer from "../components/Layout/Footer";
import Meta from "../components/Meta"
import Baner from '../components/Baner2';
import IconBox from '../components/IconBox';


const HomePage = () => {
  return (
    <div>
      <Meta title={'Bac Giang Eco - Agriculture of think'} />
        <Header activeHeading={1} />
        <Baner />
        <IconBox />
        <div className='container'> 
        <div className='row'>
          <div className='col-12 link-section'>
            <Link to='/san-pham'
             className='link'
             onClick={() => {
              window.scroll({ top: 0, left: 0, behavior: 'smooth' });
            }}
             > 
             <span className='section-heading'> RAU - CỦ - QUẢ</span>
             
             </Link>
            <b></b>
            <p className=''>
              Kiến thức sống xanh, sống sạch, sống heathy dành cho bạn, mỗi ngày một khoẻ hơn
            </p>
          </div>
        </div>
        </div>
        <BestDeals />
        <div className='container'> 
        <div className='row'>
          <div className='col-12 link-section'>
            <Link to='/chuyen-farm-ke'
             className='link'
             onClick={() => {
              window.scroll({ top: 0, left: 0, behavior: 'smooth' });
            }}
             > 
             <span className='section-heading'> BLOG SỐNG XANH</span>
             
             </Link>
            <b></b>
            <p className=''>
              Kiến thức sống xanh, sống sạch, sống heathy dành cho bạn, mỗi ngày một khoẻ hơn
            </p>
            
          </div>
        </div>
        </div>
        <HomeBlog />

        <Footer />
    </div>
  )
}

export default HomePage