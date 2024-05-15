import React from 'react';
import reactLogo from './assets/react.png';
import JSLogo from './assets/JS.png';
import reduxLogo from './assets/redux.png';
import htmlLogo from './assets/html.png';
import cssLogo from './assets/css.png';
import bootstrapLogo from './assets/bootstrap.png';
import tailwindLogo from './assets/tailwind.png';
import graphqlLogo from './assets/graphql.png';
import mongodbLogo from './assets/mongodb.png';
import nodeLogo from './assets/node.png';
import typescriptLogo from './assets/typescript.png';


const Skills = () => {

    return (
        <section id="skills">
            <div className="my-20">
                <div className='section-container'>
                    <h3 className='underline'>Skills</h3>
                </div>
                <div className="max-w-8xl p-12 flex flex-col items-center flex-wrap justify-between md:justify-center space-y-16 md:flex-row md:space-y-0 md:space-x-12">
                    <div className="flex flex-col items-center space-y-5 md:ml-[48px]">
                        <div className="flex flex-col items-center space-y-5 bg-white p-6 rounded-2xl m-12 duration-200 cursor-pointer hover:-translate-y-1.5 transition-all shadow-red-300 shadow-2xl">
                            <img src={reactLogo} alt="" className="mb-6 h-40 w-800" />
                        </div>
                    </div>
                    <div className="flex flex-col items-center space-y-5">
                        <div className="flex flex-col items-center space-y-5 bg-white p-6 rounded-2xl m-12 duration-200 cursor-pointer hover:-translate-y-1.5 transition-all shadow-red-300 shadow-2xl">
                            <img src={JSLogo} alt="" className="mb-6 h-40 w-800" />
                        </div>
                    </div>
                    <div className="flex flex-col items-center space-y-5">
                        <div className="flex flex-col items-center space-y-5 bg-white p-6 rounded-2xl m-12 duration-200 cursor-pointer hover:-translate-y-1.5 transition-all shadow-red-300 shadow-2xl">
                            <img src={reduxLogo} alt="" className="mb-6 h-40 w-800" />
                        </div>
                    </div>
                    <div className="flex flex-col items-center space-y-5">
                        <div className="flex flex-col items-center space-y-5 bg-white p-6 rounded-2xl m-12 duration-200 cursor-pointer hover:-translate-y-1.5 transition-all shadow-red-300 shadow-2xl">
                            <img src={cssLogo} alt="" className="mb-6 h-40 w-800" />
                        </div>
                    </div>
                    <div className="flex flex-col items-center space-y-5">
                        <div className="flex flex-col items-center space-y-5 bg-white p-6 rounded-2xl m-12 duration-200 cursor-pointer hover:-translate-y-1.5 transition-all shadow-red-300 shadow-2xl">
                            <img src={htmlLogo} alt="" className="mb-6 h-40 w-800" />
                        </div>
                    </div>
                    <div className="flex flex-col items-center space-y-5">
                        <div className="flex flex-col items-center space-y-5 bg-white p-6 rounded-2xl m-12 duration-200 cursor-pointer hover:-translate-y-1.5 transition-all shadow-red-300 shadow-2xl">
                            <img src={bootstrapLogo} alt="" className="mb-6 h-40 w-800" />
                        </div>
                    </div>
                    <div className="flex flex-col items-center space-y-5">
                        <div className="flex flex-col items-center space-y-5 bg-white p-6 rounded-2xl m-12 duration-200 cursor-pointer hover:-translate-y-1.5 transition-all shadow-red-300 shadow-2xl">
                            <img src={tailwindLogo} alt="" className="mb-6 h-40 w-800" />
                        </div>
                    </div>
                    <div className="flex flex-col items-center space-y-5">
                        <div className="flex flex-col items-center space-y-5 bg-white p-6 rounded-2xl m-12 duration-200 cursor-pointer hover:-translate-y-1.5 transition-all shadow-red-300 shadow-2xl">
                            <img src={nodeLogo} alt="" className="mb-6 h-40 w-800" />
                        </div>
                    </div>
                    <div className="flex flex-col items-center space-y-5">
                        <div className="flex flex-col items-center space-y-5 bg-white p-6 rounded-2xl m-12 duration-200 cursor-pointer hover:-translate-y-1.5 transition-all shadow-red-300 shadow-2xl">
                            <img src={mongodbLogo} alt="" className="mb-6 h-40 w-800" />
                        </div>
                    </div>
                    <div className="flex flex-col items-center space-y-5">
                        <div className="flex flex-col items-center space-y-5 bg-white p-6 rounded-2xl m-12 duration-200 cursor-pointer hover:-translate-y-1.5 transition-all shadow-red-300 shadow-2xl">
                            <img src={graphqlLogo} alt="" className="mb-6 h-40 w-800" />
                        </div>
                    </div>
                    <div className="flex flex-col items-center space-y-5">
                        <div className="flex flex-col items-center space-y-5 bg-white p-6 rounded-2xl m-12 duration-200 cursor-pointer hover:-translate-y-1.5 transition-all shadow-red-300 shadow-2xl">
                            <img src={typescriptLogo} alt="" className="mb-6 h-40 w-800" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Skills;