import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './Projects.css';

const ImageModal = ({images,setImages,project, video, setVideo})=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: true,
      };

    const [videos, setVideos] = useState(null)        
  
    useEffect(()=>{
    console.log(project)

    switch(project){
        case 1 : setVideos('/portfolio/videos/bookstore.mp4')
        break;
        case 2 : setVideos('/portfolio/videos/bookstore.mp4')
        break;
        case 3 : setVideos('/portfolio/videos/mediclick1.mp4')
        break;
        case 4 : setVideos('/portfolio/videos/medi2.mp4')
        break;
        case 5 : setVideos('/portfolio/videos/medi3.mp4')
        break;
        case 6 : setVideos('/portfolio/videos/bookstore.mp4')
    }
    },[setVideos, project, setVideo])
    
      console.log('Current video path:', videos);


      useEffect(()=>{
        switch(project){
            case 1 : setImages(
                [
                    '/portfolio/images/bookshop1.jpg', 
                    '/portfolio/images/bookshop2.jpg',
                    '/portfolio/images/bookshop3.jpg',
                    '/portfolio/images/bookshop4.jpg',
                    '/portfolio/images/bookshop5.jpg',
                    '/portfolio/images/bookshop6.jpg'
                ]
            )
            
                break;
            case 2 : setImages(
                [
                   '/portfolio/images/bookshop1.jpg',
                    '/portfolio/images/bookshop2.jpg',
                    '/portfolio/images/bookshop3.jpg',
                    '/portfolio/images/bookshop4.jpg',
                    '/portfolio/images/bookshop5.jpg',
                    '/portfolio/images/bookshop6.jpg'
                ]
            )
                break;
            case 3 :  setImages(
                [
                    '/portfolio/images/yoyaku1.jpg', 
                    '/portfolio/images/yoyaku2.jpg',
                    '/portfolio/images/yoyaku3.jpg',
                    '/portfolio/images/yoyaku4.jpg'
                ]
            )

                break;
            case 4 :  setImages(
                [
                    '/portfolio/images/ras1.jpg', 
                    '/portfolio/images/ras2.jpg',
                    '/portfolio/images/ras3.jpg',
                    '/portfolio/images/ras4.jpg',
                    '/portfolio/images/ras5.jpg',
                ]
            )
                break;
            case 5 :  setImages(
                [
                    '/portfolio/images/jyucyuu1.jpg', 
                    '/portfolio/images/jyucyuu2.jpg',
                    '/portfolio/images/jyucyuu3.jpg',
                    '/portfolio/images/jyucyuu4.jpg',
                    '/portfolio/images/jyucyuu5.jpg',
                    '/portfolio/images/jyucyuu6.jpg',
                    '/portfolio/images/jyucyuu7.jpg'
                ]
            )
                break;
            case 6 : setImages(
                [
                    '/portfolio/images/bookshop1.jpg', 
                    '/portfolio/images/bookshop2.jpg',
                    '/portfolio/images/bookshop3.jpg',
                    '/portfolio/images/bookshop4.jpg',
                    '/portfolio/images/bookshop5.jpg',
                    '/portfolio/images/bookshop6.jpg'
                ]
            )
            
        }
    },[setImages,project])


    return(
        <div className="image-grid">
            {
                video?
                <>
                    <p><span onClick={(e)=>{setVideo(false)}}><i className="bi bi-image"></i> 画面に戻る</span></p>
                    <video className="videoTag" controls autoPlay loop>
                    <source src={videos} type='video' />
                    このブラウザは動画再生に対応していません。
                    </video>

                </>
                :
                <>
                    <p><span onClick={(e)=>{setVideo(true)}}><i className="bi bi-camera-reels"></i> 動画試演</span></p>

                    <Slider {...settings}>
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