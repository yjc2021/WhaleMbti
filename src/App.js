import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import styled from "styled-components";
import Router from "./routes/Router";

function App() {
  return (
    <RecoilRoot>
      <DivWrapper className="h-full w-full ">
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </DivWrapper>
    </RecoilRoot>
  );
}

export default App;

const DivWrapper = styled.div`
  font-family: "Do Hyeon", sans-serif;
`;
