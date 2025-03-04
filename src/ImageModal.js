import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import './Projects.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const ImageModal = ({images,setImages,project, video, setVideo})=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 3000, 
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: false,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        cssEase: 'ease-in-out', 
      };
      
      
      

    const [videos, setVideos] = useState('')        
  
    useEffect(()=>{
    console.log(project)

    switch(project){
        case 1 : setVideos('/portfolio/videos/todo.mp4')
        break;
        case 2 : setVideos('/portfolio/videos/bookstore.mp4')
        break;
        case 3 : setVideos('/portfolio/videos/mediclick1.mp4')
        break;
        case 4 : setVideos('/portfolio/videos/medi2.mp4')
        break;
        case 5 : setVideos('/portfolio/videos/medi3.mp4')
        break;
        // case 6 : setVideos('/portfolio/videos/prt.mp4')
        case 6 : setVideos('') //newbook
    }
    },[setVideos, project, setVideo])
    

      useEffect(()=>{
        switch(project){
            case 1 : setImages(
                [
                    '/portfolio/images/todo1.png', 
                    '/portfolio/images/todo2.png',
                    '/portfolio/images/todo3.png',
                    '/portfolio/images/todo4.png'
                ]
            )
            
                break;
            case 2 : setImages(
                [
                    '/portfolio/images/book1.png',
                   '/portfolio/images/book2.png',
                   '/portfolio/images/book3.png',
                   '/portfolio/images/book4.png',
                   '/portfolio/images/book5.png',
                   '/portfolio/images/book6.png',
                   '/portfolio/images/book7.png',
                   '/portfolio/images/book8.png',
                ]
            )
                break;
            case 3 :  setImages(
                [
                    '/portfolio/images/yoyaku1.png', 
                    '/portfolio/images/yoyaku2.png',
                    '/portfolio/images/yoyaku3.png',
                    '/portfolio/images/yoyaku4.png'
                ]
            )

                break;
            case 4 :  setImages(
                [
                    '/portfolio/images/ras1.png', 
                    '/portfolio/images/ras2.png'
                ]
            )
                break;
            case 5 :  setImages(
                [
                    '/portfolio/images/jyucyuu1.png', 
                    '/portfolio/images/jyucyuu2.png',
                    '/portfolio/images/jyucyuu3.png',
                    '/portfolio/images/jyucyuu4.png',
                    '/portfolio/images/jyucyuu5.png'
                ]
            )
                break;
            // case 6 : setImages(
            //     [
            //         '/portfolio/images/pof1.png', 
            //         '/portfolio/images/pof2.png',
            //         '/portfolio/images/pof3.png',
            //         '/portfolio/images/pof4.png'
            //     ]
            // )
            case 6 : setImages(
                //newbook
                [
                    '/portfolio/images/pof1.png', 
                    '/portfolio/images/pof2.png',
                    '/portfolio/images/pof3.png',
                    '/portfolio/images/pof4.png'
                ]
            )
            
        }
    },[setImages,project])


    return(
        <div className="image-grid">
            {
                video?
                <>
                    <p className='project-sien'>
                        <i className="bi bi-image" />  
                        <span onClick={(e)=>{setVideo(false)}}> 
                            画面に戻る
                        </span>
                    </p>
                    <video className="videoTag" controls autoPlay loop>
                    {videos ? (
                        <source src={videos} type="video/mp4" />
                    ) : (
                        <p>...</p>
                    )}
                    このブラウザは動画再生に対応していません。
                    </video>
                </>
                :
                <>
                    <p className='project-sien'>
                        <i className="bi bi-camera-reels" />   
                        <span onClick={(e)=>{setVideo(true)}}> 
                             動画試演
                        </span>
                    </p>

                    <Slider className='slider' {...settings}>
                        {
                            images.map((img,i)=>{
                                return(
                                    <div className="sliderimg" key={i}>
                                    <img src={img} alt={`project-${project}-image-${i}`} />
                                </div>
                                )
                            })
                        }
                    </Slider>
                </>
            }
  
  
        </div>
    )
}

export default ImageModal;