import React, { useState , useRef} from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import "../index.css";


const NumericKb = (props) => {

    
  
  const [input, setInput] = useState({});
  const [layoutName, setLayoutName] = useState("default");
  const [inputName, setInputName] = useState("default");


const keyboard = useRef();

const onChangeAll = input => {
  /**
   * Here we spread the inputs into a new object
   * If we modify the same object, react will not trigger a re-render
   */
  setInput({ ...input });
  console.log("Input changed", input);
  props.onChange(input.default)
  //localStorage.setItem('input', JSON.stringify(input))
  
};

const handleShift = () => {
  const newLayoutName = layoutName === "default" ? "shift" : "default";
  setLayoutName(newLayoutName);
};

const onKeyPress = button => {
  console.log("Button pressed", button);

  /**
   * If you want to handle the shift and caps lock buttons
   */
  if (button === "{shift}" || button === "{lock}") handleShift();
};

function onChangeInput(event){
  const inputVal = event.target.value;
  console.log("inputVal", inputVal);
  //setInput(inputVal);

  //keyboard.current.setInput(inputVal);
};

const getInputValue = () => {
  return input[inputName] || "";
};




  return (
    <>
              
      <div className="pb-2">
        <input className="hidden shadow appearance-none border rounded w-full py-2 px-1 text-black" 
            id="default"
            value={getInputValue()}
            onFocus={() => setInputName("default")}
            onChange={onChangeInput} 
        />
        {/* buttons: "1 2 3 4 5 6 7 8 9 {shift} 0 {bksp}" */}
        <Keyboard
        keyboardRef={r => (keyboard.current = r)}
        inputName={inputName}
        layoutName={layoutName}
        onKeyPress={onKeyPress}
        onChangeAll={onChangeAll}
        theme={"hg-theme-default hg-layout-numeric numeric-theme myTheme gap-0"}
        buttonTheme= {[
          {
            class: 'hg-red',
            buttons: "1 2 3 4 5 6 7 8 9 0 "
          },
          {
            class: 'shifted',
            buttons: "! / # $ % ^ & * ( ) + "
          },
          {
            class: 'hg-side',
            buttons: "{shift} {bksp}"
          }
        ]}
        layout={{
          'default': ["1 2 3", "4 5 6", "7 8 9", "{shift} 0 {bksp}"],
          'shift': ["! / #", "$ % ^", "& * (", "{shift} ) +"],
          'alpha': [
            '` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
            '{tab} q w e r t y u i o p [ ] \\',
            '{lock} a s d f g h j k l ; \' {enter}',
            '{shift} z x c v b n m , . / {shift}',
            '.com @ {space}'
          ],
          'shiftAlpha': [
            '~ ! @ # $ % ^ & * ( ) _ + {bksp}',
            '{tab} Q W E R T Y U I O P { } |',
            '{lock} A S D F G H J K L : " {enter}',
            '{shift} Z X C V B N M < > ? {shift}',
            '.com @ {space}'
          ]
        }}
        display={{
          '{bksp}': 'DEL',
          '{enter}': '< enter',
          '{shift}': 'SHIFT',
          '{s}': 'shift',
          '{tab}': 'tab',
          '{lock}': 'caps',
          '{accept}': 'Submit',
          '{space}': ' ',
          '{//}': ' '
        }}
        
        />


      </div>
        
    </>
  );
};

export default NumericKb;