import { Link } from "react-router-dom"
import './../../style.css'
export default function Orders() {

    return (
        <div className="w-full md:w-[78%] h-[85vh] bg-[#191c24] md:translate-x-[25%] p-5 md:p-10 md:mr-3 relative overflow-x-hidden md:overflow-x-visible">
            <div className='w-full h-[75vh] md:rounded-[7px] bg-[#27293d] absolute -top-1 md:left-3 left-0 flex justify-center items-center flex-wrap'>
                <div className='w-[80%] flex justify-center items-center flex-wrap'>
                    <div className='w-full flex justify-center items-center text-gray-400'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-emoji-dizzy-fill" viewBox="0 0 16 16">
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M4.146 5.146a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 1 1 .708.708l-.647.646.647.646a.5.5 0 1 1-.708.708L5.5 7.207l-.646.647a.5.5 0 1 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 0-.708zm5 0a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 1 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 0-.708M8 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4" />
                        </svg>
                        <h2 className='text-gray-400 text-[30px] md:text-[70px] text-center mx-5'>oops!</h2>
                    </div>
                    <h2 className='w-full text-gray-400 text-[30px] md:text-[70px] text-center'>not found <strong className='text-[#e14eca] font-normal'>/dashboard/orders</strong> page or not create for yet.</h2>
                </div>
            </div>
            <div className='w-full md:w-[98%] flex justify-between items-center absolute bottom-2 md:-ml-5'>
                <h4 className="w-[60%] md:w-[50%] text-white text-[12px] md:text-[16px] flex text-center md:justify-start items-center font-light">© 2023- made by&nbsp; 🩷 &nbsp; <strong><Link target="_blank" to={'https://www.sabaaghajani.com/'}>  Saba Aghajani </Link></strong>.</h4>
                <h4 className="w-[40%] md:w-[50%] text-[#e14eca] text-[12px] md:text-[16px] text-center flex md:justify-end items-center pl-6 "><Link target="_blank" to={'https://github.com/Saba-Aghajani-developer'}> see more project </Link></h4>
            </div>
        </div>
    )
}