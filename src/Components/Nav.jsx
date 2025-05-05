import React from "react";

function Nav() {
    return (
        <nav className="border-2 border-black shadow-lg  bg-black text-white flex ">
            <h1 className="p-3 text-4xl ml-4 flex">Lemonicz</h1>
            <div className="flex justify-center items-center w-3/4">
                <div className="p-3 flex justify-center items-center text-white text-xl space-x-6 ">
                    <ul className="hover:text-sky-300 cursor-pointer">Profile</ul>
                    <ul className="hover:text-sky-300 cursor-pointer">Contact</ul>
                    <ul className="hover:text-sky-300 cursor-pointer">Education</ul>
                    <ul className="hover:text-sky-300 cursor-pointer" ><a href="#Clients">Clients</a></ul>
                </div>
            </div>
        </nav>

    );
}
export default Nav;