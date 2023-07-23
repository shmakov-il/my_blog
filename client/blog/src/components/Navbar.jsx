import React from 'react';
import {NavLink, Link} from 'react-router-dom'

const Navbar = () => {
    const activeStyle = {
        color: 'white',
    };

    const isAuth = false;

    return (
        <div className='flex justify-between items-center py-6 text-white text-sm'>
            <div className='flex justify-center items-center bg-gray-500 w-11 h-9 rounded-sm'>Blog</div>
            {
                isAuth && (
                    <ul className='flex gap-10 justify-between items-center text-gray-400'>
                        <li className='hover:text-white'>
                            <NavLink to="/"
                                     style={({isActive}) => isActive ? activeStyle : undefined}>Главная</NavLink>
                        </li>
                        <li className='hover:text-white'>
                            <NavLink to="/posts"
                                     style={({isActive}) => isActive ? activeStyle : undefined}>Мои посты</NavLink>
                        </li>
                        <li className='hover:text-white'>
                            <NavLink to="/new"
                                     style={({isActive}) => isActive ? activeStyle : undefined}>Создать пост</NavLink>
                        </li>
                    </ul>
                )
            }
            {
                isAuth ? <button className='flex justify-center items-center bg-gray-500 rounded-sm py-2 px-3 hover:bg-gray-400'>
                    Выйти
                </button> : <Link to='/login'
                                  className='hover:text-gray-400'>Войти</Link>

            }

        </div>
    );
};

export default Navbar;