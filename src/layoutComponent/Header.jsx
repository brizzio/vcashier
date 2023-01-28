import React , { useState }from 'react'
import { Link } from 'react-router-dom'
import { languages } from '../lexicon'
//https://blog.logrocket.com/getting-started-react-select/
import Select from 'react-select'

function Header() {

  const [selected, setSelected] = useState(null);

  const options = languages.map(lang =>{
    return { value: lang.lid , label: lang.flag }
  })

  const customStyles = {
    
    control: (defaultStyles) => ({
      ...defaultStyles,
      backgroundColor: "transparent",

      padding: "2px",
      border: "none",
      boxShadow: "none",
    }),

    option: (defaultStyles, state) => ({
      ...defaultStyles,
      color: state.isSelected ? "#212529" : "#fff",
      backgroundColor: state.isSelected ? "#afe1f0" : "#ffffff",
    }),

    singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#fff" }),
  };

  console.log(options)

  const handleChange = (selectedOption) => {
    setSelected(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };

  return (
    <article className='flex items-center justify-between box-border border-b-2 border-zinc-200 w-full h-10'>
         
        <div  className='font-sans text-xs text-black  p-1 px-3 max-h-5/6 text-lg font-bold'>
          <img src='/marel-logo.png'
          className="h-8 p-1"
          />
          </div>
        

        <ul className='flex flex-row items-center gap-8 mr-4 text-cyan-900 '>
            <li>
            <Link to="/regular"
            className='font-sans text-xs text-inherit p-1 px-3 max-h-5/6'>Prezzi Regolari
            </Link>
            </li>
            <li>
            <Link to="/promo"
             className='font-sans text-xs text-inherit p-1 px-3 max-h-5/6'>Prezzi Promozionali
            </Link>
            </li>
            <li>
            <Link to="/admin"
             className='font-sans text-xs text-inherit p-1 px-3 max-h-5/6'>Amministrativo</Link>
            </li>
            <li>
            <Link to="/user"
             className='font-sans text-xs text-inherit p-1 px-3 max-h-5/6'>Utente</Link>
            </li>
            <Select className='h-5/6'
              defaultValue = {
                options.filter(option => 
                   option.value === 'it')
             }
              onChange={handleChange} 
              autoFocus={false}
              options={options}
              styles={customStyles}
              formatOptionLabel={opt => (
                <div className="w-fit">
                  <img src={opt.label} alt="country-flag" />
                </div>
              )}
            />  
        </ul>
        
        
    </article>
  )
}

export default Header