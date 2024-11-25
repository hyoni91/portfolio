import { useEffect, useState } from "react"

const IntroModal = ({intro,setIntro,project})=>{

    const project1 = {
        name : 'TODO LIST',
        video : '',
        content : '今日のやることや目標を設定して管理できます。また、カレンダーを使ってスケジュール管理や誕生日、記念日などを入れられます。'
    }

    const project2 = {
        name : 'BOOK STORE',
        video : '',
        content : 'BOOK STOREでは、本をカテゴリ別に分類して確認できます。お気に入りの本はカゴに入れられます。MyCartでは数量変更や削除などのもできます。ADMINの場合、本の詳細ページや登録、会員に関連する情報も確認できます。',
        detail : 
            <>
            2024.07.20 ~ 2024.08.20 <br/>
            - データベース作業 <br/>
            - メインページデザイン <br/>
            - 会員登録 / ログイン機能の実装 <br/>
            - カテゴリ別リスト機能の作成 <br/>
            - 書籍の詳細情報機能の実装 <br/>
            - カート機能の実装 <br/>
            - 管理者による書籍登録機能の実装 <br/>
            - 管理者による会員管理機能の実装 <br/>
            </>
        
    }

    const project3 = {
        name : '病院予約',
        video : '/videos/mediclick1.mp4',
        content : '病院のホームページをログインすると予約ができます。診療科と日付を選択するとリアルタイムで予約が可能な時間帯を確認できます。予約ができない場合は該当の時間帯の選択ができず、グレーの色で表示されます。今日と過去の日付は選択できません。もし、アカウントがない場合は会員登録もできます。',
        detail :
        <>
        2024.08.23 ～ 2024.09.06 <br/>
        リーダー/ データベース設計/機能実装とデザイン <br/>

        - データベース作業 <br/>
        - メインページのデザイン <br/>
        - 会員登録 / ログイン機能の実装 <br/>
        - 医療スタッフ / 診療科ページの実装 <br/>
        - 掲示板の作成、編集、削除機能の実装 <br/>
        - リアルタイム予約機能の実装 <br/>
        - 予約状況一覧ページの実装 <br/>
        - 診療状況チャート機能の実装 
        </>
    }

    const project4 = {
        name : '',
        video : '',
        content : '本プロジェクトでは、Raspberry Piを使用してリアルタイムで温度を取得し、病院管理者用のダッシュボードを視覚的に実装しました。危険温度を超えた場合、アラートが表示され、テーブル内のアイコンの色が変わるように設計されています。',
        detail :
        <>
            2024.09.09 ～ 2024.09.27 <br/>
            リーダー/デザイン/機能追加 <br/>
            - データベース作業<br/>
            - Raspberry Piを用いた作業<br/>
            - DB挿入および接続<br/>
            - モニタリングページのデザイン<br/>
            - Reactチャート機能の実装<br/>
            - リアルタイム温度グラフ機能の実装<br/>
            - 天気APIを使用した機能の実装<br/>
            - Kakao Map APIを利用したナビゲーションおよびルート検索機能の実装   
        </>
    }

    const project5 = {
        name : '受注システム管理',
        video : '',
        content : ''
    }

    const project6 = {
        name : 'PORTFOLIOサイト',
        video : '',
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
            default:
        setIntro({ name: 'Unknown Project', content: 'No details available.', video: '' });
        }
    },[setIntro,project])


    return(
    <>
        <div>
            <h4><i class="bi bi-archive"></i>{intro.name}</h4>
            <p>{intro.content}</p>
            <hr/>
            <p><i class="bi bi-calendar-week"></i>{intro.detail}</p>
            
        </div>
        {/* <video className="videoTag" controls autoPlay loop>
             <source src={intro.video} type="video/mp4" />
             このブラウザは動画再生に対応していません。
        </video> */}
    </>
    )
}

export default IntroModal