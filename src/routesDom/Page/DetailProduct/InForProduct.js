import React, {useState, useEffect} from 'react';
import Slider from 'react-slick';
import StarRatings from "react-star-ratings";
import item1 from '../../../image/puma/puma rsx/puma rs x3 plas tech mist green.jpg';
import imgFreeShip from '../../../image/freeship.png';
import { Select, Form, Button, Image, notification } from "antd";
import item2 from '../../../image/puma/puma rsx/1.jpg';
import item3 from '../../../image/puma/puma rsx/2.jpg';
import item4 from '../../../image/puma/puma rsx/3.jpg';
import AOS from "aos";
import "aos/dist/aos.css";

const { Option } = Select;

function InForProduct() {

    const [count, setCount] = useState(1)

    useEffect(() => {
        AOS.init({
            duration : 1100
        });
    }, []);

    const showDetailProducts =[
        {
            item: item1
        },
        {
            item: item2
        },
        {
            item: item3
        },
        {
            item: item4
        },
    ]
    const settings = {
        customPaging: function (i) {
          return (
              <a href="">
                  <img src={showDetailProducts[i].item} alt="" />
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
                        {showDetailProducts.map((photo) =>(
                            <div className="image-array-slider">
                                <Image src={photo.item} alt="" />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="group-information-detail">
                    <div className="information-detail">
                        <div className="name-detail">
                            <h3>Puma Defy Mid Metal</h3>
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
                                        <p>Chưa Có Đánh Giá</p>
                                    </div>
                                </div>
                                <p>
                                    mã sản phẩm: <span>607f098ec0132372d7309bce</span>
                                </p>
                                <p>
                                    nhà xản xuất:  <span>Puma</span>
                                </p>
                                <p>
                                    bộ sưu tập: <span>Puma Defy Mid Metal</span>
                                </p>
                                <p>
                                    loại sản phẩm: <span>Puma Defy Mid Metal</span>
                                </p>
                                <p>
                                    dòng sản phẩm: <span>Puma Rsx</span>
                                </p>
                                <p>
                                    màu sắc: <span>Đen</span>
                                </p>
                                <p>
                                    giới tính: <span> Nữ</span>
                                </p>
                            </div>
                        </div>
                        <div className="group-free-detail">
                            <div className="img-free-detail">
                                <img src={imgFreeShip} alt="free-ship" />
                            </div>
                            <p>
                                Miễn phí giao hàng (tối đa 30k) cho đơn hàng từ 900k Xem chi
                                tiết
						    </p>
                        </div>
                        <Form>
                            <div className="group-buys-detail">
                                <div className="group-quantity-number">
                                    <span>số lượng</span>
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
                                    <Button
                                        type="primary"
                                        htmlType="submit">
                                        <i className="fa fa-shopping-cart" />
										chọn mua hàng
									</Button>
                                </div>
                            </div>
                            <div className="group-price-size">
                                <div className="group-price">
                                    <span>
                                        3.415.000 <u>đ</u>
                                    </span>
                                </div>
                                <div className="group-size">
                                    <Form.Item
                                        name="size"
                                        label="Chọn kích cỡ"
                                        rules={[
                                        {
                                            required: true,
                                            message: false,
                                        },
                                        ]}
                                    >
                                        <Select placeholder="size" style={{ width: "100%" }}>
                                            <Option value="35">35</Option>
                                            <Option value="35">36</Option>
                                            <Option value="35">37</Option>
                                            <Option value="35">38</Option>
                                            <Option value="35">39</Option>
                                            <Option value="35">40</Option>
                                            <Option value="35">41</Option>
                                            <Option value="35">42</Option>
                                        </Select>
                                </Form.Item>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
            <div className="group-description" data-aos={"fade-down"}>
                <h2>Mô tả Sản phẩm</h2>
                <div className="group-description-text">
                    <p>Sở hữu kiểu dáng siêu phong cách, hiện đại với khả năng sáng tạo màu sắc các lớp TPU vô cùng nổi bật, 
                    giày PUMA x MTV RS-X Tracks Bold sẽ là mẫu giày mang đến cái nhìn mới mẽ trong phong cách thời trang của bạn</p>
                </div>
            </div>
        </div>
    )
}

export default InForProduct
