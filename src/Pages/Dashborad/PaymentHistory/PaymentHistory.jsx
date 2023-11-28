
/* eslint-disable no-unused-vars */
import React from "react";


import { useQuery } from "@tanstack/react-query";

import UseAxiosHoks from "../../../Hooks/UseAxiosHoks";

const PaymentHistory = () => {

  const axiosSecure = UseAxiosHoks();
  const { data: paymentsHistory = [] } = useQuery({
    queryKey: ["paymentsHistory"],
    queryFn: async () => {
      const res = await axiosSecure.get("/paymentsHistory");
      return res.data;
    },
  });
  return (
    <div>
      <h2> Total payment:{paymentsHistory.length} </h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>price</th>
              <th>TranjectoinId</th>
              <th>Payment date</th>

            </tr>
          </thead>
          <tbody>
            {paymentsHistory.map((payment, index) => (
              <tr key={payment._id}>
                <th>{index + 1}</th>
                <th>{payment.eamil} </th>
                <td>{payment.price}</td>
                <td>{payment.tranjectoin}</td>
                <td>{payment.date}</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
