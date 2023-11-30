// import React from 'react';

// const UseproUser = () => {
//   return (
//     <div>
      
//     </div>
//   );
// };

// export default UseproUser;



/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import React from "react";

import UseAxiosHoks from "./UseAxiosHoks";
import UseAuth from "./UseAuth";

const UseproUser = () => {
  const { user, loading } = UseAuth();
  const axiosSecure = UseAxiosHoks();
  const { data: isProUser, isPending: isProUserLoading } = useQuery({
    queryKey: [user?.email, "isProUser"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/ProUser/${user.email}`);
      console.log(res.data);
      return res.data?.ProUser;
    },
  });
  return [isProUser, isProUserLoading];
};

export default UseproUser;
