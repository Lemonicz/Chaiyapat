import React from "react";
import Footer from "./Footer";
import images from "../images/Chyp.png";

function Main() {
    return (
        <main className=" flex-1 items-center m-6 ">


            <section id="Profile" className=" bg-white shadow-lg rounded-xl p-4 ">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <p className="text-base  lg:text-xl p-2 border-2 w-full col-span-2">ตรงนี้ควรมีข้อความ</p>
                    <div className="border-2 w-full col-span-1 flex justify-center items-center "
                    >
                        <div name="MyPic" className="flex  w-2/3 border-2 ">
                            <img src="src\images\Chyp.png" alt="MyPic" className="w-full h-auto object-contain rounded-full border-2 border-black" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="Contact" className="border-4 mt-4 border-black bg-white shadow-lg rounded-lg p-4">
                <h1 className="text-xl md:text-2xl lg:text-4xl flex justify-center">Contact</h1>
                <div className="border-2 border-black bg-gray-200 rounded-lg w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto">


                    <ul className="  items-center p-2 ">
                        <li className="flex  items-center gap-x-4 text-xl border-b-2 border-black p-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 ">
                                <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
                            </svg>
                            <p>Chaiypat Inboon</p>
                        </li>

                        <li className="flex items-center gap-x-4 text-xl border-b-2 border-black p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                            </svg>
                            <p>lemonicz53@gmail.com</p>
                        </li>

                        <li className="flex items-center gap-x-4 text-xl border-b-2 border-black p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
                            </svg>
                            <p>080-621-6054</p>
                        </li>

                        <li className="flex items-center gap-x-4 text-xl border-b-2 border-black p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24 " className="size-6">
                                <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
                            </svg>
                            <div><a href="https://www.instagram.com/dongz_chyp/" className="hover:text-blue-600 cursor-pointer">dongz_chyp</a></div>
                        </li>

                        <li className="flex items-center gap-x-3 text-xl border-b-2 border-black p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 32 32" className="size-8 " >
                                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                            </svg>
                            <a href="https://github.com/Lemonicz" alt="GitHub" className="hover:text-blue-600 cursor-pointer" >Lemonicz</a>
                        </li>
                    </ul>
                </div>

            </section>


            <section className="flex justify-center items-center mt-4 border-4 border-black rounded-lg" id="Clients">
                <div className="">
                    <img src="https://cdn.discordapp.com/attachments/842442154977656833/1368974737379819560/IMG_1485.png?ex=681a2c93&is=6818db13&hm=919846acd34c2a0d04c543d7c1f5312840bbf426e716ccc26dcffae138d61bc3&" alt="logo" className="h-64" />
                </div>
            </section>

            <section id="test">
                <div className="grid grid-cols-1  md:grid-cols-2 gap-4 p-4">
                    

                    <div className="bg-white p-4 shadow rounded">Content 2</div>
                    <div className="bg-white p-4 shadow rounded">Content 3</div>
                    <div className="bg-white p-4 shadow rounded">Content 4</div>
                    <div className="bg-white p-4 shadow rounded">Content 5</div>
                    <div className="bg-white p-4 shadow rounded">Content 6</div>
                    <div className="bg-white p-4 shadow rounded">Content 7</div>
                    <div className="bg-white p-4 shadow rounded">Content 8</div>
                </div>

            </section>

        </main>

    );
}
export default Main;