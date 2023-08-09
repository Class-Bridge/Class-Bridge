import {AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillTwitterSquare} from "react-icons/ai";

const Footer = () =>{


return(
    <div className=" bg-gray-50 ml-2 text-center text-black py-2 shadow-lg">
        <div  className="grid grid-cols-3 items-cente md:space-x-16" >
        <div>
        <h1 className=' text-sm font-bold  md:text-xl md:p-2 rounded-lg'>ClassBridge</h1>
        </div>

        <div>
        <h1 className="md:text-xl">Copyright &copy;ClassBridge</h1>
        </div>

        
        <div className="flex space-x-2 ">
        <AiFillFacebook className="w-6 h-6   bg-gray-100 p-1 rounded-sm
         hover:text-red-200"/>
        <AiFillInstagram className="w-6 h-6 0 bg-gray-100 p-1 rounded-sm
         hover:text-red-200"/>
        <AiFillTwitterSquare className="w-6 h-6  bg-gray-100 p-1 rounded-sm
         hover:text-red-200"/>
        <AiFillGithub className="w-6 h-6 md:w-8 0 bg-gray-100 p-1 rounded-sm
         hover:text-red-200"/>
        </div>
        </div>
    </div>
)}
export default Footer;