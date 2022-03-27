import React, { useEffect, useState } from 'react';
import './App.css';
import Filter from './components/Filter/Filter';
import Header from './components/Header/Header';
import Table from './components/Table';
import axios from 'axios'
import Dialog from './components/Dialog/Dialog';

function App() {
  const [Data, setData] = useState([])
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [dateOrder, setDateOrder] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const fetchDetails = async () => {
    const response = await axios.get("https://my-json-server.typicode.com/Ved-X/assignment/orders");
    setData(response.data);
  };

  useEffect(() => {
    fetchDetails();
  }, [])

  useEffect(() => {
    console.log("Search: ", search);
    console.log("Filter: ", status, dateOrder);
    const selectedOption = Data.filter((item) => {
      if (search === '') {
        return item;
      }
      else {
        return item.customer.toLowerCase().includes(search.toLowerCase())
      }
    })
    const newStatus = status === "Completed" ? selectedOption.filter(a => a.status === "Completed") :
      status === "Delivered" ? selectedOption.filter(a => a.status === "Delivered") : status === "Prepared" ?
        Data.filter(a => a.status === "Prepared") : selectedOption;
    const sortedDate = dateOrder === "0" ? [...newStatus].sort((a, b) => a.date.split('/').reverse().join().localeCompare(b.date.split('/').reverse().join())) :
      dateOrder === "1" ? [...newStatus].sort((a, b) => b.date.split('/').reverse().join().localeCompare(a.date.split('/').reverse().join())) : newStatus;
    console.log("Searched Item: ", selectedOption);
    setFilteredData(sortedDate);

  }, [search, dateOrder, status, Data])


  return (
    <div className="App">
      <Dialog open={open} setOpen={setOpen} setStatus={setStatus} setDateOrder={setDateOrder} status={status} dateOrder={dateOrder} />
      <Header length={Data.length} newLength={filteredData.length} />
      <Filter setOpen={setOpen} setSearch={setSearch} search={search} />
      <Table Data={filteredData} />
    </div>
  );
}

export default App;
