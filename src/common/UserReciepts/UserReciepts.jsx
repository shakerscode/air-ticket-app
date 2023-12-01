import React from 'react';

function UserReciepts() {
    return (
        <div className='bg-lightgray p-10 w-100 d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
            <div className='border bg-white w-50 h-50 shadow rounded p-4'>
            <h4 className="fs-5">Your Reciepts </h4>
              <div
                className="w-100 bg-secondary mb-2"
                style={{ height: "1px" }}
              ></div>
            </div>
        </div>
    );
}

export default UserReciepts;