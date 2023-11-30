// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";

const UseServayIteams = () => {
  const axiosPublic = UseAxiosPublic();

  // const [menu, setMenu] = useState([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   fetch(http://localhost:5000/menu")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMenu(data);
  //       setLoading;
  //       false;
  //     });
  // }, []);
  const {
    data: servay = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["servay"],
    queryFn: async () => {
      const res = await axiosPublic.get("/servay");
      return res.data;
    },
  });
  return [servay, loading, refetch];
};

export default UseServayIteams;
