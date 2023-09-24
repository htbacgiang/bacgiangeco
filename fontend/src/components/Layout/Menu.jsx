import React from 'react'
import { Link , Redirect} from 'react-router-dom';
import './menu.css';
import { BiMenuAltLeft,BiChevronDown } from "react-icons/bi";


const Menu = () => {
  return (
    <>
      <div className="">
            <div className="menu-pc">
                <ul>
                    <li className=" text-white ">
                        <a className='d-flex '>
                          <BiMenuAltLeft size={30} className=" text-white" />
                         <Link to={`/san-pham`} className='text-white'>Danh sách sản phẩm </Link> 
                         <BiChevronDown size={30} className=" text-white" />
                         </a>
                      <ul className='list-menu'>
                      <li><a> <Link to={`/album/viet-nam-que-huong-toi`}> Việt Nam quê hương tôi </Link> </a></li>
                       <li><a> <Link to={`/album/ha-tay-que-lua`}> Hà Tây quê lụa </Link> </a></li>
                       <li><a> <Link to={`/album/truong-va-nhung-nguoi-ban`}> Trường & Friends </Link> </a></li>
                       <li><a> <Link to={`/album/bus-ha-noi`}> Xe bus Hà Nội </Link> </a></li>
                       <li><a> <Link to={`/album/co-vai-thu-dang-yeu`}> Những thứ đáng yêu </Link> </a></li>
                       <li><a> <Link to={`/album/nhat-ban-den-va-yeu`}> Nhật Bản đến và yêu </Link> </a></li>
                      </ul>
                    </li>
                   
                </ul>
            </div>
        </div>
        
    </>
  )
}

export default Menu