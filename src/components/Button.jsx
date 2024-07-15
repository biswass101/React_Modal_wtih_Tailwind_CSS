import React from "react";

const Button = ({ children, isOpen, setIsOpen }) => {
  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-cyan-300 to-blue-700 mt-3 rounded-md w-32 h-10">
      <button onClick={() => {
        isOpen ? setIsOpen(false) : setIsOpen(true)
      }} className="bg-gradient-to-br from-red-300 to-red-500 rounded-md w-[122px] h-8 font-bold">
        {children}
      </button>
    </div>
  );
};

export default Button;
