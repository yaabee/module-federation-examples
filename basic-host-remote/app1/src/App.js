import React from "react";

const RemoteButton = React.lazy(() => import("app2/Button"));
const RemoteTable = React.lazy(() => import("app2/Table"));

const App = () => (
  <div>
    <h1>Basic Host-Remote</h1>
    <h2>App 1</h2>
    <React.Suspense fallback="Loading Button">
      <RemoteButton />
    </React.Suspense>
    <React.Suspense fallback="Loading Table">
      <RemoteTable />
    </React.Suspense>
  </div>
);

export default App;
