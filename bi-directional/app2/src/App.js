import LocalButton from "./Button";
import React from "react";
import { postData } from "./index";

const RemoteButton = React.lazy(() => import("app1/Button"));

function checkUpdate() {
  postData("http://0.0.0.0:4545/updateAppFalse", { name: "app2" }).then(
    (data) => {
      if (data["update"]) {
        location.reload();
      }
    }
  );
}
const App = () => {
  const [counter, setCounter] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
      checkUpdate();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Bi-Directional</h1>
      <h2>App 2</h2>
      <LocalButton />
      <React.Suspense fallback="Loading Button">
        <RemoteButton />
      </React.Suspense>
    </div>
  );
};

export default App;
