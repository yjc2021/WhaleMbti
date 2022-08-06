import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Router from "./routes/Router";

function App() {
  return (
    <RecoilRoot>
      <div className="bg-gray-300 h-screen ">
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </div>
    </RecoilRoot>
  );
}

export default App;
