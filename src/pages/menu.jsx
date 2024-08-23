import { Outlet, Link } from "react-router-dom"
import { useRef, useState } from 'react'
import img from './../img/saba.webp'
import './../style.css'
export default function Menu() {
    const myRef = useRef('')
    const [inp, setInp] = useState('')
    const [flag, setFlag] = useState(true)
    function hamMenu() {
        if (flag) {
            myRef.current.style.left = '0%'
        } else {
            myRef.current.style.left = '-100%'
        }
        setFlag(!flag)
    }
    function updateInp(e) {
        setInp(e.target.value)
    }
    function changeBgMenu(e){
        let bg = e.target.getAttribute('data-bg')
        console.log(bg);
        console.log(e.target.parentElement.parentElement);
        e.target.parentElement.parentElement.style.background = bg
    }
    return (
        <>
            <div className="flex bg-[#191c24] h-[12vh] w-full md:w-[80%] md:translate-x-[25%]">
                {/* <div  className="text-black cursor-pointer text-[40px] flex md:hidden" onClick={hamMenu}>+</div> */}
                {/* desktop  */}
                <div className="w-full h-full hidden md:flex justify-evenly items-center">
                    <div className="w-[50%] h-full flex justify-start items-center pl-10">
                        <input type="text" value={inp} onChange={updateInp} placeholder="Search products" className="w-[70%] text-[#ced4da6d] text-[14px] bg-[#191c24] font-light menuInp outline-none p-2 pl-4 rounded-[3px]" />
                    </div>
                    <div className="w-[50%] h-full flex justify-start items-center pr-5">
                        <div className="h-full w-[33.333%] flex justify-center items-center flex-grow ">
                            <button className="w-[90%] bg-green-500 text-[14px] text-white p-1 rounded-[3px]">+ Create New Project</button>
                        </div>
                        <div className="h-full w-[33.333%] flex justify-center items-center flex-grow ">
                            <div className="w-[33.33%] h-[50%] flex justify-center items-center border-r menuBorderHeader text-white cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-grid-fill" viewBox="0 0 16 16">
                                    <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z" />
                                </svg>
                            </div>
                            <div className="w-[33.33%] h-[50%] flex justify-center items-center border-r menuBorderHeader text-white cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                                </svg>
                                <div className="w-[8px] h-[8px] rounded-[50%] bg-green-500 -translate-x-[5px] -translate-y-[6px]"></div>
                            </div>
                            <div className="w-[33.33%] h-[50%] flex justify-center items-center text-white cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
                                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                                </svg>
                                <div className="w-[8px] h-[8px] rounded-[50%] bg-red-500 -translate-x-[5px] -translate-y-[6px]"></div>
                            </div>

                        </div>
                        <div className="h-full w-[33.333%] flex justify-center items-center flex-grow flex-wrap">
                            <div className="h-full w-full flex justify-center items-center flex-grow">
                                <figure className="w-[35px]">
                                    <img src={img} className="w-[35px] h-[35px] bg-white rounded-[50%] object-cover" alt="" />
                                </figure>
                                <div className="text-white flex justify-evenly items-center cursor-pointer font-light text-[14px]"><span className="p-2">Admin</span>
                                    <svg className="text-[#ced4da6d]" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* mobile  */}
                <div className="w-full h-full flex md:hidden justify-center items-center">
                    <div className="w-[45%] h-full flex justify-start items-center">
                        <div className="text-white cursor-pointer text-[40px] flex md:hidden pl-5" onClick={hamMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                            </svg>
                        </div>
                    </div>
                    <div className="w-[55%] h-full flex justify-end items-center">
                        <div className="h-full w-[75%] flex justify-center items-center flex-grow ">
                            <div className="w-[33.33%] h-[50%] flex justify-center items-center border-r menuBorderHeader text-white cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-grid-fill" viewBox="0 0 16 16">
                                    <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z" />
                                </svg>
                            </div>
                            <div className="w-[33.33%] h-[50%] flex justify-center items-center border-r menuBorderHeader text-white cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                                </svg>
                                <div className="w-[8px] h-[8px] rounded-[50%] bg-green-500 -translate-x-[5px] -translate-y-[6px]"></div>
                            </div>
                            <div className="w-[33.33%] h-[50%] flex justify-center items-center text-white cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
                                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                                </svg>
                                <div className="w-[8px] h-[8px] rounded-[50%] bg-red-500 -translate-x-[5px] -translate-y-[6px]"></div>
                            </div>
                        </div>
                        <div className="h-full w-[25%] flex justify-center items-center flex-grow mr-5">
                            <figure className="w-[50px]">
                                <img src={img} className="w-[40px] h-[40px] bg-white rounded-[50%] object-cover" alt="" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            <nav ref={myRef} className="w-[50%] md:w-[20%] h-[100vh] flex justify-center content-evenly fixed -left-[100%] md:left-0 top-0 bg-[#191c24] z-50 flex-wrap duration-500">
                <div className="w-full h-[12vh] flex justify-start items-center text-white ml-5">
                    <h3 className="letterSpacing ml-2 pl-1 fonts">DASHBOARD</h3>
                    <div className="text-gray-400 cursor-pointer text-[20px] flex md:hidden w-full pl-3 mt-0 rotate-[45deg]" onClick={hamMenu}>+</div>
                </div>
                <ul className="w-full h-[88vh] md:mx-7 md:mb-3 md:rounded-[7px] dashboardBox text-white px-7 pt-3">
                    {/* main  */}
                    <li className="text-gray-100 text-[13px] my-3 font-light fonts">MAIN</li>
                    <li className=" w-full mb-1 text-gray-100 flex justify-start items-center">
                        <Link className=" w-full mb-3 text-gray-100 flex justify-start items-center p-[3px] itemHover rounded-[3px]" to={'./dashboard'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-columns-gap" viewBox="0 0 16 16">
                                <path d="M6 1v3H1V1zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm14 12v3h-5v-3zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zM6 8v7H1V8zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm14-6v7h-5V1zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z" />
                            </svg>
                            <span className="ml-2 text-gray-100 text-[13px]">Dashboard</span>
                        </Link>
                    </li>
                    {/* list  */}
                    <li className="text-gray-100 text-[13px] mb-3 font-light fonts">LIST</li>
                    <li className=" w-full mb-1 text-gray-100 flex justify-start items-center">
                        <Link className=" w-full text-gray-100 flex justify-start items-center itemHover p-1 rounded-[3px]" to={'./dashboard/users'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z" />
                            </svg>
                            <span className="ml-2 text-gray-100 text-[13px] ">Users</span>
                        </Link>
                    </li>
                    <li className=" w-full mb-1 text-gray-100 flex justify-start items-center">
                        <Link className=" w-full text-gray-100 flex justify-start items-center itemHover p-1 rounded-[3px]" to={'./dashboard/products'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-shop" viewBox="0 0 16 16">
                                <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5M4 15h3v-5H4zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3 0h-2v3h2z" />
                            </svg>
                            <span className="ml-2 text-gray-100 text-[13px] ">Products</span>
                        </Link>
                    </li>
                    <li className=" w-full mb-1 text-gray-100 flex justify-start items-center">
                        <Link className=" w-full text-gray-100 flex justify-start items-center itemHover p-1 rounded-[3px]" to={'./dashboard/orders'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-credit-card-2-back" viewBox="0 0 16 16">
                                <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5z" />
                                <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1m-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1" />
                            </svg>
                            <span className="ml-2 text-gray-100 text-[13px] ">Orders</span>
                        </Link>
                    </li>
                    <li className=" w-full mb-1 text-gray-100 flex justify-start items-center">
                        <Link className=" w-full text-gray-100 flex justify-start items-center itemHover p-1 rounded-[3px]" to={'./dashboard/delivery'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                                <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                            </svg>
                            <span className="ml-2 text-gray-100 text-[13px] ">Delivery</span>
                        </Link>
                    </li>
                    {/* USEFUL  */}
                    <li className="text-gray-100 text-[13px] my-3 font-light fonts">USEFUL</li>
                    <li className=" w-full mb-1 text-gray-100 flex justify-start items-center">
                        <Link className=" w-full text-gray-100 flex justify-start items-center itemHover p-1 rounded-[3px]" to={'./dashboard/state'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-file-earmark-bar-graph" viewBox="0 0 16 16">
                                <path d="M10 13.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm-2.5.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5zm-3 0a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5z" />
                                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                            </svg>
                            <span className="ml-2 text-gray-100 text-[13px] ">State</span>
                        </Link>
                    </li>
                    <li className=" w-full mb-1 text-gray-100 flex justify-start items-center">
                        <Link className=" w-full text-gray-100 flex justify-start items-center itemHover p-1 rounded-[3px]" to={'./dashboard/notifications'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
                            </svg>
                            <span className="ml-2 text-gray-100 text-[13px] ">Notifications</span>
                        </Link>
                    </li>
                    <li className="text-gray-100 text-[13px] my-3 font-light fonts">USERS</li>
                    <li className=" w-full mb-1 text-gray-100 flex justify-start items-center">
                        <Link className=" w-full text-gray-100 flex justify-start items-center itemHover p-1 rounded-[3px]" to={'./dashboard/profile'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                            </svg>
                            <span className="ml-2 text-gray-100 text-[13px] ">Profile</span>
                        </Link>
                    </li>
                    <li className=" w-full mb-1 text-gray-100 flex justify-start items-center">
                        <Link className=" w-full text-gray-100 flex justify-start items-center itemHover p-1 rounded-[3px]" to={'/'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z" />
                                <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                            </svg>
                            <span className="ml-2 text-gray-100 text-[13px] ">Logout</span>
                        </Link>
                    </li>
                    {/* SERVICE  */}
                    <li className="text-gray-100 text-[13px] my-3 font-light">SERVICE</li>
                    <li className=" w-full mb-1 text-gray-100 flex justify-start items-center">
                        <Link className=" w-full text-gray-100 flex justify-start items-center itemHover p-1 rounded-[3px]" to={'./dashboard/setting'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                            </svg>
                            <span className="ml-2 text-gray-100 text-[13px] ">Setting</span>
                        </Link>
                    </li>
                    <li className="w-full h-[40px] flex justify-start items-center">
                        <div data-bg='linear-gradient(0deg,#ba54f5,#e14eca)' className="w-[25px] h-[25px] bg-[#e14eca] rounded-[50%] border mx-2 cursor-pointer" onClick={changeBgMenu}></div>
                        <div data-bg='linear-gradient(0deg,#3358f4,#1d8cf8)' className="w-[25px] h-[25px] bg-[#2086f8] rounded-[50%] border mx-2 cursor-pointer" onClick={changeBgMenu}></div>
                        <div data-bg='linear-gradient(0deg,#0098f0,#00f2c3)' className="w-[25px] h-[25px] bg-[#15efc5] rounded-[50%] border mx-2 cursor-pointer" onClick={changeBgMenu}></div>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}   
