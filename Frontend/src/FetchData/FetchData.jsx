import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
function FetchData() {
  const [data,setData] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:5000/api/customers")
        .then(res=>setData(res.data))
        .catch(err=>console.log(err));
    },[])
  return (
    <>
      {/* <div>
        <Navbar />
      </div> */}

      <div className="min h-screen  ">
        <div className="container">
          <div className="mt-3">Users Details</div>
          <table className="table">
            <thead>
              <tr>
                <th>serialnumber</th>
                <th>name</th>
                <th>accountnumber</th>
                <th>balance</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{user.serialnumber}</td>
                    <td>{user.name}</td>
                    <td>{user.accountnumber}</td>
                    <td>{user.balance}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default FetchData
