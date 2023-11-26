// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
// import UseAxiosPublic from "./UseAxiosPublic";
import UseAxiosHoks from "./UseAxiosHoks";

const UseSerbayDetails = () => {
  // const axiosPublic = UseAxiosPublic();
  const axiosSecure = UseAxiosHoks();
  const {
    data: servayAdmin = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["servayAdmin"],
    queryFn: async () => {
      const res = await axiosSecure.get("/servayAdmin");
      return res.data;
    },
  });
  return [servayAdmin, loading, refetch];
};

export default UseSerbayDetails;
