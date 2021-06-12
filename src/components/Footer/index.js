import React from 'react';
import cash from '../../image/cash.jpg';
import installment from '../../image/installment.jpg';
import internet_banking from '../../image/internet_banking.jpg';
import jcb from '../../image/jcb.jpg';
import mastercard from '../../image/mastercard.jpg';
import visa from '../../image/visa.jpg';
import './style.css';
import { UserOutlined } from '@ant-design/icons';
import { EyeOutlined } from '@ant-design/icons';

function Footer() {
    return (
        <>
            <div className="frames-group-footer">
                <div className="group-footer">
                    <div className="footer">
                        <div className="group-information-user">
                            <h3>HỖ TRỢ KHÁCH HÀNG</h3>
                            <ul>
                                <li>Các câu hỏi thường gặp</li>
                                <li>Gửi yêu cầu hỗ trợ</li>
                                <li>Hướng dẫn đặt hàng</li>
                                <li>Phương thức vận chuyển</li>
                                <li>Chính sách đổi trả</li>
                                <li>Hướng dẫn mua trả góp</li>
                            </ul>
                        </div>
                        <div className="group-information-website">
                            <h3>VỀ SHOP</h3>
                            <ul>
                                <li>Giới thiệu</li>
                                <li>Tuyển Dụng</li>
                                <li>Chính sách bảo mật thanh toán</li>
                                <li>Chính sách bảo mật thông tin cá nhân</li>
                                <li>Chính sách giải quyết khiếu nại</li>
                                <li>Điều khoản sử dụng</li>
                            </ul>
                        </div>
                        <div className="group-payment">
                            <h3>PHƯƠNG THỨC THANH TOÁN</h3>
                            <ul>
                                <li><img src={cash} alt="cash" /></li>
                                <li><img src={installment} alt="installment" /></li>
                                <li><img src={internet_banking} alt="internet_banking" /></li>
                                <li><img src={jcb} alt="jcb" /></li>
                                <li><img src={mastercard} alt="mastercard" /></li>
                                <li><img src={visa} alt="visa" /></li>
                            </ul>
                        </div>
                        <div className="group-connect-us">
                            <h3>KẾT NỐI VỚI CHÚNG TÔI</h3>
                            <ul>
                                <li>
                                <a href="https://www.facebook.com/profile.php?id=100005142878434" target="_blank" rel="noreferrer noopener"><i className="fa fa-facebook" /></a>
                                </li>
                                <li>
                                <a href="https://www.linkedin.com/in/dat-bui-quoc-587401210/" target="_blank" rel="noreferrer noopener"><i className="fa fa-linkedin" /></a>
                                </li>
                                <li>
                                <a href="https://github.com/buiquocdatgl" target="_blank" rel="noreferrer noopener"><i className="fa fa-github" /> </a>
                                </li>
                                <li>
                                <a href="https://www.instagram.com/quocccbinnn/?hl=vi" target="_blank" rel="noreferrer noopener"><i className="fa fa-external-link" /></a>
                                </li>
                            </ul>
                            <div className="user-online">
                                <p> <UserOutlined /> Online 1</p>
                                <p> <EyeOutlined /> 1.694 lượt xem</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
