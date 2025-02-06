
import { useForm } from "react-hook-form";

export default function SignUp() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    console.log(errors);

    return (
        <form
            onSubmit={handleSubmit((data) => {
                console.log(data);
            })}
            className="min-h-screen flex
            items-center justify-center font-mono
            bg-gray-700
            ">
            <div className="flex shadow-2xl">
                <div className="flex flex-col items-center
                justify-center text-center p-20 gap-8
                bg-white rounded-2xl
                xl:rounded-tr-none xl:rounded-br-none">
                    <h1 className="text-5xl font-bold">Sign Up</h1>
                    <p>All fields are required.</p>

                    <div className="flex flex-col text-2xl
                    text-left gap-1">

                        <span>First Name</span>

                        <input type="text"
                               {...register("firstName", {
                                   required: "*This is required",
                                   minLength: {
                                       value: 1,
                                       message: "Field was left empty."
                                   }
                               })}
                               className="rounded-md
                               p-1 border-2 outline-none
                               focus:border-cyan-400 focus:bg-slate-50"
                        />
                        <p className="text-sm text-red-500">
                            {errors.firstName?.message}</p>
                    </div>

                    <div className="flex flex-col text-2xl
                    text-left gap-1">

                        <span>Last Name</span>

                        <input type="text"
                               {...register("lastName", {
                                   required: "*This is required",
                                   minLength: {
                                       value: 1,
                                       message: "Field was left empty."
                                   }
                               })}
                               className="rounded-md
                               p-1 border-2 outline-none
                               focus:border-cyan-400 focus:bg-slate-50"
                        />

                        <p className="text-sm text-red-500">
                            {errors.lastName?.message}</p>
                    </div>

                    <div className="flex flex-col text-2xl
                    text-left gap-1">

                        <span>Birthday</span>

                        <input type="text"
                               {...register("birthday", {
                                   required: "*This is required",
                                   minLength: {
                                       value: 1,
                                       message: "Field was left empty."
                                   }
                               })}
                               className="rounded-md
                               p-1 border-2 outline-none
                               focus:border-cyan-400 focus:bg-slate-50"
                        />

                        <p className="text-sm text-red-500">
                            {errors.birthday?.message}</p>
                    </div>

                    <div className="flex flex-col text-2xl
                    text-left gap-1">

                        <span>Phone Number</span>

                        <input type="text"
                               {...register("phoneNumber", {
                                   required: "*Does not match the format XXX-XXX-XXXX",
                                   pattern: /^\d{3}-\d{3}-\d{4}$/
                               })}
                               placeholder="xxx-xxx-xxxx"
                               className="rounded-md
                               p-1 border-2 outline-none
                               focus:border-cyan-400 focus:bg-slate-50"
                        />

                        <p className="text-sm text-red-500 max-w-64">
                            {errors.phoneNumber?.message}</p>
                    </div>

                    <div className="flex flex-col text-2xl
                    text-left gap-1">

                        <span>Email</span>

                        <input type="text"
                               placeholder="ex. twistedspur67@gmail.com"
                               {...register("email", {
                                   required: "*This is required"
                               })}
                               className="rounded-md
                               p-1 border-2 outline-none
                               focus:border-cyan-400 focus:bg-slate-50"
                        />
                        <p className="text-sm text-red-500">
                            {errors.email?.message}</p>
                    </div>

                    <div className="flex flex-col text-2xl
                    text-left gap-1 text-wrap">

                        <span>Password</span>

                        <input type="password"
                               {...register("password", {
                                   required: "*Does not meet the password criteria.",
                                   pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/
                               })}
                               className="rounded-md
                               p-1 border-2 outline-none
                               focus:border-cyan-400 focus:bg-slate-50"
                        />
                        <p className="text-sm text-red-500">
                            {errors.password?.message}</p>
                        <span className="text-sm max-w-64">
                            Must be at least 8 characters and
                            include at least 1 number and special character.</span>
                    </div>

                    <button className="px-10 py-2 rounded-md
                    bg-gradient-to-r bg-blue-500
                    hover:bg-orange-600
                    text-white">Submit</button>
                </div>
            </div>
        </form>
    )
}