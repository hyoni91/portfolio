import './Projects.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useEffect, useState } from 'react';

const ImageModal = ({images,setImages,project})=>{

    const [videos,setVideos] = useState(false)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: true,
      };
    
      useEffect(()=>{
        switch(project){
            case 1 : setImages(
                [
                    './images/bookshop1.jpg',
                    './images/bookshop2.jpg',
                    './images/bookshop3.jpg',
                    './images/bookshop4.jpg',
                    './images/bookshop5.jpg',
                    './images/bookshop6.jpg'
                ]
            )
                break;
            case 2 : setImages(
                [
                    './images/bookshop1.jpg',
                    './images/bookshop2.jpg',
                    './images/bookshop3.jpg',
                    './images/bookshop4.jpg',
                    './images/bookshop5.jpg',
                    './images/bookshop6.jpg'
                ]
            )
                break;
            case 3 :  setImages(
                [
                    './images/yoyaku1.jpg',
                    './images/yoyaku2.jpg',
                    './images/yoyaku3.jpg',
                    './images/yoyaku4.jpg'
                ]
            )

                break;
            case 4 :  setImages(
                [
                    './images/bookshop1.jpg',
                    './images/bookshop2.jpg',
                    './images/bookshop3.jpg',
                    './images/bookshop4.jpg',
                    './images/bookshop5.jpg',
                    './images/bookshop6.jpg'
                ]
            )
                break;
            case 5 :  setImages(
                [
                    './images/bookshop1.jpg',
                    './images/bookshop2.jpg',
                    './images/bookshop3.jpg',
                    './images/bookshop4.jpg',
                    './images/bookshop5.jpg',
                    './images/bookshop6.jpg'
                ]
            )
                break;
            case 6 : setImages(
                [
                    './images/bookshop1.jpg',
                    './images/bookshop2.jpg',
                    './images/bookshop3.jpg',
                    './images/bookshop4.jpg',
                    './images/bookshop5.jpg',
                    './images/bookshop6.jpg'
                ]
            )
            
        }
    },[setImages,project])


    return(
        <div className="image-grid">
            {
                videos? 
                <video className="videoTag" controls autoPlay loop>
                {/* <source src={intro.video} type="video/mp4" /> */}
                このブラウザは動画再生に対応していません。
                </video>
                :
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
            }
  
  
        </div>
    )
}

export default ImageModal;