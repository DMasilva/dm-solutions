import React from 'react'

const Login = () => {
  return (
    <div>
        <form className='border-4 h-[400px] w-[300px] m-auto rounded-md items-center overflow-hidden'>
            <div className='test'>
            <label>username</label>
            <input className='border-4' type='text'/>
            </div>
            <div>
            <label>password</label>
            <input type='password'/>
            </div>
            <div className='test2'>
                <input type='submit' value='login'/>
            </div>
        </form>
        <form className='border-4 h-[400px] w-[300px] m-auto rounded-md items-center overflow-hidden'>
            <div className='test'>
            <label>username</label>
            <input className='border-4' type='text'/>
            </div>
            <div>
            <label>password</label>
            <input type='password'/>
            </div>
            <div className='test2'>
                <input type='submit' value='login'/>
            </div>
        </form>
        

    </div>
  )
}

export default Login
