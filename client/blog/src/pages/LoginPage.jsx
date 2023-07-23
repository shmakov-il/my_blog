import React from 'react';
import {Link} from "react-router-dom";

const LoginPage = () => {
    return (
        <form className='mx-auto w-1/4 h-60 mt-40'
              onSubmit={e => e.preventDefault()}>
            <h3 className='text-center text-2xl text-white'>Авторизация</h3>
            <label className='text-xs text-gray-400 block mt-2'>
                Логин:
                <input type="text"
                placeholder='username'
                className='w-full mt-1 py-2 px-4 rounded-lg outline-none text-xs text-black bg-gray-500 border placeholder:text-gray-400'/>
            </label>
            <label className='text-xs text-gray-400 block mt-4'>
                Пароль:
                <input type="password"
                       placeholder='password'
                       className='w-full mt-1 py-2 px-4 rounded-lg outline-none text-xs text-black bg-gray-500 border placeholder:text-gray-400'/>
            </label>
            <div className='flex justify-center items-center mt-4 gap-8'>
                <button type='submit'
                        className='text-xs text-white rounded-lg py-2 px-3 bg-gray-600 hover:bg-gray-500'>Войти</button>
                <Link to='/register'
                      className='text-xs text-white hover:text-gray-500'>
                    Нет аккаунта?
                </Link>
            </div>
        </form>
    );
};

export default LoginPage;