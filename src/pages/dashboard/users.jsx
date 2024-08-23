import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import img1 from './../../img/1.jpg'
import img2 from './../../img/2.jpg'
import img3 from './../../img/3.jpg'
import img4 from './../../img/4.jpg'
import img5 from './../../img/5.jpg'
import img6 from './../../img/6.jpg'
import './../../style.css'
import { useRef, useState } from 'react'
export default function Users() {
    const [inp, setInp] = useState({
        name: '',
        lname: '',
        user: '',
        email: '',
        phone: '',
        pass: '',
        src: '',
    })
    const name = useRef()
    const lname = useRef()
    const user = useRef()
    const email = useRef()
    const phone = useRef()
    const pass = useRef()
    const [imgs, setImgs] = useState('')
  
    const par = useRef()
    const [saba , setSaba] = useState('')

    const [test2, setTest2] = useState(3)
    const [mainUser, setMainUser] = useState([
        {
            name: 'user1',
            lname: 'user1',
            user: 'user1',
            email: 'user1@gmail.com',
            phone: '09121234567',
            pass: '12345678',
            src: 'https://sabaaghajani.com/img/2.jpg',
        },
        {
            name: 'user2',
            lname: 'user2',
            user: 'user2',
            email: 'user2@gmail.com',
            phone: '09121234567',
            pass: '12345678',
            src: 'https://sabaaghajani.com/img/6.jpg',
        },
        {
            name: 'user3',
            lname: 'user3',
            user: 'user3',
            email: 'user3@gmail.com',
            phone: '09121234567',
            pass: '12345678',
            src: 'https://sabaaghajani.com/img/3.jpg',
        }
    ])
    const addUser = (e) => {
        switch (e.target.getAttribute('data-statuse')) {
            case 'name': setInp({ ...inp, name: e.target.value }); break;
            case 'lname': setInp({ ...inp, lname: e.target.value }); break;
            case 'user': setInp({ ...inp, user: e.target.value }); break;
            case 'email': setInp({ ...inp, email: e.target.value }); break;
            case 'phone': setInp({ ...inp, phone: e.target.value }); break;
            case 'pass': setInp({ ...inp, pass: e.target.value }); break;

        }
    }
    function para() {
        const temp = {
            name: inp.name,
            lname: inp.lname,
            user: inp.user,
            email: inp.email,
            phone: inp.phone,
            pass: inp.pass,
            src: imgs,
        }
        if ((temp.name == '') && (temp.lname == '') && (temp.user == '') && (temp.email == '') && (temp.phone == '') && (temp.pass == '')) {
            console.log('nooooo');
        } else {
            setMainUser(() => {
                return mainUser.concat(temp)
            })
        }
        setTest2(par.current.children.length)
        console.log(test2);
        setInp({
            ...inp,
            name: '',
            lname: '',
            user: '',
            email: '',
            phone: '',
            pass: '',

        })
        
        saba.style.background = '#fff'

    }
    function delet(e) {
        e.target.parentElement.parentElement.remove()
    }
    function selectImg(e) {
        setSaba(e.target)
        let _img = e.target.previousElementSibling.getAttribute('src')
        

        e.target.style.background = '#191c24'
        setImgs(_img)
        console.log(imgs);
    }
    return (

        <div className="w-full md:w-[78%] bg-[#191c24] md:translate-x-[25%] p-5 md:p-10 md:mr-3 relative">
            <div className='w-full md:rounded-[7px] absolute -top-1 md:left-3 left-0 flex justify-center items-center flex-wrap'>
                <h2 className='w-full p-2 flex justify-start items-center text-[25px] md:text-[35px] fonts text-gray-400 bg-[#27293d] md:rounded-[7px] font-bold'>Add New User</h2>
                <div className='w-full h-[70vh] flex justify-center content-center bg-[#27293d] mt-4 md:rounded-[7px] flex-wrap'>
                    <div className='w-full md:w-[40%] h-[25%] md:h-full flex justify-center content-center text-gray-400 flex-wrap'>
                        <h4 className='w-full h-[15%] text-gray-200 flex justify-start md:justify-center md:mr-8 items-center md:-mt-20 pl-10'>Avatar</h4>
                        {/* imgs  */}
                        <div className='w-full h-full md:h-[70%] justify-center content-center flex-wrap md:-mt-4 hidden md:flex'>
                            <div className='w-full h-[33.33%] flex justify-center items-center'>
                                <div className='w-[33.33%] h-[100%] flex justify-center content-center flex-wrap'>
                                    <figure className='w-[30px] md:w-[70px] h-[80%] flex justify-center content-center flex-wrap'>
                                        <img className='w-[30px] h-[30px] md:w-[70px] md:h-[70px] object-cover mb-1' src={img1} alt="" />
                                        <div onClick={selectImg} data-src='img6' className='w-[15px] h-[15px] bg-white rounded-[50%] flex justify-center items-center cursor-pointer'></div>
                                    </figure>
                                </div>
                                <div className='w-[33.33%] h-[100%] flex justify-center content-center flex-wrap'>
                                    <figure className='w-[30px] md:w-[70px] h-[80%] flex justify-center content-center flex-wrap'>
                                        <img className='w-[30px] h-[30px] md:w-[70px] md:h-[70px] object-cover mb-1' src={img2} alt="" />
                                        <div onClick={selectImg} data-src='img6' className='w-[15px] h-[15px] bg-white rounded-[50%] flex justify-center items-center cursor-pointer'></div>
                                    </figure>
                                </div>
                            </div>
                            <div className='w-full h-[33.33%] flex justify-center items-center'>
                                <div className='w-[33.33%] h-[100%] flex justify-center content-center flex-wrap'>
                                    <figure className='w-[30px] md:w-[70px] h-[80%] flex justify-center content-center flex-wrap'>
                                        <img className='w-[30px] h-[30px] md:w-[70px] md:h-[70px] object-cover mb-1' src={img4} alt="" />
                                        <div onClick={selectImg} data-src='img6' className='w-[15px] h-[15px] bg-white rounded-[50%] flex justify-center items-center cursor-pointer'></div>
                                    </figure>
                                </div>
                                <div className='w-[33.33%] h-[100%] flex justify-center content-center flex-wrap'>
                                    <figure className='w-[30px] md:w-[70px] h-[80%] flex justify-center content-center flex-wrap'>
                                        <img className='w-[30px] h-[30px] md:w-[70px] md:h-[70px] object-cover mb-1' src={img3} alt="" />
                                        <div onClick={selectImg} data-src='img6' className='w-[15px] h-[15px] bg-white rounded-[50%] flex justify-center items-center cursor-pointer'></div>
                                    </figure>
                                </div>
                            </div>
                            <div className='w-full h-[33.33%] flex justify-center items-center'>
                                <div className='w-[33.33%] h-[100%] flex justify-center content-center flex-wrap'>
                                    <figure className='w-[30px] md:w-[70px] h-[80%] flex justify-center content-center flex-wrap'>
                                        <img className='w-[30px] h-[30px] md:w-[70px] md:h-[70px] object-cover mb-1' src={img5} alt="" />
                                        <div onClick={selectImg} data-src='img6' className='w-[15px] h-[15px] bg-white rounded-[50%] flex justify-center items-center cursor-pointer'></div>
                                    </figure>
                                </div>
                                <div className='w-[33.33%] h-[100%] flex justify-center content-center flex-wrap'>
                                    <figure className='w-[30px] md:w-[70px] h-[80%] flex justify-center content-center flex-wrap'>
                                        <img className='w-[30px] h-[30px] md:w-[70px] md:h-[70px] object-cover mb-1' src={img6} alt="" />
                                        <div onClick={selectImg} data-src='img6' className='w-[15px] h-[15px] bg-white rounded-[50%] flex justify-center items-center cursor-pointer'></div>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        {/* mobile avatar  */}
                        <div className='w-full h-full md:h-[70%] flex justify-center content-center flex-wrap md:-mt-4 md:hidden'>
                            <div className='w-full h-[50%] flex justify-center items-center'>
                                <div className='w-[33.33%] h-[100%] flex justify-center content-center flex-wrap'>
                                    <figure className='w-[30px] md:w-[70px] h-[80%] flex justify-center content-center flex-wrap'>
                                        <img className='w-[30px] h-[30px] md:w-[70px] md:h-[70px] object-cover mb-1' src={img1} alt="" />
                                        <div onClick={selectImg} data-src='img6' className='w-[15px] h-[15px] bg-white rounded-[50%] flex justify-center items-center cursor-pointer'></div>
                                    </figure>
                                </div>
                                <div className='w-[33.33%] h-[100%] flex justify-center content-center flex-wrap'>
                                    <figure className='w-[30px] md:w-[70px] h-[80%] flex justify-center content-center flex-wrap'>
                                        <img className='w-[30px] h-[30px] md:w-[70px] md:h-[70px] object-cover mb-1' src={img2} alt="" />
                                        <div onClick={selectImg} data-src='img6' className='w-[15px] h-[15px] bg-white rounded-[50%] flex justify-center items-center cursor-pointer'></div>
                                    </figure>
                                </div>
                                <div className='w-[33.33%] h-[100%] flex justify-center content-center flex-wrap'>
                                    <figure className='w-[30px] md:w-[70px] h-[80%] flex justify-center content-center flex-wrap'>
                                        <img className='w-[30px] h-[30px] md:w-[70px] md:h-[70px] object-cover mb-1' src={img4} alt="" />
                                        <div onClick={selectImg} data-src='img6' className='w-[15px] h-[15px] bg-white rounded-[50%] flex justify-center items-center cursor-pointer'></div>
                                    </figure>
                                </div>
                            </div>
                            <div className='w-full h-[50%] flex justify-center items-center'>
                                <div className='w-[33.33%] h-[100%] flex justify-center content-center flex-wrap'>
                                    <figure className='w-[30px] md:w-[70px] h-[80%] flex justify-center content-center flex-wrap'>
                                        <img className='w-[30px] h-[30px] md:w-[70px] md:h-[70px] object-cover mb-1' src={img3} alt="" />
                                        <div onClick={selectImg} data-src='img6' className='w-[15px] h-[15px] bg-white rounded-[50%] flex justify-center items-center cursor-pointer'></div>
                                    </figure>
                                </div>
                                <div className='w-[33.33%] h-[100%] flex justify-center content-center flex-wrap'>
                                    <figure className='w-[30px] md:w-[70px] h-[80%] flex justify-center content-center flex-wrap'>
                                        <img className='w-[30px] h-[30px] md:w-[70px] md:h-[70px] object-cover mb-1' src={img5} alt="" />
                                        <div onClick={selectImg} data-src='img6' className='w-[15px] h-[15px] bg-white rounded-[50%] flex justify-center items-center cursor-pointer'></div>
                                    </figure>
                                </div>
                                <div className='w-[33.33%] h-[100%] flex justify-center content-center flex-wrap'>
                                    <figure className='w-[30px] md:w-[70px] h-[80%] flex justify-center content-center flex-wrap'>
                                        <img className='w-[30px] h-[30px] md:w-[70px] md:h-[70px] object-cover mb-1' src={img6} alt="" />
                                        <div onClick={selectImg} data-src='img6' className='w-[15px] h-[15px] bg-white rounded-[50%] flex justify-center items-center cursor-pointer'></div>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        {/* end imgs  */}
                    </div>
                    <div className='w-full md:w-[60%] flex-wrap h-[70%] md:h-full flex justify-center content-center'>
                        <div className='w-[50%] flex justify-center md:justify-start content-center py-3 my-1 md:my-4 pl-2 text-gray-200 flex-wrap'>
                            <div className='w-full flex justify-center md:justify-start items-center mb-1'>First Name</div>
                            <input ref={name} type="text" data-statuse='name' value={inp.name} onChange={addUser} className='w-[75%] py-2 pl-1 fonts bg-[#27293d] border-b text-[13px] font-thin text-gray-400 userFocus outline-none text-center md:text-left' placeholder='Example: Saba' />
                        </div>
                        <div className='w-[50%] flex justify-center md:justify-start content-center py-3 my-1 md:my-4 pl-2 text-gray-200 flex-wrap'>
                            <div className='w-full flex justify-center md:justify-start items-center mb-1'>Last Name</div>
                            <input ref={lname} type="text" data-statuse='lname' value={inp.lname} onChange={addUser} className='w-[75%] py-2 pl-1 fonts bg-[#27293d] border-b text-[13px] font-thin text-gray-400 userFocus outline-none text-center md:text-left' placeholder='Example: Aghajani' />
                        </div>
                        <div className='w-[50%] flex justify-center md:justify-start content-center py-3 my-1 md:my-4 pl-2 text-gray-200 flex-wrap'>
                            <div className='w-full flex justify-center md:justify-start items-center mb-1'>Username</div>
                            <input ref={user} type="text" data-statuse='user' value={inp.user} onChange={addUser} className='w-[75%] py-2 pl-1 fonts bg-[#27293d] border-b text-[13px] font-thin text-gray-400 userFocus outline-none text-center md:text-left' placeholder='Example: Saba-aghajani' />
                        </div>
                        <div className='w-[50%] flex justify-center md:justify-start content-center py-3 my-1 md:my-4 pl-2 text-gray-200 flex-wrap'>
                            <div className='w-full flex justify-center md:justify-start items-center mb-1'>Email</div>
                            <input ref={email} type="text" data-statuse='email' value={inp.email} onChange={addUser} className='w-[75%] py-2 pl-1 fonts bg-[#27293d] border-b text-[13px] font-thin text-gray-400 userFocus outline-none text-center md:text-left' placeholder='Example: Saba@gmail.com' />
                        </div>
                        <div className='w-[50%] flex justify-center md:justify-start content-center py-3 my-1 md:my-4 pl-2 text-gray-200 flex-wrap'>
                            <div className='w-full flex justify-center md:justify-start items-center mb-1'>Phone Number</div>
                            <input ref={phone} type="text" data-statuse='phone' value={inp.phone} onChange={addUser} className='w-[75%] py-2 pl-1 fonts bg-[#27293d] border-b text-[13px] font-thin text-gray-400 userFocus outline-none text-center md:text-left' placeholder='Example: 09121234567' />
                        </div>
                        <div className='w-[50%] flex justify-center md:justify-start content-center py-3 my-1 md:my-4 pl-2 text-gray-200 flex-wrap'>
                            <div className='w-full flex justify-center md:justify-start items-center mb-1'>Password</div>
                            <input ref={pass} type="text" data-statuse='pass' value={inp.pass} onChange={addUser} className='w-[75%] py-2 pl-1 fonts bg-[#27293d] border-b text-[13px] font-thin text-gray-400 userFocus outline-none text-center md:text-left' placeholder='Example: 12345678' />
                        </div>
                        <div className='mb-3 w-full flex justify-start items-center pl-8 md:pl-1'>
                            <IconLabelButtons para={para} />
                        </div>
                    </div>
                </div>
                <h2 className='w-full p-2 my-4 flex justify-start items-center text-[25px] md:text-[35px] fonts text-gray-400 bg-[#27293d] md:rounded-[7px] font-bold'>Users</h2>
                <div className='w-full flex justify-center items-center bg-[#27293d] mb-1 md:rounded-[7px] flex-wrap'>
                    <ul ref={par} className='w-full flex justify-center content-center flex-wrap'>
                        <li className='w-full h-[60px] py-2 text-gray-400 flex justify-start items-center text-[12px] md:text-[14px]'>
                            <div className='w-[10%] h-[40%] flex justify-center items-center text-white'> <span className=' w-[10%] h-full'></span>ID</div>
                            <div className='w-[15%] h-[40%] flex justify-center items-center text-white'> <span className=' w-[10%] h-full'></span>Avatar</div>
                            <div className='w-[15%] h-[40%] flex justify-center items-center text-white'> <span className=' w-[10%] h-full'></span>Username</div>
                            <div className='w-[20%] h-[40%] flex justify-center items-center text-white'> <span className=' w-[10%] h-full'></span>Email</div>
                            <div className='w-[15%] h-[40%] flex justify-center items-center text-white'> <span className=' w-[10%] h-full'></span>Password</div>
                            <div className='w-[25%] h-[40%] flex justify-center items-center text-white'> <span className=' w-[10%] h-full'></span>Action</div>
                        </li>
                        {

                            mainUser.map((val, index) => {
                                return (
                                    <li key={index} className='w-full h-[60px] py-2 text-gray-400 flex justify-start items-center bd'>
                                        <span className='w-[10%] h-[40%] flex justify-center items-center text-gray-400 text-[10px] md:text-[12px]'>{'user-' + (index + 1)}</span>
                                        <span className='w-[15%] h-[40%] flex justify-center items-center text-gray-400 text-[10px] md:text-[12px]'><img className='w-[30px] h-[30px] rounded-[50%] object-cover' src={val.src} alt="" /></span>
                                        <span className='w-[15%] h-[40%] flex justify-center items-center text-gray-400 text-[10px] md:text-[12px]'>{val.user}</span>
                                        <span className='w-[20%] h-[40%] flex justify-center items-center text-gray-400 text-[10px] md:text-[12px]'>{val.email}</span>
                                        <span className='w-[15%] h-[40%] flex justify-center items-center text-gray-400 text-[10px] md:text-[12px]'>{val.pass}</span>
                                        <div className='w-[25%] h-[40%] flex justify-center items-center'> <div onClick={delet} className='w-[80px] md:w-[120px] px-1 md:px-3 py-1 text-[14px] border border-red-600 flex justify-center items-center rounded-[3px] text-red-600 cursor-pointer delet duration-300'>Delet</div></div>

                                    </li>
                                )
                            })

                        }
                    </ul>

                </div>
                <div className='w-full md:w-full flex justify-between items-center pl-4 md:pl-0 py-3'>
                    <h4 className="w-[60%] md:w-[50%] text-white text-[12px] md:text-[16px] flex text-center md:justify-start items-center font-light">© 2023- made by&nbsp; 🩷 &nbsp; <strong><Link target="_blank" to={'https://www.sabaaghajani.com/'}>  Saba Aghajani </Link></strong>.</h4>
                    <h4 className="w-[40%] md:w-[50%] text-[#e14eca] text-[12px] md:text-[16px] text-center flex md:justify-end items-center pl-6 "><Link target="_blank" to={'https://github.com/Saba-Aghajani-developer'}> see more project </Link></h4>
                </div>
            </div>

        </div>
    )
}
function IconLabelButtons({ para }) {
    return (
        <Stack direction="row" spacing={2} >
            <Button variant="contained" endIcon={<SendIcon />} onClick={para}>
                Send
            </Button>
        </Stack>
    );
}

