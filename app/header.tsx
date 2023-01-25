'use client';

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

function Header() {
  const pathname = usePathname();

  return (
    <header className='h-12 relative bg-transparent w-full'>
        <ul className='w-full list-none flex justify-start items-center text-left space-x-20 text-lg ml-20 pt-5 text-white'>
            <li className={pathname === '/' ? 'text-gray-500/75' : ''}>
              <Link href='/'>Home</Link>
            </li>
            <li className={pathname === '/about' ? 'text-gray-500/75' : ''}>
              <Link href='/about'>About</Link>
            </li>
            <li className={pathname === '/skills' ? 'text-gray-500/75' : ''}>
              <Link href='/skills'>Skills</Link>
            </li>
            <li className={pathname === '/portfolios' ? 'text-gray-500/75' : ''}>
              <Link href='/portfolios'>Portfolios</Link>
            </li>
        </ul>
    </header>
  )
}

export default Header