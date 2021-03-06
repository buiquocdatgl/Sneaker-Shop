import React, {useState, useEffect} from 'react';
import Slider from 'react-slick';
import StarRatings from "react-star-ratings";
import item1 from '../../../image/puma/puma rsx/puma rs x3 plas tech mist green.jpg';
import imgFreeShip from '../../../image/freeship.png';
import { Select, Form, Button, Image } from "antd";
import item2 from '../../../image/puma/puma rsx/1.jpg';
import item3 from '../../../image/puma/puma rsx/2.jpg';
import item4 from '../../../image/puma/puma rsx/3.jpg';
import AOS from "aos";
import "aos/dist/aos.css";
import { useNewContexts } from '../../../contexts/contexts';

const { Option } = Select;

function capitalizeFirstChar (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


function InForProduct() {
    
    const {currentUser} = useNewContexts()
    const {updateFSDocs, getFSDoc} = useNewContexts()
    const [count, setCount] = useState(1)
    const [size, setSize] = useState('')
    const [chosen, setChosen] = useState({})
    const [product, setProduct] = useState({

    })
    
    useEffect(() => {
        const fetchUser = async() => {
            const newdata = await getFSDoc('users', currentUser.id)
            if (newdata) {
                setChosen(newdata.cart)
            }
           return newdata
        }
        
        const fetchProduct = async() => {
            const newdata = await getFSDoc('addidas','2UBYq2RLSHMEx6VwrUMH')
            setProduct(newdata)
        }
        fetchProduct()
        setChosen(fetchUser())
    },[])
    useEffect(() => {
        AOS.init({
            duration : 1100
        });
        
    }, []);

    const availableSize = [35,36,37,38,39,40,41,42]
    
    const currentProduct = {
        id: 'puma-1',
        name: 'Puma Defy Mid Metal',
        price: 3415000,
        pictures: [
            {
                item: item1,
            },
            {
                item: item2,
            },
            {
                item: item3,
            },
            {
                item: item4,
            },
        ]
    }
    console.log(chosen, currentUser.id)
    const settings = {
        customPaging: function (i) {
          return (
              <a href="">
                  <img src={currentProduct.pictures[i].item} alt="" />
              </a>
          )
        },
        dots: true,
        dotsClass: "group-array-image",
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        autoplaySpeed: 3000,
        nextArrow: (
          <div>
            <i class="fa fa-angle-right right"></i>
          </div>
        ),
        prevArrow: (
          <div>
            <i class="fa fa-angle-left left"></i>
          </div>
        ),
    };

    return (
        <div className="group-detail-products">
            <div className="group-detail">
                <div className="group-image-detail">
                    <Slider {...settings}>
                        {currentProduct.pictures.map((photo) =>(
                            <div className="image-array-slider">
                                <Image src={photo.item} alt="" />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="group-information-detail">
                    <div className="information-detail">
                        <div className="name-detail">
                            <h3>{product.name}</h3>
                        </div>
                        <div className="group-description-more">
                            <div className="description-more-info">
                                <div className="group-rate-Review">
                                    <div className="review-products">
                                        <div className="start-review">
                                            <StarRatings
                                            numberOfStars={5}
                                            name='rating'
                                            starDimension="22px"
                                            starRatedColor="#fed330"
                                            starHoverColor="#fed330"
                                            starEmptyColor="white"
                                            />
                                        </div>
                                        <p>Ch??a C?? ????nh Gi??</p>
                                    </div>
                                </div>
                                <p>
                                    m?? s???n ph???m: <span>607f098ec0132372d7309bce</span>
                                </p>
                                <p>
                                    nh?? x???n xu???t:  <span>Puma</span>
                                </p>
                                <p>
                                    b??? s??u t???p: <span>Puma Defy Mid Metal</span>
                                </p>
                                <p>
                                    lo???i s???n ph???m: <span>Puma Defy Mid Metal</span>
                                </p>
                                <p>
                                    d??ng s???n ph???m: <span>Puma Rsx</span>
                                </p>
                                <p>
                                    m??u s???c: <span>??en</span>
                                </p>
                                <p>
                                    gi???i t??nh: <span> N???</span>
                                </p>
                            </div>
                        </div>
                        <div className="group-free-detail">
                            <div className="img-free-detail">
                                <img src={imgFreeShip} alt="free-ship" />
                            </div>
                            <p>
                                Mi???n ph?? giao h??ng (t???i ??a 30k) cho ????n h??ng t??? 900k Xem chi
                                ti???t
						    </p>
                        </div>
                        <Form>
                            <div className="group-buys-detail">
                                <div className="group-quantity-number">
                                    <span>s??? l?????ng</span>
                                    <div className="quantity-number">
                                        <div 
                                            className="click-left" 
                                            onClick={() => {
                                            if (count > 1) {
                                                setCount(count - 1)
                                            } else {
                                                setCount(1)
                                            }
                                        }}>
                                        -
                                        </div>
                                        <p>{count}</p>
                                        <div 
                                            className="click-right" 
                                            onClick={() =>{
                                            setCount(count + 1)
                                        }}>
                                        +
                                        </div>
                                    </div>
                                </div>
                                <div className="buys-detail">
                                    <Button onClick={()=> {
                                        setChosen({...product,size: size, quantity: count})
                                        console.log(chosen)
                                        // updateFSDocs('users', 'RPHF2ZrfQmcwLuKUjlKjqlATcmo2', product)
                                        setChosen({})
                                    }}
                                        type="primary"
                                        htmlType="submit">
                                        <i className="fa fa-shopping-cart" />
										ch???n mua h??ng
									</Button>
..                                </div>
                            </div>
                            <div className="group-price-size">
                                <div className="group-price">
                                    <span>
                                        {product.price} <u>??</u>
                                    </span>
                                </div>
                                <div className="group-size">
                                    <Form.Item
                                        name="size"
                                        label="Ch???n k??ch c???"
                                        rules={[
                                        {
                                            required: true,
                                            message: false,
                                        },
                                        ]}
                                    >
                                        <Select onChange={(e)=> setSize(e)} placeholder="size" style={{ width: "100%" }}>
                                            {availableSize.map(num => (
                                                <Option value={num}>{num}</Option>
                                            ))}
                                        </Select>
                                    </Form.Item>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
            <div className="group-description" data-aos={"fade-down"}>
                <h2>M?? t??? S???n ph???m</h2>
                <div className="group-description-text">
                    <p>S??? h???u ki???u d??ng si??u phong c??ch, hi???n ?????i v???i kh??? n??ng s??ng t???o m??u s???c c??c l???p TPU v?? c??ng n???i b???t, 
                    gi??y PUMA x MTV RS-X Tracks Bold s??? l?? m???u gi??y mang ?????n c??i nh??n m???i m??? trong phong c??ch th???i trang c???a b???n</p>
                </div>
            </div>
        </div>
    )
}

export default InForProduct
