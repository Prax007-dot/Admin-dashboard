import React, { useState } from 'react'
import { useGetTransactionsQuery } from '../state/api';
import { DataGrid } from './Pagination copy';

const Transactons = () => {
    
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(28);
    const [sort, setSort] = useState({});
    const [search, setSearch] = useState("");
   
    // ID</th>
    //         <th>User Id</th>
    //         <th>CreatedAt</th>
    //         <th>No. of Products</th>
    //         <th>Cost</th>

    

    const { data,isLoading} = useGetTransactionsQuery({page,pageSize, sort: JSON.stringify(sort), search});

    console.log("data",data);
  return (
    <div>
        Transactons
        {data || !isLoading ? (<DataGrid datas={data} itemsPerPage={10} setSearch={setSearch} setSort={setSort}/>) : (<>loading</>)}
    </div>
  )
}

export default Transactons;