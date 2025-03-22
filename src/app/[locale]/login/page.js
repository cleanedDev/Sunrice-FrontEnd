'use client'
import React from "react";
import { useForm } from "react-hook-form"
import { login } from "@/api/fetch/routes";
import { useLocale} from 'next-intl';

function Login(){

    
     const locale = useLocale(); 
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm()

      const onSubmit = async (data)=>{
        // console.log(data)
         await login(data, locale)
        reset()
      }

    return(
        <>
    <main>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">
                <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800">Sunrise Admin</h2>
                <p className="text-gray-600 mt-2">Inicia sesion</p>
                </div>

                    <form  className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email address
                            </label>
                            <div className="relative">
                            
                            <input
                                type="text"
                                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="user"
                                {...register("user", { required: true })}
                            />
                            {errors.usuario && <p className="text-red-500 text-center">Ingresa tu usuario</p>}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                            </label>
                            <div className="relative">
                            <input
                                type="password"
                                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="••••••••"
                                {...register("password", { required: true })}
                                
                            />
                            {errors.password && <p className="text-red-500 text-center">Ingresa tu password</p>}
                            </div>
                        </div>


                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                        >
                            Sign in
                        </button>
                    </form>

        
            </div>
        </div>
    </main>
        </>
    )
}

export default Login;