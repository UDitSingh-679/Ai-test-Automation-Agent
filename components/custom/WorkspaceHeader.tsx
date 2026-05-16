import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function WorkspaceHeader() {
    return (
        <div>
            <div className='flex w-full justify-between p-4'>
                {/* logo */}
                <Image src={'/logo.svg'} alt='logo' width={200} height={300}></Image>

                {/* menu options */}
                <ul className='flex gap-5 text-xl'>
                    <li className='hover:text-green-600 cursor-pointer'>Workspace</li>
                    <li className='hover:text-green-600 cursor-pointer'>Pricing</li>
                    <li className='hover:text-green-600 cursor-pointer'>Support</li>

                </ul>

                {/* User Button*/}

                <UserButton />
            </div>
        </div>
    )
}

export default WorkspaceHeader