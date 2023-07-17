'use client'
import DataTable from '../components/DataTable/DataTable';
import { Button, ButtonGroup  } from '@chakra-ui/react';


const Home: React.FC = () => {
  const headers = [
    {
      label: 'Timestamp',
      key: 'timestamp',
    },
    {
      label: 'Purchase Id',
      key: 'purchaseId',
    },
    {
      label: 'Mail',
      key: 'mail',
      renderCell: (cellData: any) => <span>{cellData}</span>,
    },
    {
      label: 'Name',
      key: 'name',
      renderCell: (cellData: any) => <span>{cellData}</span>,
    },
    {
      label: 'Source',
      key: 'source',
      renderCell: (cellData: any) => <span>{cellData}</span>,
    },
    {
      label: 'Status',
      key: 'status',
      renderCell: (cellData: any) => <span>{cellData}</span>,
    },
    {
      label: 'Select',
      key: 'select',
      renderCell: (cellData: any) => <input type="checkbox" checked={cellData} />,
    },
  ];

  const data = [
    {
      timestamp: '2023-07-17',
      purchaseId: 1,
      mail: 'john@example.com',
      name: 'John Doe',
      source: 'Website',
      status: 'Completed',
      select: true,
    },
    {
      timestamp: '2023-07-18',
      purchaseId: 2,
      mail: 'jane@example.com',
      name: 'Jane Smith',
      source: 'Mobile App',
      status: 'Pending',
      select: false,
    },
    {
      timestamp: '2023-07-19',
      purchaseId: 3,
      mail: 'sam@example.com',
      name: 'Sam Johnson',
      source: 'Website',
      status: 'Completed',
      select: true,
    },
    {
      timestamp: '2023-07-20',
      purchaseId: 4,
      mail: 'alex@example.com',
      name: 'Alex Thompson',
      source: 'Mobile App',
      status: 'Pending',
      select: true,
    },
    {
      timestamp: '2023-07-21',
      purchaseId: 5,
      mail: 'emma@example.com',
      name: 'Emma Davis',
      source: 'Website',
      status: 'Completed',
      select: false,
    },
    {
      timestamp: '2023-07-22',
      purchaseId: 6,
      mail: 'michael@example.com',
      name: 'Michael Wilson',
      source: 'Mobile App',
      status: 'Pending',
      select: true,
    },
    {
      timestamp: '2023-07-23',
      purchaseId: 7,
      mail: 'lisa@example.com',
      name: 'Lisa Brown',
      source: 'Website',
      status: 'Completed',
      select: true,
    },
    {
      timestamp: '2023-07-24',
      purchaseId: 8,
      mail: 'peter@example.com',
      name: 'Peter Anderson',
      source: 'Mobile App',
      status: 'Pending',
      select: false,
    },
    {
      timestamp: '2023-07-25',
      purchaseId: 9,
      mail: 'sara@example.com',
      name: 'Sara Martinez',
      source: 'Website',
      status: 'Completed',
      select: true,
    },
    {
      timestamp: '2023-07-26',
      purchaseId: 10,
      mail: 'mark@example.com',
      name: 'Mark Thompson',
      source: 'Mobile App',
      status: 'Pending',
      select: true,
    },
    // Add more data objects here...
  ];
  

  return (
      <div>
        <h1>adkjskj</h1>
        <DataTable headers={headers} data={data} />
      </div>
  )
};

export default Home;
