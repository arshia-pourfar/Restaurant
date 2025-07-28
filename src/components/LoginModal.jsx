import avatar from '../images/avatar.svg';
import bg from '../images/bg.svg';
import wave from '../images/wave.png';
import { FaRegCircleXmark } from 'react-icons/fa6';

const Modal = ({ modalStatus, onClose }) => {
    if (!modalStatus) return null;

    return (
        <>
            <div className={`fixed flex top-0 left-0 w-screen h-screen bg-[#22181862] items-center justify-center`} onClick={onClose} ></div>

            <div className='fixed left-[7.5%] top-[7.5%] w-[85%] h-[85%] flex items-center justify-center'>
                <div className="relative w-full h-full bg-white rounded-md shadow-lg overflow-hidden">
                    <div className="absolute top-6 right-6 text-6xl cursor-pointer text-red z-50" onClick={onClose}>
                        <FaRegCircleXmark />
                    </div>
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex gap-6 text-xl font-bold z-50">
                        <h3 className="border-b-4 border-red px-4 py-2 cursor-pointer">Sign Up</h3>
                        <h3 className="border-b-4 border-red px-4 py-2 cursor-pointer">Login</h3>
                    </div>
                    <img src={wave} alt='login' className="absolute h-full w-full object-cover opacity-20 z-0" />
                    <div className="grid grid-cols-2 gap-[7rem] px-8 w-full h-full items-center z-10 relative">
                        <div className="flex justify-end items-center">
                            <img src={bg} alt='login' className="w-[470px] -left-12 relative z-10" />
                        </div>
                        <div className="flex justify-start items-center">
                            <form className="w-[360px] mt-20 relative z-10">
                                <img src={avatar} alt='login' className="h-[100px] mx-auto" />
                                <h2 className="text-5xl font-semibold text-gray-800 uppercase text-center my-4">Welcome</h2>

                                {/* Username */}
                                <div className="relative border-b-2 border-gray-300 py-1 grid grid-cols-[7%_93%] items-center mb-6">
                                    <div className="text-gray-400 flex justify-center items-center text-2xl">
                                        <i className="fas fa-user" />
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="name-input"
                                            required
                                            className="w-full border-none outline-none bg-transparent peer focus:ring-0 focus:bg-transparent peer-valid:bg-transparent"
                                        />
                                        <label
                                            htmlFor="name-input"
                                            className="absolute left-2 top-[10px] text-gray-500 font-semibold transition-transform peer-focus:translate-y-[-24px] peer-focus:scale-[0.83] peer-valid:translate-y-[-20px] peer-valid:scale-[0.83]"
                                        >
                                            Username
                                        </label>
                                    </div>
                                </div>

                                {/* Password */}
                                <div className="relative border-b-2 border-gray-300 py-1 grid grid-cols-[7%_93%] items-center mb-6">
                                    <div className="text-gray-400 flex justify-center items-center text-2xl">
                                        <i className="fas fa-lock" />
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="password"
                                            id="pass-input"
                                            required
                                            className="w-full border-none outline-none bg-transparent peer focus:ring-0 focus:bg-transparent peer-valid:bg-transparent"
                                        />
                                        <label
                                            htmlFor="pass-input"
                                            className="absolute left-2 top-[10px] text-gray-500 font-semibold transition-transform peer-focus:translate-y-[-24px] peer-focus:scale-[0.83] peer-valid:translate-y-[-20px] peer-valid:scale-[0.83]"
                                        >
                                            Password
                                        </label>
                                    </div>
                                </div>

                                <div
                                    className="font-medium text-right text-base text-gray-500 hover:text-red transition-colors mb-4 cursor-pointer"
                                >
                                    Forgot Password?
                                </div>

                                <input
                                    type="submit"
                                    value="Login"
                                    className="w-full h-[55px] rounded-full bg-gradient-to-r from-red to-red/80 text-white text-[1.3rem] tracking-[3px] uppercase font-semibold cursor-pointer transition-all duration-500 hover:bg-[position:right]"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Modal;