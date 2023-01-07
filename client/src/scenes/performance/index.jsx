import React from "react";

import { Box, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import Header from "components/Header";
// import CustomColumnMenu from "components/DataGridCustomColumnMenu";

import { useGetUserPerformanceQuery } from "state/api";

const Performance = () => {
  const theme = useTheme();
  const userId = useSelector((state) => state.global.userId);
  const { data, isLoading } = useGetUserPerformanceQuery(userId);

  console.log("data performance", data);

  return (
    <Box>
      <h1>Performance</h1>
    </Box>
  );
};

export default Performance;
