import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const IntroModal = ({intro,setIntro,project})=>{

    const project1 = {
        name : 'TODO LIST',
        content : 
        <>
        <h6><i className="bi bi-person-circle" /> 個人プロジェクト</h6>
        <p>
        今日のやることや目標をsessionStorageに入れて管理できます。
        また、カレンダーを使ってスケジュールや誕生日、記念日なども入れられます。
        日程がある日はアイコンが表示されるます。
        本プロジェクトはカレンダーとsessionStorage,checkboxの理解を深めるために作成しました。
        </p>

        </>,
        detail : 
                <>
                {/* 2024.11.6~2024.11.10<br/> */}
                <br/>
                {/* - レイアウト設計<br/>
                - 機能実装<br/>
                - デザイン<br/>
                - 機能テスト */}
                </>,
        url : 'https://hyoni91.github.io/TodoList/'
    }

    const project2 = {
        name : 'BOOK STORE',
        content : 
        <>
        <i className="bi bi-person-circle" /> 個人プロジェクト<br/>

        BOOK STOREでは、本をカテゴリ別に分類して確認できます。
        お気に入りの本はカゴに入れてカゴの詳細ページで数量変更や削除などのもできます。
        ADMINの場合、本の詳細ページや登録、会員に関連する情報も確認できます。
        本プロジェクトはサーバーとフロント、両方の機能を使って作成しました。
        </>,
        detail : 
            <>

            {/* 2024.07.20 ~ 2024.08.20 <br/> */}
            {/* <br/>
            - データベース作業 <br/>
            - メインページデザイン <br/>
            - 会員登録 / ログイン機能の実装 <br/>
            - カテゴリ別リスト機能の作成 <br/>
            - 書籍の詳細情報機能の実装 <br/>
            - カート機能の実装 <br/>
            - 管理者による書籍登録機能の実装 <br/>
            - 管理者による会員管理機能の実装 <br/> */}
            </>,
       url : ''

        
    }

    const project3 = {
        name : '病院予約',
        content : '病院のホームページをログインすると予約ができます。診療科と日付を選択するとリアルタイムで予約が可能な時間帯を確認できます。予約ができない場合は該当の時間帯の選択ができず、グレーの色で表示されます。今日と過去の日付は選択できません。もし、アカウントがない場合は会員登録もできます。',
        detail :
        <>
        {/* 2024.08.23 ～ 2024.09.06 <br/> */}
        <i className="bi bi-person-circle"></i> リーダー/DB設計/メイン機能＆デザイン <br/>
        <br/>
        - データベース作業 <br/>
        - メインページのデザイン <br/>
        - 会員登録 / ログイン機能の実装 <br/>
        - 医療スタッフ / 診療科ページの実装 <br/>メイン
        - 掲示板の作成、編集、削除機能の実装 <br/>
        - リアルタイム予約機能の実装 <br/>
        - 予約状況一覧ページの実装 <br/>
        - 診療状況チャート機能の実装 
        </>,
        url : ''

    }

    const project4 = {
        name : 'リアルタイム温度管理',
        content : 'Raspberry Piを使用してリアルタイムで温度を取得し、病院管理者用のダッシュボードを視覚的に実装しました。危険温度を超えた場合、アラートが表示され、テーブル内のアイコンの色が変わるように設計されています。',
        detail :
        <>
            {/* 2024.09.09 ～ 2024.09.27 <br/> */}
            <i className="bi bi-person-circle"></i> リーダー/デザイン/機能追加 <br/>
            <br/>
            - データベース作業<br/>
            - Raspberry Piを用いた作業<br/>
            - DB挿入および接続<br/>
            - モニタリングページのデザイン<br/>
            - Reactチャート機能の実装<br/>
            - リアルタイム温度グラフ機能の実装<br/>
            - 天気APIを使用した機能の実装<br/>
        </>,
        url : ''

    }

    const project5 = {
        name : '受注システム管理',
        content : '病院側（取引先）からの注文を受けた後、受注状況を管理し、在庫および配送まで処理できるように実装しました。',
        detail :
        <>
             {/* 2024年9月30日～2024年10月23日 <br/> */}
            <i className="bi bi-person-circle"></i> リーダー/DB設計/取引先&受注管理＆在庫管理ページ<br/>
            <br/>
            - データベース作業<br/>
            - 受注・発注ページのデザイン<br/>
            - アイテム登録機能の実装<br/>
            - 取引先管理状況機能の実装<br/>
            - 受注・発注機能の実装<br/>
            - DBのトリガー作業<br/>
            - 現在の在庫状況機能の実装<br/>
            - 配送状況機能の実装<br/>
        </>,
        url : ''

    }

    const project6 = {
        name : 'PORTFOLIOサイト',
        content : 
        <>
        <i className="bi bi-person-circle" /> 個人プロジェクト<br/>
        今まで取り組んだプロジェクトをまとめたサイトです。こちらでは、プロジェクトの内容と機能の説明、動画試演などを確認できます。
        </>,
        detail : 
        <>
         {/* 2024.11.20～進行中 <br/><br/> */}
            {/* - レイアウト設計<br/>
            - CSS作業<br/>
            - イメージや動画作成<br/> 
            - メール送る機能実装<br/>  */}
        </>,
        url : 'https://hyoni91.github.io/portfolio/'

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
    },[setIntro,project])


    return(
    <>
        <div className="intro-flex">
            <div>
                <h4>
                    <i className="bi bi-archive" /> 
                    <span className="intro-title">
                    {intro.name}
                    </span>
                <hr/>
                </h4>
                <p>{intro.content}</p>

            </div>
            <div>
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