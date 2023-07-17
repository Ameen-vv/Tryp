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
