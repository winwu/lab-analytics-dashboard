import React from 'react'
import { Row, Col, Statistic, Divider, Table, Icon } from 'antd';
import { Bar, Doughnut } from 'react-chartjs-2';
import Color from 'color';
// import { chartColors } from '../../utils';

const data = {
	labels: [
		'Valid Dataset',
		'Invalid Dataset'
	],
	datasets: [{
		data: [23, 5],
		backgroundColor: [
            Color('#ff9933').alpha(1).string(),
            '#868686'
		],
		hoverBackgroundColor: [
            Color('#ff9933').alpha(0.8).string(),
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
            <Row type="flex" align="middle">
                <Col span={18}>
                    <h1>Dashboard</h1>
                </Col>
                <Col span={6} className="text-right">
                    <Icon type="sync" /> <span>Last updated: 2020/02/05 00:12:50</span>
                </Col>
            </Row>

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
                <Row gutter={16}>
                    <Col span={6}>
                        <div className="chart-head">
                            <h4>Gender</h4>
                        </div>
                        <div style={{ height: '200px'}}>
                            <Bar
                                data={{
                                    labels: ['Male', 'Female'],
                                    datasets: [
                                    {
                                        backgroundColor: Color('#0077c8')
                                            .alpha(0.7)
                                            .string(),
                                        borderColor: Color('#0077c8').string(),
                                        borderWidth: 1,
                                        data: [65, 100, 0]
                                    }
                                    ]
                                }}
                                options={{
                                    maintainAspectRatio: false,
                                    legend: {
                                        display: false
                                    },
                                    scales: {
                                        xAxes: [{
                                            categoryPercentage: 0.6,
                                            barPercentage: 0.6
                                        }]
                                    }
                                }}
                            />
                        </div>
                        <table class="table">
                            <thead>
                                <tr>
                                    <td>Mele</td>
                                    <td>Femele</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>12</td>
                                    <td>19</td>
                                </tr>
                            </tbody>
                        </table>
                    </Col>
                    <Col span={9}>
                        <div className="chart-head">
                            <h4>Age</h4>
                        </div>
                        <div style={{ height: '200px'}}>
                            <Bar
                                data={{
                                    labels: ['0~10', '11~19', '20~29', '30~39', '40~49'],
                                    datasets: [
                                    {
                                        backgroundColor: Color('#2754ba')
                                            .alpha(0.7)
                                            .string(),
                                        borderColor: Color('#2754ba').string(),
                                        borderWidth: 1,
                                        data: [2, 4, 7, 10, 5, 0]
                                    }
                                    ]
                                }}
                                options={{
                                    maintainAspectRatio: false,
                                    legend: {
                                        display: false
                                    },
                                    scales: {
                                        xAxes: [{
                                            categoryPercentage: 0.8,
                                            barPercentage: 0.8
                                        }]
                                    }
                                }}
                            />
                        </div>
                    </Col>
                    <Col span={9}>
                        <div className="chart-head">
                            <h4>Dwell time</h4>
                        </div>
                        <div style={{ height: '200px'}}>
                            <Bar
                                data={{
                                    labels: ['~30 min', '30~60 min', '60 ~ 120 min', '> 120m'],
                                    datasets: [
                                        {
                                            backgroundColor: Color('#00aee6')
                                                .alpha(0.7)
                                                .string(),
                                            borderColor: Color('#00aee6').string(),
                                            borderWidth: 1,
                                            data: [10, 29, 8, 1]
                                        }
                                    ]
                                }}
                                options={{
                                    maintainAspectRatio: false,
                                    legend: {
                                        display: false
                                    },
                                    scales: {
                                        xAxes: [{
                                            categoryPercentage: 0.8,
                                            barPercentage: 0.8
                                        }]
                                    }
                                }}
                            />
                        </div>
                    </Col>
                </Row>
            </section>
        </>)
    }
}
export default Dashboard
