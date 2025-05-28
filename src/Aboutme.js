import { useEffect, useState } from "react";
import "./styles/Aboutme.css";

export default function Aboutme() {
    const [selectedTag, setSelectedTag] = useState(null);


    useEffect(() => {
        const initialTag = "hyoni";
        setSelectedTag(initialTag);
    }, []);
    
    useEffect(()=>{
        
    },[selectedTag])

    const tags = [
        { id: "hyoni", label: "#hyoni", 
            content: 
            <>
                <h3>#Hyoni</h3>
                <h4>フルスタックを目指す</h4>
                <p>こんにちは！キムヒョンギョンです。出身は韓国で現在は沖縄に住んでおります。</p>
                <p>私はパン作り、読書、旅行が好きで、最近はウェブ開発に興味を持ち、学習しています。</p>
                <p>私の目標はフルスタックエンジニアになり、変化の速い時代に適応できるエンジニアになることです。</p>
                <p>技術を駆使して、より良い世界を作り上げることを目指しています。</p>

            </>
        },
        { id: "frontend", label: "#frontend", 
            content: 
            <>
                <h3>#Frontend</h3>
                <h4>ユーザー体験の理解を深めよう</h4>
                <p>React、Next.js、JavaScript、TypeScriptを学び、ウェブアプリケーションの開発に取り組んでいます。</p>
                <p>UI/UX設計にはまだ挑戦の余地があり、今後さらに多くのウェブサイトを見て、デザインやユーザー体験に対する理解を深めたいと思っています。</p>
                <p>フロントエンドに関しては、学んだ技術を実践に活かし、もっと多くの経験を積むことを目指しています。</p>
                <p></p>
            </> },   
        
        { id: "backend", label: "#backend", 
            content:
            <>
                <h3>#Backend</h3>
                <h4>多くの課題を現実へ</h4>
                <p>Java、Spring、MariaDB、Prismaを学び、バックエンド開発の基礎を学んでいます。</p>
                <p>API設計にも興味があり、クリーンで拡張性のあるシステム作りに挑戦したいと考えています。</p>
                <p>将来的にはセキュリティやAIの分野に関する知識も習得し、より高い技術力を身につけていきたいと思っています。</p>
                <p></p>
                <p></p>
            </>
        },
        { id: "Skill", label: "#Skill",
            content:
            <>
                <h3>#Skill</h3>
                <h4>開発知識を深めよう</h4>
                <p><span>Java, JavaScript, TypeScript</span> : REST API 設計、UI/UX 開発</p>
                <p><span>MariaDB, Prisma</span> : データベース設計、API 開発</p>
                <p><span>React, Next.js, Spring Boot</span> : UI/UX 設計、MVC アーキテクチャ</p>
                <p><span>GitHubl</span> : バージョン管理</p>
                <p><span>AWS, Vercel</span> : インフラ構築、ドメイン設定、デプロイ</p>
                <p><span>資格</span> : AWS Certified Cloud Practitioner</p>


            </>
        }
    ];

    return (
        <div className="p-4">
            <div className="tag-container">
            {/* 태그 버튼 */}
                <div className="tag-btns">
                    <div className="myimg-container">
                        <div className="myimg-box"> </div>
                        <img src='/portfolio/images/aboutme.png' alt="aboutme" />
                    </div>
                    <div >
                        {tags.map(tag => (
                            <button 
                            key={tag.id} 
                            onClick={() => setSelectedTag(tag.id)}
                            className={selectedTag === tag.id ? 'active' : ''}
                        >
                            {tag.label}
                        </button>
                        ))}
                        <br/>
                        <button type="button" >
                            <a href="https://github.com/hyoni91" target="_blank">#github</a>
                        </button>
                        <button type="button">
                            <a href="https://zenn.dev/hyoni" target="_blank">#blog</a>
                        </button>
                        <button type="button">
                            <a href="https://x.com/hyoni_green" target="_blank">#X</a>
                        </button>
                        <p className="category">タグを選択してください</p>

                    </div>

                    
                </div>

                {/* 선택된 태그에 따른 내용 표시 */}
                <div className="tag-content">
                {tags.map(tag =>
                        selectedTag === tag.id &&
                        <div key={tag.id} className={`tag-content ${selectedTag === tag.id ? 'active' : ''}`}>
                            {tag.content}
                        </div>
                    )}

                </div>
            </div>
           
        </div>
    );
}
