import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import useProfile from "./auth/hooks/useProfile";
const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
