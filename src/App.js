import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import './App.css';
import './Aboutme.css'
import './Projects.css'
import testimage from './images/testimage.jpg';
import ReactModal from 'react-modal';

const Section = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  background:  ${(props) => props.bgColor ? props.bgColor : null
    // 'linear-gradient(#e66465, #9198e5);'
      
    }
`;

function App() {
  const h1 = useRef();
  const ul = useRef();  
  const [scrollY, setScrollY] = useState(0); // 스크롤 위치 상태

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); 
    };

    window.addEventListener('scroll', handleScroll); 

    return () => {
      window.removeEventListener('scroll', handleScroll); // 컴포넌트 언마운트 시 이벤트 리스너 제거
    };
  }, []); 

  // 스크롤 위치에 따라 글자 나타내기
  useEffect(() => {
    if (scrollY > 100) {
      h1.current.classList.remove('visible')
      ul.current.classList.remove('visible');
    } else {
      h1.current.classList.add('visible');
      ul.current.classList.add('visible');
    }
  }, [scrollY]); 

   //모달창 여부 
   const [modalOpen, setModalOpen] = useState(true)
   //클릭하면 모달창 열고 닫기
   const showModal = () => {
     setModalOpen(!modalOpen)
   }

  return (
    <div className='wrap'>
      <Section >
        <div className="main">
          <div className='main-ul-div'>
              <ul ref={ul}>
                <li>about me</li>
                <li>projects</li>
                <li>contact</li>
              </ul>
            </div>
          <h1 ref={h1}>WELCOME<br />I'M HYONI</h1>    
        </div>
      </Section>

      <Section bgColor='rgb(253, 253, 253, 0.8)' className='pro-section' >
        <div className='pro-div'>
          <h1>ABOUT ME</h1>
        </div>
        <div className='aboutme-flex'>
          <div>
            <img src={testimage}></img>
            <p>KIM HYUNKYUNG</p>
          </div>
          <div>
            <p>여기는 소개</p>
            <p>소개</p>
            <p>소개소개소개</p>
          </div>
        </div>
      </Section>
      <Section className='pro-section'>
        <div className='pro-div'>
          <h1>PROJECTS</h1>
        </div>
        <div className='pro-grid'>
          <div>TODO</div>
          <div>BOOK STORE</div>
          <div>MEDI CLICK1</div>
          <div>MEDI CLICK2</div>
          <div>MEDI CLICK3</div>
          <div>PORTFOLIO</div>
        </div>
      </Section>
      <Section bgColor='rgb(253, 253, 253, 0.8)' className='pro-section'>
        <div className='pro-div'>
          <h1>CONTACT</h1>
        </div>
        <div>

        </div>
      </Section>
      {
        modalOpen?
        <ReactModal
        isOpen={true}
            ariaHideApp={false}
            onRequestClose={() => {setModalOpen(false)}}
            style={{
              overlay: {
                position: 'fixed',
                borderRadius : 10,
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0, 0.6)'
              },
              content: {
                position: 'absolute',
                width: '70vw',
                height: '70vh',
                top: '10%',
                left: '15%',
                right: '30%',
                bottom: '50%',
                border: '1px solid #ccc',
                background: '#fff',
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch',
                borderRadius: '4px',
                outline: 'none',
              }
            }}
            >
              <div className='modal-wrap'>
                <div>
                <i class="bi bi-file-earmark-code"></i>THIS PROJECT 
                </div>
                <div>
                  프로젝트 이미지 영역
                </div>
              </div>

        </ReactModal>
        :
        null
      }
    </div>
  );
}

export default App;
