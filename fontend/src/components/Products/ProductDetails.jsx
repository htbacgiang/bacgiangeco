import React, { useEffect, useState } from "react";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getAProduct, getAllProducts } from "../../redux/actions/product";
import { backend_url, server } from "../../server";
import styles from "../../styles/styles";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../redux/actions/wishlist";
import { addTocart } from "../../redux/actions/cart";
import { toast } from "react-toastify";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import Meta from "../Meta";
import Button from "react-bootstrap/Button";
import Fresh from "../../Assests/icons/fresh.png";
import Organic from "../../Assests/icons/organic.png";
import HealtCcare from "../../Assests/icons/healthcare.png";
import Check from "../../Assests/icons/check-mark.png";
import Visa from "../../Assests/icons/visa.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const ProductDetails = ({ data }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const { products } = useSelector((state) => state.products);
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(0);
  const navigate = useNavigate();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const weights = [0.5, 1, 2, 3]; // Weights in kilograms
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts(data && data?.slug));
    if (wishlist && wishlist.find((i) => i._id === data?._id)) {
      setClick(true);
    } else {
      setClick(false);
    }
  }, [data, wishlist]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const removeFromWishlistHandler = (data) => {
    setClick(!click);
    dispatch(removeFromWishlist(data));
  };

  const addToWishlistHandler = (data) => {
    setClick(!click);
    dispatch(addToWishlist(data));
  };

  const addToCartHandler = (id) => {
    const isItemExists = cart && cart.find((i) => i._id === id);
    if (isItemExists) {
      toast.error("Sản phẩm đã ở trong giỏ hàng!");
    } else {
      if (data.stock < 1) {
        toast.error("Product stock limited!");
      } else {
        const updatedName = `${data.name} (${selectedWeight} kg)`;
        const discountPrice = data.discountPrice * selectedWeight; // Calculate total price by multiplying discountPrice with selected weight
        const cartData = {
          ...data,
          qty: count,
          discountPrice,
          name: updatedName,
        }; // Include the totalPrice in the cart data
        dispatch(addTocart(cartData));
        toast.success("Thêm sản phẩm thành công!");
      }
    }
  };
  const [selectedWeight, setSelectedWeight] = useState(0.5);
  const handleWeightSelection = (weight) => {
    setSelectedWeight(weight);
  };

  return (
    <div className="bg-white">
      {data ? (
        <div className={`${styles.section} w-[90%] 800px:w-[80%]`}>
          <Meta title={data.name} description={data.metadescription} />
          <>

            <Container className="mt-4">
              {/* Stack the columns on mobile by making one full-width and the other half-width */}
              <Row>
                <Col xs={12} md={4}>
                  <Swiper
                    style={{
                      "--swiper-navigation-color": "#fff",
                      "--swiper-pagination-color": "#fff",
                    }}
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper3"
                  >
                    <SwiperSlide>
                      <img
                        src={`${backend_url}${data && data.images[0]}`}
                        alt={data.slug}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src={`${backend_url}${data && data.images[1]}`}
                        alt={data.slug}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src={`${backend_url}${data && data.images[2]}`}
                        alt={data.slug}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src={`${backend_url}${data && data.images[3]}`}
                        alt={data.slug}
                      />
                    </SwiperSlide>
                  </Swiper>
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper4 img-thumb"
                  >
                    <SwiperSlide className="">
                      <img
                        src={`${backend_url}${data && data.images[0]}`}
                        alt={data.slug}
                      />
                    </SwiperSlide>
                    <SwiperSlide className="">
                      <img
                        src={`${backend_url}${data && data.images[1]}`}
                        alt={data.slug}
                      />
                    </SwiperSlide>
                    <SwiperSlide className="">
                      <img
                        src={`${backend_url}${data && data.images[2]}`}
                        alt={data.slug}
                      />
                    </SwiperSlide>
                    <SwiperSlide className="">
                      <img
                        src={`${backend_url}${data && data.images[3]}`}
                        alt={data.slug}
                      />
                    </SwiperSlide>
                  </Swiper>
                </Col>
                <Col xs={12} md={4}>
                  <div className="mo-ta-san-pham">
                    <div className="row">
                      <div className="col-12">
                        <div className="product-desc">
                          <h3>
                            {data.name} ({selectedWeight} kg)
                          </h3>
                          <p className="">
                            {" "}
                            Tình trạng: <span className=""> Còn hàng</span>{" "}
                          </p>
                          <div>
                            <div className="weight-buttons mt-2">
                              <button
                                className={`weight-button ${
                                  selectedWeight === 0.5 ? "active" : ""
                                }`}
                                onClick={() => handleWeightSelection(0.5)}
                              >
                                0.5 kg
                              </button>
                              <button
                                className={`weight-button ${
                                  selectedWeight === 1 ? "active" : ""
                                }`}
                                onClick={() => handleWeightSelection(1)}
                              >
                                1 kg
                              </button>
                              <button
                                className={`weight-button ${
                                  selectedWeight === 2 ? "active" : ""
                                }`}
                                onClick={() => handleWeightSelection(2)}
                              >
                                2 kg
                              </button>
                              <button
                                className={`weight-button ${
                                  selectedWeight === 3 ? "active" : ""
                                }`}
                                onClick={() => handleWeightSelection(3)}
                              >
                                3 kg
                              </button>
                            </div>
                          </div>
                          <div className="price-box">
                            <div className="special-price">
                              <div className="price-1 product-price">
                                <div className="py-1 flex ">
                                  <div className="price-1">
                                    <h4
                                      className={`${styles.productDiscountPrice} text-xl text-[green]`}
                                    >
                                      {data.originalPrice === 0
                                        ? data.originalPrice
                                        : (
                                            data.discountPrice * selectedWeight
                                          ).toLocaleString(navigator.language, {
                                            minimumFractionDigits: 0,
                                          })}
                                      đ
                                    </h4>
                                    <h5
                                      className={`${styles.price} text-lg pl-0`}
                                    >
                                      {data.originalPrice
                                        ? (
                                            data.originalPrice * selectedWeight
                                          ).toLocaleString(navigator.language, {
                                            minimumFractionDigits: 0,
                                          }) + " đ"
                                        : null}
                                    </h5>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="back-index">
                            <div className="gift-list">
                              <label className="h5">
                                <FontAwesomeIcon icon={faGift} /> ƯU ĐÃI
                              </label>
                              <ul className="free-gifts">
                                <li className="mb-3  ">
                                  <span className="align-items-baseline  ">
                                    <span className="mb-2">
                                      Miễn phí vận chuyển cho đơn hàng từ
                                      300.000đ trong phạm vi 10km tính từ cửa
                                      hàng Eco Bắc Giang gần nhất
                                    </span>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <Button
                            variant="success"
                            className="button"
                            onClick={() => addToCartHandler(data._id)}
                          >
                            Thêm vào giỏ hàng
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={4}>
                  <div className="">
                    <div className="nguon-goc">
                      <h3> Chỉ có tại Eco Bắc Giang</h3>
                      <ul className="ps-0">
                        <div
                          className="d-flex"
                          style={{ alignItems: "center" }}
                        >
                          <img className="" src={Organic} />
                          <li className="">100% Sạch</li>
                        </div>
                        <div
                          className="d-flex"
                          style={{ alignItems: "center" }}
                        >
                          <img className="" src={Check} />
                          <li className="">Rõ nguồn gốc</li>
                        </div>
                        <div
                          className="d-flex"
                          style={{ alignItems: "center" }}
                        >
                          <img className="" src={Fresh} />
                          <li className="">Luôn tươi ngon</li>
                        </div>
                        <div
                          className="d-flex"
                          style={{ alignItems: "center" }}
                        >
                          <img className="" src={HealtCcare} />
                          <li className="">An toàn cho sức khoẻ</li>
                        </div>
                      </ul>
                    </div>
                    <div className="product-trustbadge my-3 col-12 visa">
                      <img
                        className="lazyload img-fluid loaded"
                        src={Visa}
                        data-src=""
                        alt="Phương thức thanh toán"
                        data-was-processed="true"
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </>
        </div>
      ) : null}
    </div>
  );
};

export default ProductDetails;
