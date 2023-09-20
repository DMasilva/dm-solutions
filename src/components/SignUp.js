import React from 'react'

const SignUp = () => {
  return (
    <div>
        <form>
            <div>
            <label>username</label>
            <input type='text'/>
            </div>
            <div>
            <label>password</label>
            <input type='password'/>
            </div>
            <div>
                <input type='submit' value='login'/>
            </div>
        </form>
    </div>
  )
}

export default SignUp
