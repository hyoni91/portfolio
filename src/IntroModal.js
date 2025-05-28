import { useEffect } from "react"

const IntroModal = ({intro,setIntro,project})=>{

    const project1 = {
        name : 'TODO LIST',
        content : 
        <div>
        本プロジェクトは、簡単なメモや今日のやること、目標などを入力し、管理できます。
        また、カレンダーを使ってスケジュールの登録や記念日又は誕生日の入力も可能です。
        日程がある日はアイコンが表示され、スケジュール管理に容易です。
        完了した目標は「DONE」メニューで確認できます。
        </div>,
        detail : 
                <>
                 <div className="detail">
                 <h6>Technical Skills</h6>
                <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white" />
                <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white" /><br/>
                <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white" />
                <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white" />
                <img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=Github&logoColor=white"/>
            </div>
                </>,
        url : 'https://hyoni91.github.io/TodoList/'
    }

    const project2 = {
        name : 'BOOK STORE',
        content : 
        <>
             <div>
             本プロジェクトは、本をカテゴリ別に分類して確認できます。また、アカウント登録をして、お気に入りの本をカゴに入れることが可能です。
            カゴの詳細ページでは本の情報や数量変更、削除などの機能も実装しております。
            権限がADMINの場合は本の登録、会員情報の確認及び検索機能の操作が可能になります。
            
            </div>
        </>,
        detail : 
            <div className="detail">
                 <h6>Technical Skills</h6>
                <img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=Java&logoColor=white" />
                <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white" />
                <img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=for-the-badge&logo=Spring Boot&logoColor=white" />
                <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white" /><br/>
                <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white" />
                <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white" />
                <img src="https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=MariaDB&logoColor=white" />
                <img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=Github&logoColor=white"/><br/>
                <img src="https://img.shields.io/badge/Amazon AWS-232F3E?style=flat-square&logo=amazonaws&logoColor=white"/>

            </div>
            ,
       url : 'https://www.hyoni.click/'

        
    }

    const project3 = {
        name : '病院予約(team project)',
        content : 
        <div>
            本プロジェクトは、チームで開発したリアルタイム病院予約ページです。
            予約機能はログインしたユーザーのみ利用可能です。
            予約時は本日から過去の日時や3ヶ月先の予約が選択できません。
            診療科目と日付を選択すると、予約可能な時間帯が表示されます。
            さらに、予約案内を希望するユーザーは「予約する」ボタンをクリックし、
            メール入力欄にメールアドレスを入力することで、予約内容がメールで送信されます。
        </div>,
        
        detail :
        <>
        ・ チームリーダー <br/>
        ・ データベース設計 <br/>
        ・ メインページのデザイン <br/>
        ・ リアルタイム予約機能の実装 <br/>
        <div className="detail">
                 <h6>Technical Skills</h6>
                <img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=Java&logoColor=white" />
                <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white" />
                <img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=for-the-badge&logo=Spring Boot&logoColor=white" />
                <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white" /><br/>
                <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white" />
                <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white" />
                <img src="https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=MariaDB&logoColor=white" />
                <img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=Github&logoColor=white"/>
            </div>
        </>,
        url : ''

    }

    const project4 = {
        name : 'リアルタイム温度管理',
        content : 
        <div>
            本プロジェクトは、チームで開発したリアルタイム温度管理のダッシュボードです。
            Raspberry Piを使用して温度を取得し、病院管理者用のダッシュボードを視覚的に実装しました。
            危険温度を超えた場合、アラートが表示され、テーブル内のアイコンの色が変わります。
            平均温度や温度設定の参考用で現在の天気情報も確認できます。
        </div>,
        detail :
        <>
            ・ チームリーダー<br/>
            ・ データベース設計<br/>
            ・ ダッシュボードのデザイン<br/>
            ・ リアルタイム温度グラフ機能の実装<br/>
            ・ 天気APIを使用した機能の実装<br/>
            <div className="detail">
                 <h6>Technical Skills</h6>
                <img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=Java&logoColor=white" />
                <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white" />
                <img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=for-the-badge&logo=Spring Boot&logoColor=white" />
                <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white" /><br/>
                <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white" />
                <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white" />
                <img src="https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=MariaDB&logoColor=white" />
                <img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=Github&logoColor=white"/>
            </div>
        </>,
        url : ''

    }

    const project5 = {
        name : '受注システム管理',
        content : 
        <div>
            本プロジェクトは、チームで開発した医療用品の受注プロセスシステムです。
            取引先（病院側）の番号で注文ができ、注文を完了すると自動で受注番号や詳細が入力されます。
            受注側では取引先の管理を含め、商品登録及び在庫管理、配送まで処理できます。
            受注番号を元に受注状況（待機、配送、キャンセル）を管理できます。
            こちらの状況は取引先側でも確認できます。
        </div>,
        detail :
        <>
            ・チームリーダー<br/>
            ・データベース設計、トリガー作業<br/>
            ・受注側ページのデザイン<br/>
            ・取引先ページ機能実装<br/>
            ・受注ページ機能実装<br/>
            ・在庫ページ機能実装<br/>
            <div className="detail">
                 <h6>Technical Skills</h6>
                <img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=Java&logoColor=white" />
                <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white" />
                <img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=for-the-badge&logo=Spring Boot&logoColor=white" />
                <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white" /><br/>
                <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white" />
                <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white" />
                <img src="https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=MariaDB&logoColor=white" />
                <img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=Github&logoColor=white"/>
            </div>
        </>,
        url : ''

    }
    const project6 = {
        name : 'NEW BOOKSTORE',
        content : 
        <>
        本プロジェクトは、既存のBOOK STOREプロジェクトの新しいバージョンです。
        Next.jsを使用して、サイトのパフォーマンスを向上させ、SEO対策を行いました。
        また、TypeScriptを使用して、コードの品質を向上させました。
        新しい機能として、商品の検索、JWT認証、詳細ページのデザインを追加しました。        
        </>,
        detail : 
        <>
              <div className="detail">
                 <h6>Technical Skills</h6>
                 <img src="https://img.shields.io/badge/Typescript-007acc?style=for-the-badge&logo=Typescript&logoColor=white" />
                 <img src="https://img.shields.io/badge/Nest.js-E0234E?style=for-the-badge&logo=Next.js&logoColor=white" />
                 <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=Vercel&logoColor=white" /><br/>
                 <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=Prisma&logoColor=white" />
                 <img src="https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=MariaDB&logoColor=white" />
                 <img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=Github&logoColor=white" />

            </div>
        </>,
        url : 'https://newbookstore-omega.vercel.app/'

    }

    // const project6 = {
    //     name : 'PORTFOLIOサイト',
    //     content : 
    //     <>
    //     本プロジェクトは、個人開発およびチーム開発の成果をまとめたサイトです。
    //     プロジェクトに使ったツールや内容の確認を含め、
    //     サイトのリンク、動画試演、イメージなどで各プロジェクトを見ることができます。
        
    //     </>,
    //     detail : 
    //     <>
    //           <div className="detail">
    //              <h6>Technical Skills</h6>
    //             <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white" />
    //             <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white" /><br/>
    //             <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white" />
    //             <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white" />
    //             <img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=Github&logoColor=white"/>
    //         </div>
    //     </>,
    //     url : 'https://hyoni91.github.io/portfolio/'

    // }
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
    },[setIntro,project])


    return(
    <>
        <div className="intro-flex">
            <div className="first">
                <h4>
                    <i className="bi bi-archive" /> 
                    <span className="intro-title">
                    {intro.name}
                    </span>
                <hr/>
                </h4>
                <p>{intro.content}</p>

            </div>
            <div className="second">
                <p>{intro.detail}</p>
            </div>
            <div className="link-div">
            <i className="bi bi-link-45deg" />
                {
                    intro.url === ''?
                    <a className="url-null" onClick={()=>{alert('大変申し訳ありませんが、準備中です。')}}>{intro.name}サイト</a>
                    :
                    <a href={intro.url} target='_blank' rel="noopener noreferrer">
                    {intro.name}サイト
                    </a>
                }
               
            </div>
        </div>
    </>
    )
}

export default IntroModal