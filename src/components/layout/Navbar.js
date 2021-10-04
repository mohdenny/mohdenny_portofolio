import React, { Fragment } from 'react';

const Navbar = () => {
    return (
        <Fragment>
            <div id="navbar-left" className="float-left h-full hidden sm:block">
                <div id="menu" className="grid grid-rows-auto place-content-center h-full w-20 gap-2">
                    <div className="border-4 p-2 grid justify-items-center">
                        <p className="">Home</p>
                    </div>
                    <div className="border-4 p-2 grid justify-items-center">
                        <p className="">Portofolio</p>
                    </div>
                    <div className="border-4 p-2 grid justify-items-center">
                        <p className="">Experience</p>
                    </div>
                </div>
            </div>
            <div id="navbar-right" className="float-right h-full hidden sm:block">
                <div id="menu" className="grid grid-rows-auto place-content-center h-full w-20 gap-2">
                    <div className="border-4 p-2 grid justify-items-center">
                        <p className="">Education</p>
                    </div>
                    <div className="border-4 p-2 grid justify-items-center">
                        <p className="">About</p>
                    </div>
                    <div className="border-4 p-2 grid justify-items-center">
                        <p className="">Contact</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Navbar;