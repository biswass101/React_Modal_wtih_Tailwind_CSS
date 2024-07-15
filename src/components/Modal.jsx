import React from 'react'

const Modal = ({header, children, footer, isOpen, setIsOpen}) => {
  return (
    <div onClick={() => {
        setIsOpen(false)
    }} className={`absolute ${isOpen ? '' : 'hidden'} inset-0 flex justify-center items-center bg-black/40 px-4`}>
        <div onClick={(e) => {
            e.stopPropagation()
        }} className='relative bg-yellow-100 p-8 rounded-xl max-w-2xl grow'>
            <div onClick={() => {
                isOpen ? setIsOpen(false) : ''
            }} className='absolute top-4 right-4 text-xl font-bold cursor-pointer'>X</div>
            <div className='flex justify-center font-bold text-4xl'>
                {header}
            </div>
            <div className='flex justify-center gap-[60px] mt-4'>
                {children}
            </div>
            <div className='flex justify-end gap-4 mt-4 px-16 font-bold'>
                {footer}
            </div>
        </div>
        
       
    </div>
  )

}

export default Modal