/**
This page invokes an async Tauri function, which returns a Promise.
The goal is to demonstrate how to handle data promises, with loaders, Suspend, and Await
*/
import { Suspense } from "react";
import { useLoaderData, Await, defer } from "react-router-dom";
import { invoke } from "@tauri-apps/api/core";

import { Box, Link, Typography, Skeleton } from "@mui/material";

/**
Page data loader
This function returns a Promise via DeferredData.  This enables the use of Suspend within the component
*/
export const promiseLoader = async () => {
  let dataPromise = invoke("promise");
  console.log("promiseLoader returned");
  return defer({ data: dataPromise });
};

const Fallback = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Skeleton width={150} />
    </Box>
  );
};

const Resolved = ({ data }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Typography>{data}</Typography>
    </Box>
  );
};

export default function Promise() {
  const dataPromise = useLoaderData(); // DeferredData returns an object with Promises
  console.log("Made it to Promise");

  // Demonstrate a typical pattern with a "fallback" and "resolved" path
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Suspense fallback={<Fallback />}>
        <Await resolve={dataPromise.data} errorElement={<p>Error loading the data!</p>}>
          {(data) => <Resolved data={data} />}
        </Await>
      </Suspense>
      <Link href="/">Go home</Link>
    </Box>
  );
}
