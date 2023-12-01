import React from "react";
import { useLocation } from "react-router-dom";

function UserReciepts() {
    const location = useLocation();
    const recieptData = location.state && location.state.reciept;
 

  return (
    <div
      className="bg-lightgray p-10 w-100 d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="border bg-white w-50 h-50 shadow rounded p-4">
        <h4 className="fs-5">Your Reciepts </h4>
        <div
          className="w-100 bg-secondary mb-2"
          style={{ height: "1px" }}
        ></div>
        <div>
            <p>Your reciept Id: {recieptData?.id}</p>
        </div>
        <div className="d-flex flex-column gap-0 p-3 border shadow rounded">
          <p style={{lineHeight:"8px"}}> Name: {recieptData?.customerName}</p>
          <p style={{lineHeight:"8px"}}> Seats: {recieptData?.seats}</p>
          <p style={{lineHeight:"8px"}}> Time: {recieptData?.time}</p>
          <p style={{lineHeight:"8px"}}> Airport: {recieptData?.airport}</p>
          <p style={{lineHeight:"8px"}}> Destination: {recieptData?.destination}</p>
        </div>
      </div>
    </div>
  );
}

export default UserReciepts;
