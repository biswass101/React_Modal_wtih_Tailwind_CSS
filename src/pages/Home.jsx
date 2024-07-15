import React, { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <main className="top-[50%] left-[50%] absolute translate-x-[-50%] translate-y-[-50%]">
        <Button isOpen = {isOpen} setIsOpen = {setIsOpen} >Open Modal</Button>
      </main>
      <Modal isOpen = {isOpen} setIsOpen = {setIsOpen} header = {
            <h1>Sign Up Here</h1>
        }
        footer ={
            <>
                <button onClick={() => {
                  alert("Loged In")
                  isOpen ? setIsOpen(false) : ''
                }} className="bg-red-300 hover:bg-red-600 w-28 h-10 rounded-xl">Log In </button>
                <button onClick={() => {
                  alert("Signed Up")
                  isOpen ? setIsOpen(false) : ''
                }} className="bg-cyan-300 hover:bg-cyan-600 w-28 h-10 rounded-xl">Sign Up</button>
            </>
        }
      >
        <input className="p-4 rounded-xl outline-none" type="text" placeholder="Enter email..."></input>
        <input className="p-4 rounded-xl outline-none" type="password" placeholder="Enter password..."></input>
      </Modal>
    </>
  );
};

export default Home;
