import React from 'react';
import StarRatings from "react-star-ratings";
import { useState, useEffect } from "react";
import { Comment, Avatar, Form, Button, Input } from "antd";
import { UserOutlined } from '@ant-design/icons';
import "./style.css";
import ImageDefault from "../../../../../image/Notoken.png";

const { TextArea } = Input; 

function FormWrite() {
    return (
        <div className="group-form-comment">
            <Form>
                <Comment
                    avatar={
                    <Avatar src={ImageDefault} alt="Han Solo" />
                    }
                >
                    <StarRatings
                    numberOfStars={5}
                    name='rating'
                    starDimension="22px"
                    starRatedColor="#fed330"
                    starHoverColor="#fed330"
                    starEmptyColor="none"
                    />
                    <div className="group-length-content">
                        <p>/700</p>
                    </div>
                    <Form.Item name="content">
                        <TextArea
                            placeholder="Mời bạn để lại bình luận"
                            rows={8}
                            max={20}
                            maxLength={700}
                            id="message"
                            className="from-write"
                        />
                    </Form.Item>
                    <Form.Item shouldUpdate={true}>
                        <Button
                         htmlType="submit"
                         type="primary"
                         disabled
                        >
                            Thêm Bình Luận
                        </Button>
                    </Form.Item>
                </Comment>
            </Form>
        </div>
    )
}

export default FormWrite
