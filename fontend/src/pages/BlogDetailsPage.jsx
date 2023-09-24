import React, { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import BlogDetails from "../components/Blogs/BlogDetails";
import SuggestedBlog from "../components/Blogs/SuggestedBlog";
import { useSelector } from "react-redux";
import line from '../../src/Assests/icons/under-heading.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsFacebook } from "react-icons/bs";


const BlogDetailsPage = () => {
  const { allBlogs } = useSelector((state) => state.blogs);
  const { allEvents } = useSelector((state) => state.events);
  const { id, slug } = useParams();
  const [data, setData] = useState(null);
  const [searchParams] = useSearchParams();
  const eventData = searchParams.get("isEvent");

  useEffect(() => {
    if (eventData !== null) {
      const data = allEvents && allEvents.find((i) => i._id === id);
      setData(data);
    } else {
      const data = allBlogs && allBlogs.find((i) => i.slug === slug);
      setData(data);
    }
  }, [allBlogs, allEvents]);
  return (
    <div>
      <Header />
      <>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="heading-section">
                                <h2>Chuyện farm kể</h2>
                                <br />
                            </div>
                        </div>
                    </div>
                    <div id="single-blog" class="page-section first-section">
                        <div class="container">
                            <div class="row">
                                <div class="product-item col-md-12">
                                    <div class="row">
                                        <div class="col-md-8">  
                                                <div class="product-content">
                                          <BlogDetails data={data} />
                                                </div>
                                        </div>
                                        <div class="col-md-4 col-md-offset-1">
                                            <div class="side-bar">
                                                <div class="slide-bar-post">
                                                    <h4>BÀI VIẾT MỚI</h4>

                                                    <div class="posts">
                                                        <div class="recent-post">
                                                         {!eventData && <>{data && <SuggestedBlog data={data} />}</>}
                                                        </div>
                                                    </div> 
                                                </div>
                                               
                                                {/* <div class="advertisement mb-3 slide-bar-post mt-4" >
                                                    <h4>Instagram</h4>
                                                    <Container className="slide-insta" >
                                                    <Row xs={3} md={3} lg={3} >
                                                        <Col  className="flickr-images">
                                                        <img src="https://live.staticflickr.com/65535/52269708842_1e7b53c0d3_b.jpg" alt=""/>
                                                        </Col  >
                                                        <Col className="flickr-images">
                                                        <img src="https://live.staticflickr.com/65535/50105097597_35fd9733ca_b.jpg" alt=""/>
                                                        </Col>
                                                        <Col className="flickr-images">
                                                        <img src="https://live.staticflickr.com/65535/52984153815_8161856d24_b.jpg" alt=""/>
                                                        </Col>
                                                        <Col className="flickr-images">
                                                        <img src="https://live.staticflickr.com/65535/49806345078_dcf5b5197d_b.jpg" alt=""/>
                                                        </Col>
                                                        <Col className="flickr-images">
                                                        <img src="https://live.staticflickr.com/65535/52269708842_1e7b53c0d3_b.jpg" alt=""/>
                                                        </Col>
                                                        <Col className="flickr-images">
                                                        <img src="https://live.staticflickr.com/65535/52269708842_1e7b53c0d3_b.jpg" alt=""/>
                                                        </Col>
                                                    </Row>
                                                    </Container>
                                                </div>     */}
                                            </div>
                                        </div>     
                                        <Container className="instagram">
                                        <Row xs={3} lg={6} md={6}>
                                        <div className="container button_insta">
                                            
                                        <Link to="https://truongnq.vn/" className="d-flex align-items-center"> <BsFacebook className="mr-2"/> Follow Me!</Link>
                                        </div>
                                        <Col  className="instagram-img">
                                        <img src="https://live.staticflickr.com/65535/52984239678_f6b94d56a8_b.jpg" alt=""/>
                                        </Col >
                                        <Col  className="instagram-img">
                                        <img src="https://live.staticflickr.com/65535/50105097597_35fd9733ca_b.jpg" alt=""/>
                                        </Col >
                                        <Col  className="instagram-img">
                                        <img src="https://live.staticflickr.com/65535/52984153815_8161856d24_b.jpg" alt=""/>
                                        </Col >
                                        <Col  className="instagram-img">
                                        <img src="https://live.staticflickr.com/65535/49806345078_dcf5b5197d_b.jpg" alt=""/>
                                        </Col >
                                        <Col  className="instagram-img">
                                        <img src="https://live.staticflickr.com/65535/52983176007_fd62237852_b.jpg" alt=""/>
                                        </Col >
                                        <Col  className="instagram-img">
                                        <img src="https://live.staticflickr.com/65535/52269708842_1e7b53c0d3_b.jpg" alt=""/>
                                        </Col >
                                        
                                        </Row>
                                    
                                    </Container>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>     
                </div>
      </>
      <Footer />
    </div>
  );
};

export default BlogDetailsPage;
