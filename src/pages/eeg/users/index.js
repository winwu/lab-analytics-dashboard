import React from 'react';
import { Table } from 'antd';

const columns = [
    {
        title: 'User ID',
        dataIndex: 'user_id',
        width: 150,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        width: 150,
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
];

const data = [];
for (let i = 0; i < 100; i++) {
    data.push({
        key: i,
        user_id: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    });
}

class EegUsers extends React.Component {
    render() {
        return (<>
            <h2>EegUsers</h2>
            <Table
                columns={columns}
                dataSource={data}
                pagination={{ pageSize: 50 }}
                scroll={{ y: 'calc(100vh - 64px - 53px - 70px - 24px - 48px - 40px)' }} />
        </>);
    }
}
export default EegUsers;
