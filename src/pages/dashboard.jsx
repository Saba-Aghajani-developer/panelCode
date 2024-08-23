import Chart1 from './chart1'
import Chart2 from './chart2'
import Chart3 from './chart3'
import Chart4 from './chart4'
import { Link } from 'react-router-dom'
import Calender from './calender'
import Clock from './clock'
import './../style.css'
export default function Dashboard() {

    return (
        <div className="w-full md:w-[78%] bg-[#191c24] md:translate-x-[25%] p-5 md:p-10 md:mr-3 relative">
            <div className='w-full md:rounded-[7px] absolute -top-1 md:left-3 left-0 flex justify-center items-center flex-wrap'>
                {/* chart  */}
                <h2 className='w-full p-2 flex justify-start items-center text-[25px] md:text-[35px] fonts text-gray-400 bg-[#27293d] md:rounded-[7px] font-bold mb-4'>Dashboard</h2>
                <div className='w-full h-[120vh] md:h-[85vh] flex justify-center content-center mt-4 flex-wrap'>
                    <div className='w-full md:w-full  h-[25%] md:h-[50%] flex justify-center items-center mb-7 md:mb-4 bg-[#27293d] p-3 md:rounded-[7px]'>
                        <Chart2 />
                    </div>
                    <div className='w-full md:w-full  h-[75%] md:h-[50%] flex justify-center content-center md:items-center mb-4  py-3 flex-wrap md:flex-nowrap'>
                        <div className='w-full md:w-[33%]  h-[33.33%] md:h-[90%] flex justify-center items-center mb-4 bg-[#27293d] p-3 md:rounded-[7px] md:mx-1'>
                            <Chart1 />
                        </div>
                        <div className='w-full md:w-[33%]  h-[33.33%] md:h-[90%] flex justify-center items-center mb-4 bg-[#27293d] p-3 md:rounded-[7px] md:mx-1'>
                            <Chart3 />
                        </div>
                        <div className='w-full md:w-[33%]  h-[33.33%] md:h-[90%] flex justify-center items-center mb-4 bg-[#27293d] p-3 md:rounded-[7px] md:mx-1'>
                            <Chart4 />
                        </div>
                    </div>
                </div>

                <div className='w-full h-[40vh] md:h-[45vh] flex justify-start items-center mb-4'>
                    <div className='w-[100%] h-full flex justify-start items-center  md:rounded-[7px] px-5'>
                        <div className='w-[60%] h-[90%] hidden md:flex items-center justify-center '>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d51843.21164196608!2d51.337499169531256!3d35.69667775853304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sfr!4v1702909812758!5m2!1sen!2sfr" className='rounded-[5px]' width="700" height="320" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5664790.450026941!2d2.59110285!3d46.11068855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sfr!4v1702906468751!5m2!1sen!2sfr" className='h-full object-cover rounded-[5px]' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                        </div>
                        <div className='w-full md:w-[40%] h-[90%] bg-[#ffffff] md:rounded-[7px] p-2 flex justify-end items-center md:ml-[8%] overflow-hidden'>
                            <Calender />
                        </div>
                    </div>
                    {/* <div className='w-[27%] h-[90%] bg-[#ffffff] md:rounded-[7px] p-2 flex justify-center items-center md:ml-[5%] overflow-hidden'>
                        <Clock />
                    </div> */}
                </div>
                <div className='w-full md:w-full flex justify-between items-center pl-4 md:pl-0 py-3'>
                    <h4 className="w-[60%] md:w-[50%] text-white text-[12px] md:text-[16px] flex text-center md:justify-start items-center font-light">© 2023- made by&nbsp; 🩷 &nbsp; <strong><Link target="_blank" to={'https://www.sabaaghajani.com/'}>  Saba Aghajani </Link></strong>.</h4>
                    <h4 className="w-[40%] md:w-[50%] text-[#e14eca] text-[12px] md:text-[16px] text-center flex md:justify-end items-center pl-6 "><Link target="_blank" to={'https://github.com/Saba-Aghajani-developer'}> see more project </Link></h4>
                </div>
            </div>
        </div>
    )
}

