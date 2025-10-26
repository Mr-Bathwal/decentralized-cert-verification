'use client'

import { FiLoader } from 'react-icons/fi'

export default function LoadingSpinner({ size = 'md', text = 'Loading...' }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  }

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <FiLoader className={`${sizeClasses[size]} animate-spin text-primary`} />
      {text && <p className="mt-4 text-gray-600">{text}</p>}
    </div>
  )
}
