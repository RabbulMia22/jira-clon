import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

function Logo({className}: {className?: string}): React.JSX.Element {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <h2 className={cn("text-2xl text-[#006400]  font-black tracking-wider uppercase hover:text-[#3b9c3c]", className)}>
        Shopcar<span></span>
      </h2>
    </Link>
  )
}

export default Logo