// page.tsx
"use client";

import * as React from "react";
import { DataTableDemo } from "./components/DataTableDemo"; // Ensure the correct import path

const MyVideosPage: React.FC = () => {
  return (
    <div>
      <h1>My Videos</h1>
      <DataTableDemo />
    </div>
  );
};

export default MyVideosPage;
