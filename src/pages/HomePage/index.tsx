import React, { useCallback, useEffect, useState } from "react";
import "./styles.scss";

const initParams = {
  page: 1,
  count: 30,
  ctime: "1732010765",
  version: "1.11.9",
  sig: "541afa06038bb9772e95b1db2ab16f0abf6d6f8c0862347a8cfea1539da7847bc07e81d75865759d0992dc3682f486a35fe8d5e7b44bcb817017cfb18cd87349",
  apiKey: "X5BM3w8N7MKozC0B85o4KMlzLZKhV00y",
};

const HomePage = () => {
  const [data, setData] = useState([]);
  const [params, setParams] = useState(initParams);

  const fetchData = useCallback(() => {}, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="home">
      <div className="nhac-thinh-hanh"></div>
    </div>
  );
};

export default HomePage;
