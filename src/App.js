import styled from 'styled-components';
import { device } from './theme'; // 미디어 쿼리가 저장된 파일을 가져온다고 가정
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Container = styled.div`
   width: 100%;
   height: auto;  /* 높이를 자동으로 설정하여 콘텐츠가 많으면 스크롤 가능 */
   min-height: 100vh;  /* 최소 높이는 100vh로 설정 */
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: #f0f8ff;
`;

const MainDiv = styled.div`
   text-align: center;
   padding: 20px;
   h1 {
      font-size: 4vw;    /* 화면 너비에 비례한 글자 크기 */
      margin-bottom: 20px;
   }

   button {
      padding: 10px 20px;
      font-size: 1.5vw;
      cursor: pointer;
      border: 1px solid black;
      border-radius: 0px;
      background-color: #f0f8ff;
      color: black;
   }

   /* 반응형 조정 */
   @media ${device.tablet} {
      width: 80vw;
      height: auto;
      min-height: 70vh;
      h1 {
         font-size: 5vw;
      }
      button {
         font-size: 2vw;
      }
   }

   @media ${device.mobile} {
      width: 90vw;
      height: auto;
      min-height: 80vh;
      h1 {
         font-size: 6vw;
      }
      button {
         font-size: 3vw;
      }
   }
`;

// 각 페이지를 위한 컴포넌트
function Home() {
   return (
      <Container>
         <MainDiv>
            <h1>
               WELCOME <br />
               I'M HYONI
            </h1>
            <div>
               <Link to="/about">
                  <button>INTRO</button>
               </Link>
            </div>
         </MainDiv>
      </Container>
   );
}

function About() {
   return (
      <Container>
         <MainDiv>
            <h1>About Me</h1>
            <p>This is a little bit about me.</p>
            <Link to="/">Go Home</Link>
         </MainDiv>
      </Container>
   );
}

function App() {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
      </Routes>
   )
}

export default App;
