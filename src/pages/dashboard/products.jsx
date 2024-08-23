import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import iconImgProduct from './../../img/no-image-icon-0.jpg'

import './../../style.css'
import { useRef, useState } from 'react'
export default function Products() {
    let x = ''
    let y = ''
    const [inp, setInp] = useState({
        name: '',
        id: '',
        brand: '',
        price: '',
        Category: '',
    })
    const name = useRef()
    const id = useRef()
    const brand = useRef()
    const price = useRef()
    const Category = useRef()

    const par = useRef()


    const [test10, set1Test10] = useState('')

    const [test2, setTest2] = useState(3)
    const [mainUser, setMainUser] = useState([
        {
            name: 'Galaxy Z Fold5',
            id: '1111',
            brand: 'samsung',
            price: '1800',
            Category: 'mobile',
        },
        {
            name: 'MacBook Pro',
            id: '2222',
            brand: 'apple',
            price: '1600',
            Category: 'laptop',
        },
        {
            name: 'Galaxy Watch6',
            id: '3333',
            brand: 'samsung',
            price: '300',
            Category: 'smartwatch',
        }
    ])
    const addProduct = (e) => {
        switch (e.target.getAttribute('data-statuse')) {
            case 'name': setInp({ ...inp, name: e.target.value }); break;
            case 'id': setInp({ ...inp, id: e.target.value }); break;
            case 'brand': setInp({ ...inp, brand: e.target.value }); break;
            case 'price': setInp({ ...inp, price: e.target.value }); break;
            case 'Category': setInp({ ...inp, Category: e.target.value }); break;

        }
    }
    function para(e) {
        const temp = {
            name: inp.name,
            id: inp.id,
            brand: inp.brand,
            price: inp.price,
            Category: inp.Category,
        }
        if ((temp.name == '') && (temp.id == '') && (temp.brand == '') && (temp.price == '') && (temp.Category == '')) {
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
            id: '',
            brand: '',
            price: '',
            Category: '',

        })
        document.getElementById('imgss').setAttribute('src' , iconImgProduct)

    }
    function delet(e) {
        e.target.parentElement.parentElement.remove()
    }

    function getImg(e) {
        e.target.parentElement.previousElementSibling.src = URL.createObjectURL(e.target.files[0])
    }
    return (

        <div className="w-full md:w-[78%] bg-[#191c24] md:translate-x-[25%] p-5 md:p-10 md:mr-3 relative">
            <div className='w-full md:rounded-[7px] absolute -top-1 md:left-3 left-0 flex justify-center items-center flex-wrap'>
                <h2 className='w-full p-2 flex justify-start items-center text-[25px] md:text-[35px] fonts text-gray-400 bg-[#27293d] md:rounded-[7px] font-bold'>Add New Product</h2>
                <div className='w-full h-[85vh] md:h-[60vh] flex justify-center content-center bg-[#27293d] mt-4 md:rounded-[7px] flex-wrap'>
                    <div className='w-full md:w-[40%] h-[50%] md:h-full flex justify-center content-center text-gray-400 flex-wrap'>
                        <h4 className='w-full text-gray-200 flex justify-center items-end my-4 '>Product Image</h4>
                        {/* product img  */}
                        <img id='imgss' className='w-[180px] h-[180px] mx-20 object-cover rounded-[50%] flex justify-center items-center' src={iconImgProduct} alt="" />
                        <label class="w-[150px] h-[40px] flex justify-center items-center custom-file-upload my-4 duration-300 bg-[#1976d3]" >
                            <input type="file" accept='image/jpeg, image.ppng, image.jpg , image.webp' onChange={getImg} />
                            Upload Image
                        </label>

                    </div>
                    <div className='w-full md:w-[60%] flex-wrap h-[50%] md:h-full flex justify-start content-center'>
                        <div className='w-[50%] flex justify-center md:justify-start content-center py-3 my-1 md:my-4 pl-2 text-gray-200 flex-wrap'>
                            <div className='w-full flex justify-center md:justify-start items-center mb-1'>Product Name</div>
                            <input ref={name} type="text" data-statuse='name' value={inp.name} onChange={addProduct} className='w-[75%] py-2 pl-1 fonts bg-[#27293d] border-b text-[13px] font-thin text-gray-400 userFocus outline-none text-center md:text-left' placeholder='Example: Galaxy Z Fold5' />
                        </div>
                        <div className='w-[50%] flex justify-center md:justify-start content-center py-3 my-1 md:my-4 pl-2 text-gray-200 flex-wrap'>
                            <div className='w-full flex justify-center md:justify-start items-center mb-1'>Product ID</div>
                            <input ref={id} type="text" data-statuse='id' value={inp.id} onChange={addProduct} className='w-[75%] py-2 pl-1 fonts bg-[#27293d] border-b text-[13px] font-thin text-gray-400 userFocus outline-none text-center md:text-left' placeholder='Example: 1111' />
                        </div>
                        <div className='w-[50%] flex justify-center md:justify-start content-center py-3 my-1 md:my-4 pl-2 text-gray-200 flex-wrap'>
                            <div className='w-full flex justify-center md:justify-start items-center mb-1'>Brand</div>
                            <input ref={brand} type="text" data-statuse='brand' value={inp.brand} onChange={addProduct} className='w-[75%] py-2 pl-1 fonts bg-[#27293d] border-b text-[13px] font-thin text-gray-400 userFocus outline-none text-center md:text-left' placeholder='Example: Samsung' />
                        </div>
                        <div className='w-[50%] flex justify-center md:justify-start content-center py-3 my-1 md:my-4 pl-2 text-gray-200 flex-wrap'>
                            <div className='w-full flex justify-center md:justify-start items-center mb-1'>Price</div>
                            <input ref={price} type="text" data-statuse='price' value={inp.price} onChange={addProduct} className='w-[75%] py-2 pl-1 fonts bg-[#27293d] border-b text-[13px] font-thin text-gray-400 userFocus outline-none text-center md:text-left' placeholder='Example: 1800$' />
                        </div>
                        <div className='w-[50%] flex justify-center md:justify-start content-center py-3 my-1 md:my-4 pl-2 text-gray-200 flex-wrap'>
                            <div className='w-full flex justify-center md:justify-start items-center mb-1'>Category</div>
                            <input ref={Category} type="text" data-statuse='Category' value={inp.Category} onChange={addProduct} className='w-[75%] py-2 pl-1 fonts bg-[#27293d] border-b text-[13px] font-thin text-gray-400 userFocus outline-none text-center md:text-left' placeholder='Example: Mobile' />
                        </div>
                        <div className='mb-3 w-[50%] flex justify-start items-end pl-8 '>
                            <IconLabelButtons para={para} />
                        </div>
                    </div>
                </div>
                <h2 className='w-full p-2 my-4 flex justify-start items-center text-[25px] md:text-[35px] fonts text-gray-400 bg-[#27293d] md:rounded-[7px] font-bold'>Products</h2>
                <div className='w-full flex justify-center items-center bg-[#27293d] mb-1 md:rounded-[7px] flex-wrap'>
                    <ul ref={par} className='w-full flex justify-center content-center flex-wrap'>
                        <li className='w-full h-[60px] py-2 text-gray-400 flex justify-center items-center text-[12px] md:text-[14px]'>
                            <div className='w-[10%] md:w-[10%] h-[40%] flex justify-center items-center text-white'> <span className=' w-[10%] h-full md:bdr'></span>ID</div>
                            <div className='w-[15%] md:w-[15%] h-[40%] flex justify-center items-center text-white'> <span className=' w-[10%] h-full md:bdr'></span>Category</div>
                            <div className='w-[30%] md:w-[20%] h-[40%] flex justify-center items-center text-white'> <span className=' w-[10%] h-full md:bdr'></span>Product</div>
                            <div className='w-[10%] md:w-[15%] h-[40%] flex justify-center items-center text-white'> <span className=' w-[10%] h-full md:bdr'></span>Brand</div>
                            <div className='w-[10%] md:w-[15%] h-[40%] flex justify-center items-center text-white'> <span className=' w-[10%] h-full md:bdr'></span>Price</div>
                            <div className='w-[25%] md:w-[25%] h-[40%] flex justify-center items-center text-white'> <span className=' w-[10%] h-full md:bdr'></span>Action</div>
                        </li>
                        {

                            mainUser.map((val, index) => {
                                return (
                                    <li key={index} className='w-full h-[60px] py-2 text-gray-400 flex justify-center items-center bd'>
                                        <span className='w-[10%] md:w-[10%] h-[40%] flex justify-center items-center text-gray-400 text-[10px] md:text-[12px]'>{'#'+val.id}</span>
                                        <span className='w-[15%] md:w-[15%] h-[40%] flex justify-center items-center text-gray-400 text-[10px] md:text-[12px]'>{val.Category}</span>
                                        <span className='w-[30%] md:w-[20%] h-[40%] flex justify-center items-center text-gray-400 text-[10px] md:text-[12px]'>{val.name}</span>
                                        <span className='w-[10%] md:w-[15%] h-[40%] flex justify-center items-center text-gray-400 text-[10px] md:text-[12px]'>{val.brand}</span>
                                        <span className='w-[10%] md:w-[15%] h-[40%] flex justify-center items-center text-gray-400 text-[10px] md:text-[12px]'>{val.price + '$'}</span>
                                        <div className='w-[25%] md:w-[25%] h-[40%] flex justify-center items-center'> <div onClick={delet} className='w-[80px] md:w-[120px] px-1 md:px-3 py-1 text-[14px] border border-red-600 flex justify-center items-center rounded-[3px] text-red-600 cursor-pointer delet duration-300'>Delet</div></div>

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

