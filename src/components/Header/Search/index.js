import React, { useState } from 'react'
import './style.css';
import { Form, Button, Input } from 'antd';
import 'font-awesome/css/font-awesome.min.css';


function Search() {
    
    const [open, setOpen] = useState(false);
    return (
        <div className="ground-search">
            <div className="main-search">
                <div className="from-search">
                    <div className={open ? 'search open' : 'search'}>
                        <Form>
                            <i 
                                style={{ 'display': 'none' }} 
                                className="fa fa-long-arrow-left btn-close-search logoConverse" 
                                onClick={() => setOpen(!open)} 
                            />
                            <div className="input-search">
                                <Form.Item name="keyWord">
                                    <Input
                                        className="keyword-search"
                                        placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn ..."
                                     />
                                </Form.Item>
                            </div>
                            <div className="icon-search">
                                <Button
                                    type="primary"
                                    className='btn-search'
                                > 
                                    <i className="fa fa-search" />
                                </Button>
                            </div>
                        </Form>
                    </div>
                    <div className="show-menu-1000" style={{ 'display': 'none' }} onClick={() => setOpen(!open)}>
                        <i className="fa fa-search" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search
