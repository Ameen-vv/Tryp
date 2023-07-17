import React, { useEffect, useState } from 'react';
import { Box, Input, Table, Thead, Tbody, Tr, Th, Td, IconButton } from '@chakra-ui/react';
import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons';

interface DataTableProps {
  headers: { label: string; key: string; renderCell: (rowData: any) => React.ReactNode }[];
  data: any[];
}

const DataTable: React.FC<DataTableProps> = ({ headers, data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems,setCurrentItems] = useState<any[]>([])
  const [sortKey, setSortKey] = useState('');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');


  const itemsPerPage = 5;

  // Search Logic
  const filteredData = data.filter((item) =>
    headers.some((header) =>
      item[header.key].toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  useEffect(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    setCurrentItems(filteredData.slice(indexOfFirstItem, indexOfLastItem));
  },[currentPage,filteredData]);




  
  // Handle pagination page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Box>
      <Input
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        mb={4}
      />
      <Table variant="striped" colorScheme="gray">
        <Thead>
          <Tr>
            {headers.map(({ label, key }, index) => (
              <Th key={key}>
                {label}
                <IconButton
                  aria-label={`Sort ${sortDirection}`}
                  size="xs"
                  icon={sortDirection === 'asc' ? <ChevronUpIcon color="black" /> : <ChevronDownIcon color="black" />}
                />
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {currentItems.map((item, index) => (
            <Tr key={index}>
              {headers.map(({ key, renderCell }, index) => (
                <Td key={index}>{renderCell ? renderCell(item[key]) : <span>{item[key]}</span>} </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
      {/* Pagination */}
      <Box mt={4}>
        <span>Page: </span>
        {Array(Math.ceil(filteredData.length / itemsPerPage))
          .fill(null)
          .map((_, index) => (
            <button key={index} onClick={() => handlePageChange(index + 1)}>
              {index + 1}
            </button>
          ))}
      </Box>
    </Box>
  );
};

export default DataTable;
