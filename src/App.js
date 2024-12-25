import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import './App.css';
import './Aboutme.css'
import './Projects.css'
import aboutme from './images/aboutme.jpg';
import ReactModal from 'react-modal';
import IntroModal from './IntroModal';
import { Link } from 'react-router-dom';
import ImageModal from './ImageModal';
// import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import emailjs from '@emailjs/browser';



const Section = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  background:  ${(props) => props.bgColor ? props.bgColor : null      
    }
`;

function App() {
  // email
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_08qlxca', 'template_4io7fxn', form.current, {
        publicKey: process.env.REACT_APP_JS_KEY
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('メッセージを送りました☺️');
          window.location.reload();
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
  };


  const h1 = useRef();
  const ul = useRef();  
  const [scrollY, setScrollY] = useState(0); // 스크롤 위치 상태
  const [intro, setIntro] = useState({ })
  const [project, setProject] = useState()
  const [images, setImages] = useState([]) //이미지들 
  const [video, setVideo] = useState(false)

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
      {/* Fixed Navigation Bar */}
      <nav className="fixed-navbar">
        <ul>
          <li><a href="#main">HOME</a></li>
          <li><a href="#about">ABOUT ME</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#contact">CONTACT ME</a></li>
        </ul>
      </nav>
      <Section id='main'>
        <div className="main">
          <h1 ref={h1}>WELCOME<br />I'M HYONI</h1>    
        </div>
      </Section>

      <Section id='about' bgColor='rgb(255, 255, 255, 1)' className='pro-section' >
        <div className='pro-div'>
          <h1>ABOUT ME</h1>
        </div>
        <div className='aboutme-content'>
          <div className='aboutme-left'>
            <div>
              <img className='myimg' src={aboutme}></img>
              {/* <div id='name1'>#KIM HYUNKYUNG</div>  */}
              {/* <div id='name2'>#1991.02.03</div>             */}
            </div>
              <div className='whoami'>
                <h3>Who am I</h3>
                <div>
                  エンジニアとして第一歩踏み出したばかりのキムヒョンギョンです。
                  こちらのサイトでは、ユーザー様が使いやすいウェブサイトを作るために
                  色々工夫して作り上げたプロジェクトを紹介ております。
                  まだまだな技術ですが、どうか優しい目でご覧ください☺️
                </div>
                <div>
                  <a href='https://github.com/hyoni91' target='_blank' rel="noopener noreferrer">
                  <i className="bi bi-github"></i>
                  </a>  
                  <a href='https://zenn.dev/hyoni' target='_blank' rel="noopener noreferrer">
                  <i className="bi bi-chat-heart"></i>
                </a>
                </div>
         
              </div>
            </div>  
          <div className='aboutme-rigth'>
            <div>  
              <h3>Learning Journey</h3>
              <div className='learn'>
                  スクール名:グリーンアカデミー（韓国）<br/>
                  課程:スマートヘルスケアWebサービス開発(6ヶ月)<br/>
                  【学習内容】<br/>
                  - HTML、CSS、JavaScriptの基礎およびWeb画面の実装<br/>
                  - Javaプログラミングの基礎と実践<br/>
                  - MariaDBを用いたSQLデータベースの基礎知識<br/>
                  - Spring MVCを基盤としたWebプログラミングの実践<br/>
                  - Pythonの基礎 <br/>
              </div>         
            </div>
            <div>
              <h3>Technical Skills</h3>
              <div className='skills'>
                <h5>Backend Development</h5>
                <img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=Java&logoColor=white" />
                <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white" />
                <img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=for-the-badge&logo=Spring Boot&logoColor=white" />
                <h5>Frontend Development</h5>
                <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white" />
                <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white" />
                <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white" />
                <h5>Database Management</h5>
                <img src="https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=MariaDB&logoColor=white" />
                <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white" />
                <h5></h5>
                <h5>Version Control & Deployment</h5>
                <img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=Github&logoColor=white"/>
               </div>
            </div>
          </div>
        </div>
      </Section>
      <Section id='projects' className='pro-section'>
        <div className='pro-div'>
          <h1>PROJECTS</h1>
        </div>
        <div className='pro-grid'>
          <div onClick={()=>{setModalOpen(true); setProject(1) }}>
            TODO LIST
            <img src='/portfolio/images/todo.png'></img>
          </div>
          <div onClick={()=>{setModalOpen(true); setProject(2)}}>
            BOOK STORE
            <img src='/portfolio/images/bookmain.jpg'></img>
          </div>
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
          <div onClick={()=>{setModalOpen(true); setProject(6)}}>
            PORTFOLIO
            <img src='/portfolio/images/port.png'></img>
          </div>
        </div>
      </Section>
      <Section id='contact' bgColor='rgb(255, 255, 255, 1)' className='pro-section'>
        <div className='pro-div'>
          <h1>CONTACT ME</h1>
        </div>
        <div>
          <h2>Thank you for watching!</h2>
          <div className='contact-content'>
          ポートフォリオをご覧いただき、ありがとうございます。<br/>
          新しい環境で学び続け、さらなるスキルアップを目指しています。<br/>
          どうぞよろしくお願いします。
          </div>
          <form ref={form} onSubmit={sendEmail} className='mail-content'>
             <label>NAME</label> <br/>
             <input type="text" name="name" /><br/> 
             <label>EMAIL</label><br/>
             <input type="email" name="email" /><br/>
             <label>MESSAGE</label><br/>
             <textarea name="message" /><br/>
             <input className='mail-btn' type="submit" value="SEND" />     
           </form>
        </div>
      </Section>
      {
        modalOpen?
        <ReactModal
        isOpen={true}
            ariaHideApp={false}
            onRequestClose={() => {setModalOpen(false); setVideo(false)}}
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
                <ImageModal images={images} setImages={setImages} project={project} video={video} setVideo={setVideo}/>
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
