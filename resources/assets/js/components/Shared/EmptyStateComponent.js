import React, {Component} from 'react';
import { Layout, Row, Col, Alert } from 'antd';

class EmptyStateComponent extends Component {

    constructor(props) {

        super(props);

        // Default states and values assigned to variables on page load
        this.state = {



        };

        // Bind ' this ' keyword to custom functions here
        // this.someMethod = this.someMethod.bind(this);

    }

    render() {

        const { Content } = Layout;
        const { location } = this.props;

        return (
            <Content style={{ overflow: 'initial' }}>
                <div style={{ padding: 24, background: 'transparent' }}>
                    <Row>
                        <Col span={24} >
                            <Alert
                                message="Empty state"
                                description={" ⇨ "+location}
                                type="warning"
                                showIcon
                            />
                        </Col>
                    </Row>
                </div>
            </Content>
        );
    }

}

export default EmptyStateComponent;