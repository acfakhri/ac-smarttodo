import clsx from 'clsx'
import React from "react";

interface ToggleIconProps {
  isShow: boolean
}

const ToggleIcon = ({ isShow }: ToggleIconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={clsx(
        isShow ? 'rotate-0' : '-rotate-90',
        'h-4 w-4 transition-all',
      )}
      viewBox='0 0 512 512'
    >
      <path
        className='fill-white'
        d='M256 464a208 208 0 1 1 0-416 208 208 0 1 1 0 416zM256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM376.9 294.6c4.5-4.2 7.1-10.1 7.1-16.3c0-12.3-10-22.3-22.3-22.3H304V160c0-17.7-14.3-32-32-32l-32 0c-17.7 0-32 14.3-32 32v96H150.3C138 256 128 266 128 278.3c0 6.2 2.6 12.1 7.1 16.3l107.1 99.9c3.8 3.5 8.7 5.5 13.8 5.5s10.1-2 13.8-5.5l107.1-99.9z'
      />
    </svg>
  )
}

export default ToggleIcon
