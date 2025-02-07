import { useForm } from "react-hook-form";
import { UserDto } from "../dtos/UserDto.ts";
import userService from "../services/UserService.tsx";
import {useNavigate} from "react-router-dom";

export default function SignUp() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const navigate = useNavigate();

    console.error(errors);

    return (
        <form
            onSubmit={handleSubmit(async (data) => {
                console.log(data);
                const userDTO: UserDto = {} as UserDto;
                userDTO.firstName = data.firstName;
                userDTO.lastName = data.lastName;
                userDTO.birthday = data.birthday;
                userDTO.phoneNumber = data.phoneNumber;
                userDTO.email = data.email;
                userDTO.passwd = data.password;
                userDTO.isAdmin = false;

                try {
                    await userService.signup(userDTO);
                    navigate("/");
                } catch (err) {
                    alert("Signup failed. Please try again.");
                }
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
                                       message: "*This is required"
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
                                       message: "*This is required"
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
                               placeholder="YYYY-MM-DD"
                               {...register("birthday", {
                                   required: "*Invalid date or does not match the format YYYY-MM-DD",
                                   pattern: {
                                       value: /^(19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/,
                                       message: "*Invalid date or does not match the format YYYY-MM-DD"
                                   }
                               })}
                               className="rounded-md
                               p-1 border-2 outline-none
                               focus:border-cyan-400 focus:bg-slate-50"
                        />

                        <p className="text-sm text-red-500 max-w-64">
                            {errors.birthday?.message}</p>
                    </div>

                    <div className="flex flex-col text-2xl
                    text-left gap-1">

                        <span>Phone Number</span>

                        <input type="text"
                               {...register("phoneNumber", {
                                   required: "*Does not match the format XXX-XXX-XXXX",
                                   pattern: {
                                       value: /^\d{3}-\d{3}-\d{4}$/,
                                       message: "*Does not match the format XXX-XXX-XXXX"
                                   }
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
                                   pattern: {
                                       value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
                                       message: "*Does not meet the password criteria."
                                   }
                               })}
                               className="rounded-md
                               p-1 border-2 outline-none
                               focus:border-cyan-400 focus:bg-slate-50"
                        />
                        <p className="text-sm text-red-500">
                            {errors.password?.message}</p>
                        <span className="text-sm max-w-64">
                            Must be at least 8 characters and
                            include at least 1 number and special
                            character (!@#$%^&*).</span>
                    </div>

                    <input type="submit"
                           value="Submit"
                           className="px-10 py-2 rounded-md
                           bg-gradient-to-r bg-blue-500
                           hover:bg-orange-600
                           text-white" />
                </div>
            </div>
        </form>
    )
}