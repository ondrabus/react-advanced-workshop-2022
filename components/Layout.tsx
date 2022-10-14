import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import { useState } from "react"

interface IProps {
    children: React.ReactNode
}

const Layout: React.FC<IProps> = ({ children }) => {
    const [showMenu, setShowMenu] = useState(false)

    return (<>
        <div className="h-24 z-50 relative container mx-auto px-6 grid grid-cols-3">
            <div className="flex items-center">

                {/* menu button */}
                <button onClick={() => setShowMenu(true)}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>

                {showMenu && <div className="fixed inset-0 w-full h-full bg-white z-50 text-yellow-900">
                    <div className="container h-full mx-auto px-6 py-8 relative z-10 flex flex-col items-center justify-center text-2xl uppercase font-bold tracking-widest space-y-6">
                        <button onClick={() => setShowMenu(false)} className="absolute top-0 left-0 mt-8 ml-6">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </button>
                        <Link href="/">
                            <a className="inline-block border-b-4 border-transparent hover:border-yellow-900">Home</a>
                        </Link>
                        <Link href="/conference">
                            <a className="inline-block border-b-4 border-transparent hover:border-yellow-900">Conferences</a>
                        </Link>
                        <Link href="/contact">
                            <a className="inline-block border-b-4 border-transparent hover:border-yellow-900">Contact</a>
                        </Link>
                    </div>
                    <div className="absolute inset-0 w-full h-full bg-yellow-900 bg-opacity-20"></div>
                </div>}
            </div>

            <div className="flex items-center justify-center">
                <Link href="/">
                    <a className="text-white uppercase font-bold text-2xl tracking-widest">
                    Kontent.ai live events
                    </a>
                </Link>
            </div>

            <div className="flex items-center justify-end">
                {/* contact button */}
                <Link href="/contact">
                    <a>
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </a>
                </Link>
            </div>
        </div>

        <div className="w-full h-24 bg-yellow-900 bg-opacity-95 absolute top-0 left-0"></div>

        {children}

        <div className="bg-gray-900 text-white text-opacity-40 font-semibold uppercase text-xs tracking-widest bg-opacity-80 px-12">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12 text-center lg:text-left py-24">
                <div>
                    <div className="text-white opacity-50 text-4xl font-display">Kontent.ai</div>				
                </div>
                <div>
                    <div className="font-display text-white uppercase text-sm tracking-widest mb-6">More info</div>
                    <Link href="/"><a className="block mb-4">Home</a></Link>
                    <Link href="/conference"><a className="block mb-4">Conferences</a></Link>
                    <Link href="/contact"><a className="block mb-4">Contact</a></Link>
                </div>
            </div>
            <div className="text-sm lg:text-base text-center font-heading font-light tracking-widest uppercase text-white opacity-75 pb-24">
                &copy; 2022 Kontent.ai
            </div>
        </div>
    </>)
}
export default Layout