/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import React from "react";

import UseAxiosHoks from "./UseAxiosHoks";
import UseAuth from "./UseAuth";

const UseServay = () => {
  const { user, loading } = UseAuth();
  const axiosSecure = UseAxiosHoks();
  const { data: isServey, isPending: isServeyLoading } = useQuery({
    queryKey: [user?.email, "isServey"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/Servey/${user.email}`);
      console.log(res.data);
      return res.data?.Servey;
    },
  });
  return [isServey, isServeyLoading];
};

export default UseServay;
