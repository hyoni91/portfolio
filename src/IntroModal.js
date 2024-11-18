import { useEffect, useState } from "react"


const IntroModal = ({intro,setIntro,project})=>{

    console.log(project)

    const project1 = {
        name : 'TODO LIST',
        content : '今日のやることや目標を設定して管理できます。また、カレンダーを使ってスケジュール管理や誕生日、記念日などを入れられます。'
    }

    const project2 = {
        name : 'BOOK STORE',
        content : '111'
    }

    const project3 = {
        name : 'リアルタイム病院予約システム',
        content : ''
    }

    const project4 = {
        name : '',
        content : ''
    }

    const project5 = {
        name : '受注システム管理',
        content : ''
    }

    const project6 = {
        name : 'PORTFOLIOサイト',
        content : ''
    }
    useEffect(()=>{
        switch(project){
            case 1 : setIntro(project1)
                break;
            case 2 : setIntro(project2)
                break;
            case 3 : setIntro(project3)
                break;
            case 4 : setIntro(project4)
                break;
            case 5 : setIntro(project5)
                break;
            case 6 : setIntro(project6)
        }
    },[intro])

    return(
        <div>
            {intro.name}
            {intro.content}
        </div>
    )
}

export default IntroModal