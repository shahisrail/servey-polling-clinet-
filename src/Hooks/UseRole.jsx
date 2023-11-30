// // /* eslint-disable no-unused-vars */
// // import React from 'react';
// // import UseAuth from './UseAuth';
// // import { useQuery } from '@tanstack/react-query';

// // const UseRole = () => {
// //   const { user, loading } = UseAuth()
// //   const { data: pro User, isloading } = useQuery({
// //     enabled:!lo
// //   })

// // };

// // export default UseRole;


// /* eslint-disable no-unused-vars */
// import { useQuery } from "@tanstack/react-query";
// import React from "react";

// import UseAxiosHoks from "./UseAxiosHoks";
// import UseAuth from "./UseAuth";

// const UseRole = () => {
//   const { user, loading } = UseAuth();
//   const axiosSecure = UseAxiosHoks();
//   const { data: isprouser, isPending: isAdminLoading } = useQuery({
//     queryKey: [user?.email, "isAdmin"],
//     enabled: !loading,
//     queryFn: async () => {
//       const res = await axiosSecure.get('user.email');
//       console.log(res.data);
//       return res.data?.admin;
//     },
//   });
//   return [isprouser, isAdminLoading];
// };

// export default UseRole;
