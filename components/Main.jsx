import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
    return (
        <div className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center sm:px-4 xl:px-0">
                <div>
                    <p className="uppercase text-sm tracking-widest text-gray-600">
                        LET'S BUILD SOMETHING TOGETHER
                    </p>
                    <h1 className="py-4 text-gray-700">
                        Hi, I'm <span className="text-[#5651e5]">Guillermo Aguilar</span>
                    </h1>
                    <h1 className="py-2 text-gray-700">A Front-End Web Developer</h1>
                    <p className="py-4 text-gray-600 max-w-[70%] m-auto">
                        I'm a front-end web developer specializing in building (and
                        occasionally designing) exceptional digital experience. Currently,
                        I'm focused on building responsive front-end web applications while learning back-end technologies.
                    </p>
                    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200">
                            <FaLinkedinIn />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200">
                            <FaGithub />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200">
                            <AiOutlineMail />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200">
                            <BsFillPersonLinesFill/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
