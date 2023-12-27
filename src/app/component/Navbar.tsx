import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar bg-transparent px-10">
            <div className="flex-1">
                <Link href="/">

                    <img src="/logo.png" className='w-14' alt="" />
                </Link>
            </div>
            <div className="flex-none">
                <button className="btn text-white btn-ghost">
                    <Link href="/watchlists">Watchlists</Link>
                </button>
                <button className="btn text-white btn-ghost">
                    <Link href="/create">Create List</Link>
                </button>
                <UserButton afterSignOutUrl="/" />
            </div>
        </div>
    )
}

export default Navbar