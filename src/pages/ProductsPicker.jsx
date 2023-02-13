import React, { useState , useRef} from "react";
import {useLocation, useNavigate} from 'react-router-dom';
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import Button from "../customUi/Button";



const ProductsPicker = (props) => {

    const location = useLocation();
    const navigate = useNavigate();

    
    
    const [showKeyboard, setShowKeyboard] = useState(false);
    const [inputs, setInputs] = useState({});
    const [layoutName, setLayoutName] = useState("default");
    const [inputName, setInputName] = useState("default");


  const keyboard = useRef();

  const handleSubmit = () => {
    //Prevent page reload
    //event.preventDefault();
    console.log('inputs', inputs)
    props.save(inputs)
    
    //clean-up
   
       
  };


  const onChangeAll = inputs => {
    /**
     * Here we spread the inputs into a new object
     * If we modify the same object, react will not trigger a re-render
     */
    setInputs({ ...inputs });
    //console.log("Inputs changed", inputs);
    localStorage.setItem('productPicked', JSON.stringify(inputs))
   
  };

  const handleShift = () => {
    const newLayoutName = layoutName === "default" ? "shift" : "default";
    setLayoutName(newLayoutName);
  };

  const onKeyPress = button => {
    //console.log("Button pressed", button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") handleShift();
  };

  const onChangeInput = event => {
    const inputVal = event.target.value;

    setInputs({
      ...inputs,
      [inputName]: inputVal
    });

    keyboard.current.setInput(inputVal);
  };

  const getInputValue = inputName => {
    return inputs[inputName] || "";
  };

  const ListItem = ({item})=>{

    let {upc, 
        name, 
        image, 
        departament,
        currency,
        regularPrice,
        promoType} = item

    let price = currency + " " + regularPrice

    return (
    <div>
       <div id="app" className="relative bg-white w-56 h-32 p-2 rounded shadow-md flex card text-grey-darkest">
            <div className="absolute -ml-5 -mt-4 pr-2 text-2xl">
                {promoType>0 && <i className="fa-solid fa-certificate text-yellow-500"></i>}
            </div>
            <img className="object-none w-1/6 h-full rounded-l-sm" src={image} alt="product image"/>
            <div className="w-full flex flex-col">
                <div className="pl-4 pb-0 flex-1 w-44">
                    <span>{upc}</span>
                    <p className="font-light mb-1 text-grey-darkest text-sm break-normal leading-3 ">{name}</p>
                    <div className="text-xs flex items-center mb-4">
                      
                      <span>{departament}</span>
                    </div>
                   
                    <div className="flex items-center">
                       
                        <div className="absolute ">
                            <span className="text-xl text-grey-darkest ">{price}</span>
                        </div>
                    </div>
                </div>
              
              
            </div>
          
           
        </div>
      
    </div>)
  }


  return (
        
    <div className="relative h-full w-full">
        <div className=" h-full border-2 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none overflow-visible">
          <div className="flex items-start justify-between min-h-4 p-3 border-b border-solid border-gray-300 rounded-t ">
            <h3 className="text-xl font=semibold">{props.buttonText}</h3>
            <Button variant="main" size="small" className="min-w-9" onClick={() => setShowKeyboard(s=>!s)}>TASTIERA</Button>
            <button
              className="bg-transparent border-0 text-black float-right"
              onClick={() => navigate(-1)}
            >
            <span className="text-black opacity-7 h-6 w-6 text-xl block py-0 ">
              X
            </span>
            </button>
            
            </div>
            <div className="h-3/6">

                <div className="h-full w-full grid grid-cols-5 gap-4 overflow-y-auto overflow-hidden relative p-6 ">

                    {Array.from(location.state).map((data,i) => {
                      return <ListItem 
                              item={data}
                              key={i}
                              onClick={()=>console.log('item clicked:', i)}/> 
                               
                    })}
                
                </div>

            </div>
              
                
            </div>
            {showKeyboard?
                  <div style={{ 
                    position:'absolute',
                    display:'flex', 
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'center' , 
                    width: '100%',
                    height:'240px',
                    bottom:'0px',
                    left: '0',
                    overflow:'visible'
                    }}>
                    
                    <Keyboard
                    keyboardRef={r => (keyboard.current = r)}
                    inputName={inputName}
                    layoutName={layoutName}
                    onChangeAll={onChangeAll}
                    onKeyPress={onKeyPress}
                      
                      />
                      
                  </div>:null
                  }
        </div>
      
   
    );
  };
  
  export default ProductsPicker;