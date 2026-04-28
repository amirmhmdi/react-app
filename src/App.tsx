import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";




function App()
{
  let [showAlert, setShowAlert] = useState(false);
  const onClickButton = () => setShowAlert(true);
  const onDismiss = () => setShowAlert(false);

  return <div>
    {showAlert && <Alert onClick={onDismiss}>Alert</Alert>}
    <Button color="primary" onClick={onClickButton}> Omid</Button>
  </div>;
}

export default App;