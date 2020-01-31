import React from 'react';
import { Table } from 'antd';

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
        width: 80
    },
    {
        title: 'a_2',
        dataIndex: 'address',
        key: '2',
        width: 80
    },
    {
        title: 'a_3',
        dataIndex: 'address',
        key: '3',
        width: 80
    },
    {
        title: 'a_4',
        dataIndex: 'address',
        key: '4',
        width: 80
    },
    {
        title: 'a_5',
        dataIndex: 'address',
        key: '5',
        width: 80
    },
    {
        title: 'a_6',
        dataIndex: 'address',
        key: '6',
        width: 80
    },
    {
        title: 'a_7',
        dataIndex: 'address',
        key: '7',
        width: 80
    },
    {
        title: 'a_8', 
        dataIndex: 'address',
        key: '8',
        width: 80
    },
    {
        title: 'a_9', 
        dataIndex: 'address',
        key: '9',
        width: 80
    },
    {
        title: 'a_10', 
        dataIndex: 'address',
        key: '10',
        width: 80
    },
    {
        title: 'a_11', 
        dataIndex: 'address',
        key: '11',
        width: 80
    },
    {
        title: 'a_12', 
        dataIndex: 'address',
        key: '12',
        width: 80
    }
];
  
const data = [];
for (let i = 0; i < 100; i++) {
    data.push({
        key: i,
        user_id: i,
        gender: 1,
        age: 32,
        // dwell_time: '9hrs',
        address: `${i}`,
    });
}

class PADList extends React.Component {
    render() {
        return (<>
            <h2>PADList</h2>
            <Table
                columns={columns}
                dataSource={data}
                scroll={{ x: 1400, y: 300 }} />,
        </>);
    }
}
export default PADList;
