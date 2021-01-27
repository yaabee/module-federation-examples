import LocalButton from "./Button";
import React from "react";
import { postData } from "./index";

const RemoteButton = React.lazy(() => import("app2/Button"));

function checkUpdate() {
  postData("http://0.0.0.0:4545/updateAppFalse", { name: "app1" }).then(
    (data) => {
      if (data["update"]) {
        location.reload();
      }
    }
  );
}
//brauchen ein useeffect, der regelmaessig
//api checkt ob update, wenn ja dann refresh + set update: false
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
      <h2>App 1</h2>
      <LocalButton />
      <React.Suspense fallback="Loading Button">
        <RemoteButton />
      </React.Suspense>
    </div>
  );
};

export default App;
