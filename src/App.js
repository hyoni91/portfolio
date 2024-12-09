import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import './App.css';
import './Aboutme.css'
import './Projects.css'
import testimage from './images/testimage.jpg';
import ReactModal from 'react-modal';
import IntroModal from './IntroModal';
import { Link } from 'react-router-dom';
import ImageModal from './ImageModal';
// import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


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
  const [intro, setIntro] = useState({
    name : '',
    video : '',
    content : ''
  })
  const [project, setProject] = useState()
  const [images, setImages] = useState([]) //이미지들 

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
      // ul.current.classList.remove('visible');
    } else {
      h1.current.classList.add('visible');
      // ul.current.classList.add('visible');
    }
  }, [scrollY]); 

   //모달창 여부 
   const [modalOpen, setModalOpen] = useState(false)
   //클릭하면 모달창 열고 닫기
   const showModal = () => {
     setModalOpen(!modalOpen)
   }

  return (
    <div className='wrap'>
      <Section >
        <div className="main">
          <div className='main-ul-div'>
              {/* <ul ref={ul}>
                <li>about me</li>
                <li>projects</li>
                <li>contact</li>
              </ul> */}
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
            <h4>KIM HYUNKYUNG</h4>
            <h5>
              <i class="bi bi-github"></i>
              <a href='https://github.com/hyoni91' target='_blank' rel="noopener noreferrer">
                 hyoni's github
              </a>  
            </h5>
            <h5>
              <i class="bi bi-chat-heart"></i>
              <a href='https://zenn.dev/hyoni' target='_blank' rel="noopener noreferrer">
                 hyoni's blog
              </a>
            </h5>
          </div>
          <div className='aboutme-content'>
            <p >　2016年、韓国系企業に入社し、2年間物流業務を担当。<br/>
                その後、日本と韓国の架け橋になる仕事を目指して韓国語講師として活動。<br/>
                2020年に沖縄へ移住後、スーパー運営や韓国語講師、翻訳業務を兼務。<br/>
　              2024年4月からは韓国のプログラミングスクールに通い、<br/>
                基礎知識を習得しながら3つのプロジェクトを無事に完了しました。<br/>
                現在はポートフォリオ作成やブログ執筆を通じて、さらなるスキルアップに取り組んでいます。
            </p>

          </div>
        </div>
      </Section>
      <Section className='pro-section'>
        <div className='pro-div'>
          <h1>PROJECTS</h1>
        </div>
        <div className='pro-grid'>
          <div onClick={()=>{setModalOpen(true); setProject(1) }}>TODO LIST</div>
          <div onClick={()=>{setModalOpen(true); setProject(2)}}>BOOK STORE</div>
          <div onClick={()=>{setModalOpen(true); setProject(3)}}>
            MEDI CLICK1
            <img src='/portfolio/images/medi1.jpg'></img>
          </div>
          <div onClick={()=>{setModalOpen(true); setProject(4)}}>
            MEDI CLICK2
            <img src='/portfolio/images/medi2.jpg'></img>
          </div>
          <div onClick={()=>{setModalOpen(true); setProject(5)}}>
            MEDI CLICK3
            <img src='/portfolio/images/medi3.png'></img>
          </div>
          <div onClick={()=>{setModalOpen(true); setProject(6)}}>PORTFOLIO</div>
        </div>
      </Section>
      <Section bgColor='rgb(253, 253, 253, 0.8)' className='pro-section'>
        <div className='pro-div'>
          <h1>CONTACT</h1>
        </div>
        <div>
          <h4>mail</h4>
          <h4>tel</h4>
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
                width: '87vw',
                height: '77vh',
                top: '10%',
                left: '8%',
                right: '10%',
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
                <IntroModal intro={intro} setIntro={setIntro} project={project}/>
                </div>
                <div>
                <ImageModal images={images} setImages={setImages} project={project}/>
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
