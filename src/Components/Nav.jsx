import React from "react";

function Nav() {
    return (
        <nav className="border-2 border-black shadow-lg  bg-black text-white ">
            <div className="flex items-center justify-between px-8 py-3 ">
                <h1 className="text-3xl ">Lemonicz</h1>

                <div className="md:hidden">
                    <button className=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="flex item-center size-7 mt-2">
                        <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
                    </svg>
                    </button>
                </div>

                <div className="flex  w-full hidden md:block ">
                    <div className=" flex text-white text-xl space-x-8   w-full  justify-end p-2 ">
                        <ul className="hover:underline hover:text-sky-300 cursor-pointer" title="Profile"><a href="Profile">Profile</a></ul>
                        <ul className="hover:underline hover:text-sky-300 cursor-pointer" title="Contact"><a href="Contact">Contact</a></ul>
                        <ul className="hover:underline hover:text-sky-300 cursor-pointer" title="Education"><a href="Education">Education</a></ul>
                        <ul className="hover:underline hover:text-sky-300 cursor-pointer" title="Clients"><a href="#Clients">Clients</a></ul>
                    </div>
                </div>
            </div>
        </nav>

    );
}
export default Nav;