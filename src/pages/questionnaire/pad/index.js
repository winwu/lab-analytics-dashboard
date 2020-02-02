import React from 'react'
import { Row, Col, Radio, Table } from 'antd'
import { Radar, HorizontalBar } from 'react-chartjs-2'
import Color from 'color'
import { chartColors } from '../../../utils'

const chartBaseConfig = {
    legend: {
        position: 'bottom',
        display: true,
    },
}

const radarConfig = Object.assign({}, chartBaseConfig, {
    scale: {
        ticks: {
            suggestedMin: 0,
            suggestedMax: 9,
        },
    },
})

const chartData = {
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling'],
    datasets: [
        {
            label: 'All User Average',
            backgroundColor: Color(chartColors.blue)
                .alpha(0.2)
                .string(),
            borderColor: Color(chartColors.blue).string(),
            pointBackgroundColor: Color(chartColors.blue).string(),
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: Color(chartColors.blue).string(),
            data: [2, 5, 4.5, 6.7, 3.4, 5.4],
        },
        {
            label: 'User N',
            backgroundColor: Color(chartColors.grey)
                .alpha(0.2)
                .string(),
            borderColor: Color(chartColors.grey).string(),
            pointBackgroundColor: Color(chartColors.grey).string(),
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: Color(chartColors.grey).string(),
            data: [1.2, 4.2, 3.4, 2.4, 4.5, 2.3],
        },
    ],
}

const columns = [
    {
        title: 'UID',
        width: 100,
        dataIndex: 'user_id',
        key: 'user_id',
        fixed: 'left',
    },
    {
        title: 'Gender',
        width: 100,
        dataIndex: 'gender',
        key: 'gender',
        fixed: 'left',
    },
    {
        title: 'Age',
        width: 100,
        dataIndex: 'age',
        key: 'age',
        fixed: 'left',
    },
    {
        title: 'a_1',
        dataIndex: 'address',
        key: '1',
        width: 80,
    },
    {
        title: 'a_2',
        dataIndex: 'address',
        key: '2',
        width: 80,
    },
    {
        title: 'a_3',
        dataIndex: 'address',
        key: '3',
        width: 80,
    },
    {
        title: 'a_4',
        dataIndex: 'address',
        key: '4',
        width: 80,
    },
    {
        title: 'a_5',
        dataIndex: 'address',
        key: '5',
        width: 80,
    },
    {
        title: 'a_6',
        dataIndex: 'address',
        key: '6',
        width: 80,
    },
    {
        title: 'a_7',
        dataIndex: 'address',
        key: '7',
        width: 80,
    },
    {
        title: 'a_8',
        dataIndex: 'address',
        key: '8',
        width: 80,
    },
    {
        title: 'a_9',
        dataIndex: 'address',
        key: '9',
        width: 80,
    },
    {
        title: 'a_10',
        dataIndex: 'address',
        key: '10',
        width: 80,
    },
    {
        title: 'a_11',
        dataIndex: 'address',
        key: '11',
        width: 80,
    },
    {
        title: 'a_12',
        dataIndex: 'address',
        key: '12',
        width: 80,
    },
]

const data = []
for (let i = 0; i < 100; i++) {
    data.push({
        key: i,
        user_id: i,
        gender: 1,
        age: 32,
        // dwell_time: '9hrs',
        address: `${i}`,
    })
}

class PADList extends React.Component {
    state = {
        chartType: 'radar',
    }

    handleDataTypeChange = e => {
        this.setState({ chartType: e.target.value })
    }

    render() {
        const { chartType } = this.state
        return (
            <>
                <section className="mb-2">
                    <Radio.Group value={chartType} onChange={this.handleDataTypeChange}>
                        <Radio.Button value="radar">Radar</Radio.Button>
                        <Radio.Button value="line">Line</Radio.Button>
                    </Radio.Group>
                    <Row>
                        {chartType === 'radar' && (
                            <>
                                <Col span={8}>
                                    <div className="chart-head">
                                        <h4>Pleasure</h4>
                                    </div>
                                    <Radar data={chartData} options={radarConfig} />
                                </Col>
                                <Col span={8}>
                                    <div className="chart-head">
                                        <h4>Arousal</h4>
                                    </div>
                                    <Radar data={chartData} options={radarConfig} />
                                </Col>
                                <Col span={8}>
                                    <div className="chart-head">
                                        <h4>Dominance</h4>
                                    </div>
                                    <Radar data={chartData} options={radarConfig} />
                                </Col>
                            </>
                        )}
                    </Row>
                    <Row>
                        {chartType === 'line' && (
                            <>
                                <Col span={8}>
                                    <div className="chart-head">
                                        <h4>Pleasure</h4>
                                    </div>
                                    <HorizontalBar data={chartData} options={chartBaseConfig} />
                                </Col>
                                <Col span={8}>
                                    <div className="chart-head">
                                        <h4>Arousal</h4>
                                    </div>
                                    <HorizontalBar data={chartData} options={chartBaseConfig} />
                                </Col>
                                <Col span={8}>
                                    <div className="chart-head">
                                        <h4>Dominance</h4>
                                    </div>
                                    <HorizontalBar data={chartData} options={chartBaseConfig} />
                                </Col>
                            </>
                        )}
                    </Row>
                </section>

                <section>
                    <Table
                        onRow={(record, rowIndex) => {
                            return {
                                onClick: event => {
                                    console.log('record', record)
                                    console.log('rowIndex', rowIndex)
                                },
                            }
                        }}
                        rowClassName={'todo-change-color'}
                        columns={columns}
                        dataSource={data}
                        scroll={{ x: 1400, y: 300 }}
                    />
                </section>
            </>
        )
    }
}
export default PADList
