import './Projects.css'

const ImageModal = ({intro,setIntro,project})=>{

    const project1 = {
        video : '/videos/mediclick1.mp4',
        image1 :'./images/bookshop1.jpg',
    }

    return(
        <div className="image-grid">
        {/* <video className="videoTag" controls autoPlay loop>
             <source src={intro.video} type="video/mp4" />
             このブラウザは動画再生に対応していません。
        </video> */}
        <img src='./images/bookshop1.jpg'/>
        <img src={project1.image1}/>
        </div>
    )
}

export default ImageModal;