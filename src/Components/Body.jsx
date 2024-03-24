import React from 'react'
import Header from "../Components/Header";
import ArticleSlider from "../Components/BodyComponents/Read";

export default function MainBody() {
    return (
        <div className='w-full h-screen bg-white'>
            <header className="bg-white">
                <div >
                <Header/>
                </div>
            </header>
            <main className="w-full h-screen bg-white">             
                 <div className=" border-2 border-yellow-400 h-80 w-8/12 mt-10 ml-72 mb-11">
                    <div className="h-80 w-auto">
                        <div className="h-80 w-auto"><ArticleSlider/></div>
                    </div>
                 </div>
            </main>
            </div>      
    );
}