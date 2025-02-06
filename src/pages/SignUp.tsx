
export default function SignUp() {
    return (
        <section className="min-h-screen flex
        items-center justify-center font-mono
        bg-gray-700
        ">
            <div className="flex shadow-2xl">
                <div className="flex flex-col items-center
                justify-center text-center p-20 gap-8
                bg-white rounded-2xl
                xl:rounded-tr-none xl:rounded-br-none">
                    <h1 className="text-5xl font-bold">Sign-In</h1>

                    <div className="flex flex-col text-2xl
                    text-left gap-1">
                        <span>Email</span>
                        <input type="text" className="rounded-md
                        p-1 border-2 outline-none
                        focus:border-cyan-400 focus:bg-slate-50"
                        />
                    </div>

                    <div className="flex flex-col text-2xl
                    text-left gap-1">
                        <span>Password</span>
                        <input type="password" className="rounded-md
                        p-1 border-2 outline-none
                        focus:border-cyan-400 focus:bg-slate-50"
                        />
                    </div>

                    <div className="flex gap-1 items-center">
                        <input type="checkbox" />
                        <span className="text-base">Remember Email</span>
                    </div>

                    <button className="px-10 py-2 rounded-md
                    bg-gradient-to-r bg-blue-500
                    hover:bg-orange-600
                    text-white">Login</button>

                    <p className="font-semibold">Don't have an
                        account? <a href="#" className="
                        text-blue-400 hover:underline">
                            Sign Up</a></p>
                </div>
                <img src={"/twisted-spur-logo.png"} alt="" className='
                bg-amber-700
                w-[450px] object-cover xl:rounded-tr-2xl
                xl:rounded-br-2xl
                xl:block hidden
                '/>
            </div>
        </section>
    )
}