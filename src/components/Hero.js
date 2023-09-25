import React from 'react'

const Hero = () => {
    const image='https://lh3.googleusercontent.com/pw/AIL4fc8aOBrgEVpsMx0-1-wL-tl1017EBr4EBJUSp7g-ESX5hbvlCkK160VXL2Cz-HN-qZTmasETS4t-lbEuPLTrMmofzEeyAev4e--IKuuaO5725nJpQBOPOrTrGIgT3QogWs0RDAFyuNT2sGu4gfZ_B-KlpubZoLijaoMdDYzj_kArYri_dAPMf0PnmoAyUjMa98AA9tAJ2edw5xKlV-SsYJlXCqmx_PT7fAJ2TAPswK5XIBFtQEwITOLBRisoScPRJA7zIJpgM2uYlTr3k_oLnjQKKfaVKd4VbxwexoRh9W_bFKkoB7sI6Tqp66g9eepeJ_Tw3110HkcTAmAroh7XpGFxgyUfgL2_eb3ZRoVdkqEEbnqFL2S7e03T23xXqz4-EZjLY3NZ-DIgKtyzWVKYK5HQnzvPbLS4ufh68dVzqQOsyRe0X26G8WubhOrCHmeYYM4gwabwTBd-Z8dnB5jAjbqQ-gBrqnh1ITUF6T07B7fQJcJb74SsiG3xGDeeprVLNi9vfdJ3UQd7mkssbOuZaZkZHGtHb-19-L0BtJpdp-poZ2siXZeDiVSOHH-M5Av13oS73DlqlBLDQ9VcS-ja5KtL5KKLZQPUpY0zWNe9PM0PkFUMfXz-Wt9iV5Xp5iPKSOM8G482dYWVn9hEMUg9GMd1r9PUxLr40YY0mb-ROe3QvOMmPmFRkNnaORmzm_JTBrAm9-1BUbuB1jF-dq6rKMXgGPyBhPPuZLMJfK1vFQ63sOvBAT1ENHAtCBEiqohmUYRddGwg4M0gOhEvs7PzxbOBROWTrwLkrJ13PL3R5wWQu0e8yEvwME16xrjcebTPfKP2W1XjeqBYkY-kltuPj4WdKbBtpr5iT3jMIdrI0iDPRk_2qls6A1Ukb3jH-slEtCK6ewK5nGlUSxViqaHM9Gp8sFA=w740-h555-s-no?authuser=0'
  return (
    <div className='mx-1 md:mx-2 mt-2'>
        <div className='w-full h-30 md:h-96 bg-blue-200'>
            <img className='w-full h-full overflow-hidden md:object-cover' src={image} alt='picture of Masilva' />
        </div>
    </div>
  )
}

export default Hero
