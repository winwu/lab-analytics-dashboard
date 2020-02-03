import React from 'react'
import { Row, Col, Statistic, Divider } from 'antd';
import {Doughnut} from 'react-chartjs-2';

const data = {
	labels: [
		'Valid Dataset',
		'Invalid Dataset'
	],
	datasets: [{
		data: [23, 5],
		backgroundColor: [
            '#096dd9',
            '#868686'
		],
		hoverBackgroundColor: [
            '#096dd9',
            '#868686'
		]
	}]
};

class Dashboard extends React.Component {
    /*
    constructor(props) {
        super(props);
        this.state = {
            mode: 'top',
        };
    }

    handleModeChange = e => {
        const mode = e.target.value;
        this.setState({ mode });
    };
    */

    render() {
        // const { mode } = this.state;
        return (<>
            <h1>Dashboard</h1>
            <h2>Basin Info</h2>
            <section>
                <Row type="flex" align="middle">
                    <Col span={5}>
                        <div style={{height: '100px'}}>
                            <Doughnut data={data} options={{
                                maintainAspectRatio: false,
                                legend: {
                                    display: false
                                }
                            }}/>
                        </div>
                    </Col>
                    <Col span={8}>
                        <Row>
                            <Col span={8}>
                                <Statistic title="Total Users" value={23} />
                            </Col>
                            <Col span={8}>
                                <Statistic title="Valid user" value={18} />
                            </Col>
                            <Col span={8}>
                                <Statistic title="Invalid user" value={5} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </section>
            
            <Divider />
            
            <section>
                <h2>Descriptive Statistics</h2>
                {/* <Radio.Group onChange={this.handleModeChange} value={mode} style={{ marginBottom: 8 }}>
                    <Radio.Button value="top">Horizontal</Radio.Button>
                    <Radio.Button value="left">Vertical</Radio.Button>
                </Radio.Group> */}
                <Row>
                    <Col span={8}>
                        <h4>Gender</h4>
                    </Col>
                    <Col span={8}>
                        <h4>Age</h4>
                    </Col>
                    <Col span={8}>
                        <h4>Dwell time</h4>
                    </Col>
                </Row>
            </section>
        </>)
    }
}
export default Dashboard
