import React from 'react';

export default function AccountLayout({children}) {
  return (
    <div>
       <h1 className='text-green-500'>Account Layout</h1>
        {children}
    </div>
  );
}