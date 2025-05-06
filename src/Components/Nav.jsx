import React from "react";

function Nav() {
    return (
        <nav className="border-2 border-black shadow-lg  bg-black text-white flex ">
            <h1 className="p-3 text-4xl ml-4 flex">Lemonicz</h1>
            <div className="flex justify-center items-center w-3/4">
                <div className="p-3 flex justify-center items-center text-white text-xl space-x-6 ">
                    <ul className="hover:text-sky-300 cursor-pointer" title="Profile"><a href="Profile">Profile</a></ul>
                    <ul className="hover:text-sky-300 cursor-pointer" title="Contact"><a href="Contact">Contact</a></ul>
                    <ul className="hover:text-sky-300 cursor-pointer" title="Education"><a href="Education">Education</a></ul>
                    <ul className="hover:text-sky-300 cursor-pointer" title="Clients"><a href="#Clients">Clients</a></ul>
                </div>
            </div>
        </nav>

    );
}
export default Nav;