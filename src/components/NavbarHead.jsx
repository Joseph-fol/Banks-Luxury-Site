import React from 'react'
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { Link } from 'react-router-dom';
import { get } from 'flowbite-react/helpers/get';

const NavbarHead = () => {
    return (
        <>
            <Navbar className='py-10 bg-white!' >
                <NavbarBrand href="">
                    <img src="https://banksluxuryapartments.com/assets/banksomelogo.d3934e74.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                </NavbarBrand>

                <div className="flex md:order-2 gap-3">
                    <Button className='bg-white! text-black font-light text-[16px] focus:ring-0 focus:outline-none! hover:text-[#f04d22]'>Login</Button>
                    <Button className='bg-white! text-black border border-black! font-light text-[16px] rounded-none! focus:ring-0 focus:outline-none! hover:text-[#f04d22] hover:border-[#f04d22]! px-8 py-4'>Sign Up</Button>
                    <NavbarToggle />
                </div>
                <NavbarCollapse className='gap-10'>
                    <NavbarLink href="#" active className='text-[16px] text-[#f04d22]! font-light'>
                        Home
                    </NavbarLink>
                    <NavbarLink href="#" className='text-[16px] text-black! font-light'>About</NavbarLink>
                    <NavbarLink href="#" className='text-[16px] text-black! font-light'>Contact Us</NavbarLink>
                    <NavbarLink href="#" className='text-[16px] text-black! font-light'>List your Property</NavbarLink>
                    <NavbarLink href="#" className='text-[16px] text-black! font-light'>Location</NavbarLink>
                    <select name="" id="" className='bg-white! text-black  font-light text-[16px]'>
                        <option value="ng">NG</option>
                        <option value="ng">USD</option>
                    </select>
                </NavbarCollapse>
            </Navbar>
        </>
    )
}

export default NavbarHead