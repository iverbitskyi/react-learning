import React from "react";
import { Container, Row, Col } from 'reactstrap';
import useAxios from 'axios-hooks';

const NewsComponent = () => {
    return (
        <Container>
            <Row>
                <Col xs={{ size: 10, ossfet: 1 }}>
                    <h1>Hello!</h1>
                </Col>
            </Row>
            <Row>
                <Col xs={{ size: 8, ossfet: 1 }}>Test</Col>
                <Col xs={{ size: 2 }}>Test</Col>
            </Row>
        </Container>
    );
}

export default NewsComponent;