import React from 'react'
import { DataGrid } from './Pagination';
import { useGetCustomersQuery } from '../state/api';

const Customers = () => {
  // const data = [
  //   { name: "Alice Johnson", age: 28, location: "Chicago" },
  //   { name: "Bob Williams", age: 22, location: "Houston" },
  //   { name: "Carol Davis", age: 35, location: "Miami" },
  //   { name: "David Smith", age: 40, location: "Seattle" },
  //   // Add more data objects as needed
  // ];
  const {data,isLoading} = useGetCustomersQuery();
  console.log(data);
  const itemsPerPage = 25;
  return (
    <div>
      {
        data || !isLoading ? (<DataGrid data={data} itemsPerPage={itemsPerPage} />):(<>loading</>)
      }
    
    </div>
  )
}

export default Customers