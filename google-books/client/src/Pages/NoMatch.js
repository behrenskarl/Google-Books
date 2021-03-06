import React from "react";
import { Col, Row, Container } from "../Components/Grid";
import Jumbotron from "../Components/Jumbotron";

function NoMatch() {
    return (
        <Container fluid>
            <Row>
                <Col size="md 12">
                    <Jumbotron>
                        <h1>404 Page Not Found</h1>
                        <h1>
                            <span role="img" aira-label="Face With Rolling Eyes Emoji">
                                🙄
                            </span>
                        </h1>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
}

export default NoMatch;