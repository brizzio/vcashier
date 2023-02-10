import React, { useState , useRef, useEffect} from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import Button from '../customUi/Button'
import Bill from '../customUi/Bill'
import Coin from '../customUi/Coin';
//import { MoneyHand } from '@styled-icons/fluentui-system-regular'
//import { GiftCardMoney } from '@styled-icons/fluentui-system-filled'
//import { CreditCard2BackFill } from '@styled-icons/bootstrap'
//import { MoneyCheckDollar }  from '@styled-icons/fa-solid'
import NumericKb from "../components/NumericKb";




const CloseCart = (props) => {

   
    const [showModal, setShowModal] = useState(false);
    const [view, setView] = useState('default');
    const [closeCartItems, setCloseCartItems] = useState([])
    
    const changeView = (newView) => 
    {
      console.log('setView ', newView)
      setView(newView)
    }

    const goBack = () => 
    {
      console.log('go back ')
      setView('default')
    }

    const closeModal = () => setShowModal(false)

    const getItems = async() => {
      const items = JSON.parse(localStorage.getItem('items'));
      if (items) {
        console.log('closeCart items: ', items)
        
      };
      return items
    }


    const show = async()=>{

      let itemsList = await getItems()
      setCloseCartItems(itemsList)
      setShowModal(true)
    }
    

    return (
      <>
        <Button variant="primary" size="small" className="h-12 w-full" onClick={() => show() }>{props.buttonText}</Button>
        
        {showModal ? (
          <>
          <div id="modal-bg" className="flex flex-col h-screen w-screen justify-start items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-slate-300">
            <div className="flex w-5/6 h-[36rem] justify-center items-center overflow-x-hidden overflow-y-hidden outline-none focus:outline-none mt-3 shadow">
              <div className="relative border-2 h-full my-6 mx-auto w-full">

                <div className=" h-full border-2 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none overflow-visible">

                  <div className="flex items-start justify-between min-h-4 p-3 border-b border-solid border-gray-300 rounded-t ">
                    <h3 className="text-xl font=semibold">{props.buttonText}</h3>
                    
                    <button
                      className="bg-transparent border-0 text-black float-right"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="text-black opacity-7 h-6 w-6 text-xl block py-0 ">
                        X
                      </span>
                    </button>
                    
                  </div>
                      
                        {view === 'default' && <Default change={changeView}/>}

                        {view === 'cash' && <Cash title='Pagamento in Contanti'
                                                  items={closeCartItems}
                                                  back={goBack}
                                                  close={closeModal}
                        />}
                        {view === 'bancomat' && <Bancomat title='Bancomat o Carte da Credito'
                                                  back={goBack}
                                                  close={closeModal}
                        /> }

                        {view === 'bonus' && <Bonus title='Carte Bonus o Gift Cards'
                                                  back={goBack}
                                                  close={closeModal}
                        /> }

                        {view === 'other' && <Other title='Diverse forme di pagamento'
                                                  back={goBack}
                                                  close={closeModal}
                        /> }
                          
                      
                       
                    </div>
                    
                </div>
              </div>
                
            </div>
          </>
        ) : null}
      </>
    );
  };
  


  const Default = (props) =>{

    return(
    <div className="relative p-6 flex flex-row h-4/6 mt-8 gap-4">
      <Card 
        view='cash'
        icon='fa-solid fa-hand-holding-dollar fa-3x'
        title='Pagamento in Contanti'
        text='Registrare il pagamento con uso di moneta corrente:'
        onClick={props.change}

        
      />
      <Card 
        view='bancomat'
        icon='fa-solid fa-credit-card fa-3x'
        title='Bancomat o Carte da Credito'
        text='Procedere il pagamento presso il POS:'
        onClick={props.change}
        
      />
      <Card 
        view='bonus'
        icon='fa-solid fa-gifts fa-3x'
        title='Carte Bonus o Gift Cards'
        text="Pagare il conto con l'uso di bonifiche o carte pre-pagate"
        onClick={props.change}
        
      />
      <Card 
        view='other'
        icon='fa-solid fa-money-check-dollar fa-3x'
        title='Diverse forme di pagamento'
        text='Effetuare il pagamento usando altri metodi di pagamento:'
        hyperlink='Seleziona diversa forma di pagamento'
        onClick={props.change}
      />
    </div>

    )

  }

  const Cash = (props) =>{

    

    const [bills, setBills] = useState({})
    const [amount, setAmount] = useState(0)
    const [moneyTotal, setMoneyTotal] = useState(0)
    const [change, setChange] = useState(0)
    const [reset,setReset] = useState(false)
    const [showSplit, setShowSplit] = useState(false)

    const toPay = useRef(null)
    const given = useRef(null)
    
    useEffect(()=>{
        let sum = props.items.reduce((a, c, i, arr) => { /* … */ 
        return Number(a) + Number(c['calculatedPrice'])
        }, 0)

        console.log('amount', sum)
        setAmount(sum)
    },[]);
   


    useEffect(() => {

      //console.log(" >> bills changed! --", bills);
      setMoneyTotal((total(bills)))
      
      
    }, [bills]);

    useEffect(() => {

      console.log(" >> reset changed! --", reset);
     
      setReset(false)
      
    }, [reset]);

    useEffect(() => {

      //console.log(" >> money total  changed! --", moneyTotal)
      calculateChange()
      
    }, [moneyTotal]);

    function updateBills(bill, count){

      const obj ={[bill]:{face:bill, count:count, value: bill*count}}

      setBills(state => ({...state, ...obj}))

    }

    function updateCoins(face, coin, count){

      //console.log(" >> update coins  --", face, coin, count);

      const obj ={[face]:{face:face, count:count, value: coin/100*count}}

      setBills(state =>({...state, ...obj}))

    }

    function calculateChange(){

      let changeVal = moneyTotal - amount
      setChange(changeVal)

    }

    function total(obj){
      let sum = 0
      
      for (const [k, v] of Object.entries(obj)) {
        //console.log(`${k}: ${v.value}`);
        sum = sum + parseFloat(v.value.toString())
      }
      //console.log(`moneyTotal = ${sum}`);
      //console.log(`toPay = ${toPay.current.value}`);
      //console.log(`given = ${given.current.value}`);
      //console.log(`change = ${change.current.value}`);
      return sum
      
    }

    function splitChange()
    {
       let amount = change
       let inventory = [

        {type:'bill', face:'200', value:200, quantity:100},
        {type:'bill', face:'100', value:100, quantity:100},
        {type:'bill', face:'50' ,value:50 ,quantity:100},
        {type:'bill', face:'20' ,value:20 ,quantity:100},
        {type:'bill', face:'10' ,value:10 ,quantity:100},
        {type:'bill', face:'5' ,value:5, quantity:100},        
        {type:'bill', face:'2' ,value:2 , quantity:100},        
        {type:'bill', face:'1' ,value:1 , quantity:100},       
        {type:'coin', face:'2€' ,value:2 ,quantity:100},
        {type:'coin', face:'1€' ,value:1 , quantity:100},
        {type:'coin', face:'50C', value:0.5, quantity:100},
        {type:'coin', face:'25C', value:0.25 , quantity:100},
        {type:'coin', face:'20C', value:0.20 , quantity:100},
        {type:'coin', face:'10C', value:0.10 , quantity:100},
        {type:'coin', face:'5C' ,value:0.05 , quantity:100 },        {type:'coin', face:'1C' ,value:0.01 , quantity:100 },     
         ]

         const filtered = inventory.filter(el => {
          return el.quantity > 0;
        });
      
      
        //let notes = [ 2000, 500, 200, 100, 50, 20, 10, 5, 1 ];
        let noteCounter = [];
        
        // count notes using Greedy approach
        console.log('splitting...', amount)
        for (let i = 0; i < filtered.length; i++) {
          console.log('amount >= filtered[i].value', amount >= filtered[i].value, i, filtered[i].value)
            if (amount >= filtered[i].value) {

                let obj ={
                  type:filtered[i].type, 
                  face:filtered[i].face, 
                }

                obj.count = Math.floor(amount / filtered[i].value);

                console.log('obj', obj)
                noteCounter[i] = obj;
                amount = amount % filtered[i].value;
                console.log('next amount value', amount)
            }
        }
        
        /* // Print notes
       document.write("Currency Count ->" + "<br/>");
        for (let i = 0; i < 9; i++) {
            if (noteCounter[i] != 0) {
                document.write(notes[i] + " : "
                    + noteCounter[i] + "<br/>");
            }
        } */
        let result = noteCounter.filter(el => el !== null);
        
        console.log('splitChange', result)
        
        const render=(r)=>{

          const listItems = r.map((el) =>{
            if(el.type === 'bill'){
             return <div className="flex flex-row items-center justify-start gap-2">
                <div>
                  <span className="text-3xl p-3">{el.count}</span>
                </div>

                <div className="relative z-0">
                  <svg width="93" height="46" viewBox="0 0 93 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M66 23C66 32.9411 57.7173 41 47.5 41C37.2827 41 29 32.9411 29 23C29 13.0589 37.2827 5 47.5 5C57.7173 5 66 13.0589 66 23ZM65 23C65 32.3632 57.191 40 47.5 40C37.809 40 30 32.3632 30 23C30 13.6368 37.809 6 47.5 6C57.191 6 65 13.6368 65 23Z" fill="black"/>
                    <path d="M23.4093 20.0038L22.7892 21.3346H17.3092C17.2959 21.5495 17.2892 21.7713 17.2892 22C17.2892 22.2287 17.2959 22.4505 17.3092 22.6654H22.25L21.6299 23.9962H17.4971C17.5803 24.3526 17.6885 24.6831 17.8217 24.9876C18.1767 25.7994 18.6597 26.4138 19.2708 26.8308C19.8819 27.2478 20.5694 27.4563 21.3333 27.4563C21.7288 27.4563 22.1017 27.4053 22.4522 27.3032C22.8072 27.2012 23.1375 27.0615 23.443 26.884C23.7531 26.7066 24.0384 26.507 24.299 26.2852L24.973 27.6692C24.5012 28.1084 23.9485 28.4411 23.315 28.6673C22.6814 28.8891 22.0208 29 21.3333 29C20.2279 29 19.2484 28.7161 18.3946 28.1483C17.5453 27.5805 16.8781 26.7731 16.3928 25.7262C16.1507 25.1991 15.9695 24.6224 15.8493 23.9962H14L14.4853 22.6654H15.6895C15.6775 22.4485 15.6716 22.2267 15.6716 22C15.6716 21.7733 15.6775 21.5515 15.6895 21.3346H14L14.4853 20.0038H15.8493C15.9695 19.3776 16.1507 18.8009 16.3928 18.2738C16.8781 17.2269 17.5453 16.4195 18.3946 15.8517C19.2484 15.2839 20.2279 15 21.3333 15C22.0478 15 22.7151 15.122 23.3352 15.366C23.9598 15.6099 24.5147 15.9582 25 16.4106L24.3529 17.7947C24.0654 17.5374 23.7621 17.3156 23.443 17.1293C23.124 16.943 22.7892 16.7988 22.4387 16.6968C22.0882 16.5947 21.7198 16.5437 21.3333 16.5437C20.5694 16.5437 19.8819 16.7522 19.2708 17.1692C18.6597 17.5862 18.1767 18.2006 17.8217 19.0124C17.6885 19.3169 17.5803 19.6474 17.4971 20.0038H23.4093Z" fill="black"/>
                    <path d="M78.4093 20.0038L77.7892 21.3346H72.3092C72.2959 21.5495 72.2892 21.7713 72.2892 22C72.2892 22.2287 72.2959 22.4505 72.3092 22.6654H77.25L76.6299 23.9962H72.4971C72.5803 24.3526 72.6885 24.6831 72.8217 24.9876C73.1767 25.7994 73.6597 26.4138 74.2708 26.8308C74.8819 27.2478 75.5694 27.4563 76.3333 27.4563C76.7288 27.4563 77.1017 27.4053 77.4522 27.3032C77.8072 27.2012 78.1375 27.0615 78.443 26.884C78.7531 26.7066 79.0384 26.507 79.299 26.2852L79.973 27.6692C79.5012 28.1084 78.9485 28.4411 78.3149 28.6673C77.6814 28.8891 77.0208 29 76.3333 29C75.2279 29 74.2484 28.7161 73.3946 28.1483C72.5453 27.5805 71.8781 26.7731 71.3928 25.7262C71.1507 25.1991 70.9695 24.6224 70.8493 23.9962H69L69.4853 22.6654H70.6895C70.6776 22.4485 70.6716 22.2267 70.6716 22C70.6716 21.7733 70.6776 21.5515 70.6895 21.3346H69L69.4853 20.0038H70.8493C70.9695 19.3776 71.1507 18.8009 71.3928 18.2738C71.8781 17.2269 72.5453 16.4195 73.3946 15.8517C74.2484 15.2839 75.2279 15 76.3333 15C77.0478 15 77.7151 15.122 78.3352 15.366C78.9598 15.6099 79.5147 15.9582 80 16.4106L79.3529 17.7947C79.0654 17.5374 78.7621 17.3156 78.443 17.1293C78.124 16.943 77.7892 16.7988 77.4387 16.6968C77.0882 16.5947 76.7198 16.5437 76.3333 16.5437C75.5694 16.5437 74.8819 16.7522 74.2708 17.1692C73.6597 17.5862 73.1767 18.2006 72.8217 19.0124C72.6885 19.3169 72.5803 19.6474 72.4971 20.0038H78.4093Z" fill="black"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.49976 43H85.001C85.001 43.0153 85 43.0306 85 43.046L89.4873 43.0931L89.4883 43H90V7.65369L90.0696 7.65405L90.0461 3H3V43.046L7.49976 43.0933V43ZM89 7.60754C86.718 7.39417 85.988 6.41467 86.0056 4H7.0459C7.06421 6.31946 6.31787 7.25317 4 7.4563V39.0107C6.31934 39.0077 7.26123 39.7389 7.45874 42H85.0588C85.3091 39.5723 86.3613 38.9064 89 39.0548V7.60754Z" fill="black"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.5 0.5V45.5H92.5V0.5H0.5ZM1 1H92V45H1V1Z" fill="black"/>
                    </svg>

                    <div className="absolute inset-0 flex justify-center items-center z-10">
                      <p className="text-normal font-bold">{el.face}</p>
                    </div>
                </div>
                
              </div>

            }else{
              return <div className="flex flex-row items-center justify-start">
                <div className="text-3xl p-3">
                  {el.count}
                </div>
                <div className="w-12 h-12 flex justify-center items-center border border-black rounded-full">
                  <p className="text-xl font-bold">{el.face}</p>
                </div>
                
              </div>

            }
          });

          return (
            <div className="ml-4 w-96 h-fit border-2 flex flex-col justify-center gap-2 ">
              {listItems}
              
            </div>


          )

          
        }
        return render(result)
    }
     
   

    return(
    <div className="flex flex-row h-full w-full">
      <div className="flex flex-col h-fit w-fit border-2 justify-center">
      <i className="fa-solid fa-hand-holding-dollar fa-3x p-4 "></i>
         
        
        <h5 className="w-5/6 m-4 text-xl text-center break-words	font-semibold  text-gray-900 ">{props.title}</h5>


        <div className="mt-6">
          <div className="mt-2">
            <label className=" ml-4 block mb-2 text-sm font-medium text-gray-900 "> Totale Spesa</label>
            <input type="text" ref={toPay} className="bg-gray-50 border border-gray-300 text-gray-900 text-xl font-semibold text-right rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 ml-4 p-3" placeholder="150,73" value={amount.toFixed(2)} readOnly/>
          </div>
          <div className="mt-2">
            <label className=" ml-4 block mb-2 text-sm font-medium text-gray-900 "> Incasso</label>
            <input type="text" ref={given} className="bg-gray-50 border border-gray-300 text-gray-900 text-xl font-semibold text-right rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 ml-4 p-3"  value={moneyTotal.toFixed(2)} readOnly/>
          </div>
          <div className="mt-2">
            <label className=" ml-4 block mb-2 text-sm font-medium text-gray-900 "> Scambio</label>
            <input type="text" id="change" className={`bg-gray-50 border border-gray-300 text-gray-900 text-xl font-semibold text-right rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 ml-4 p-3 ${change < 0 ? 'border-red-400' : 'border-green-400'}`}  value={change.toFixed(2)} readOnly/>
          </div>
        </div>



      </div>
      
      <div className="flex flex-col w-5/6 ">
      
        <div className="ml-4 w-full h-fit border-2 grid grid-cols-4 grid-flow-row gap-2 p-5 items-center justify-center">
          {!showSplit?
          <>
          <Bill face='200' value='200' update={updateBills} reset={reset}/>
          <Bill face='100' value='100' update={updateBills} reset={reset}/>
          <Bill face='50' value='50' update={updateBills} reset={reset}/>
          <Bill face='20' value='20' update={updateBills} reset={reset}/>
          <Bill face='10' value='10' update={updateBills} reset={reset}/>
          <Bill face='5' value='5' update={updateBills} reset={reset}/>
          <Bill face='2' value='2' update={updateBills} reset={reset}/>
          <Bill face='1' value='1' update={updateBills} reset={reset}/>
          <Coin face='2€' value='200' update={updateCoins} reset={reset}/>
          <Coin face='1€' value='100' update={updateCoins} reset={reset}/>
          <Coin face='50C' value='50' update={updateCoins} reset={reset}/>
          <Coin face='25C' value='25' update={updateCoins} reset={reset}/>
          <Coin face='20C' value='20' update={updateCoins} reset={reset}/>
          <Coin face='10C' value='10' update={updateCoins} reset={reset}/>
          <Coin face='5C' value='5' update={updateCoins} reset={reset}/>
          <Coin face='1C' value='1' update={updateCoins} reset={reset}/>
          </>:
          <>

            <div>
              {splitChange()}
            </div>
            
           
                    
          </>
            
          }
        </div>
        <div className="flex flex-row h-full items-center justify-end pr-4">
           <Button variant="primary" size="small" className={`h-10 w-40 mb-1  ml-3 ${showSplit?'hidden':''}`} onClick={() => (setReset(true))}>CANCELLA</Button>
           <Button variant="primary" size="small" className={`h-10 w-40 mb-1  ml-3 ${showSplit?'hidden':''}`} onClick={() => (true)}>APRIRE CASSETTO</Button>
           <Button variant="primary" size="small" className={`h-10 w-40 mb-1  ml-3 ${showSplit?'hidden':''}`} onClick={props.back}>INDIETRO</Button>
           <Button variant="primary" size="small" className={`h-10 w-40 mb-1  ml-3 disabled:opacity-25 ${showSplit?'hidden':''} `} disabled={change< 0 ? true : false} onClick={() => (setShowSplit(true))}>FINALIZZA</Button>
           <Button variant="primary" size="small" className={`h-10 w-46 mb-1  ml-3 ${!showSplit?'hidden':''}`} onClick={() => (props.close())}>CHIUDERE CASSETTO</Button>
        </div>
       
      </div>
    
    </div>
   

    )

  }

  const Bancomat = (props)=>{

    console.log(process.env.PUBLIC_URL + '/pos.gif')

    return(
    <>
    <div className="flex flex-row h-full w-full border-2">
      <div className="flex flex-col h-fit w-fit border-2 justify-center">
       
          {<CreditCard2BackFill className="w-full h-24 mb-2 text-gray-500 dark:text-gray-400" />}
        
        <h5 className="w-5/6 border-2 ml-4 text-xl text-center break-words	font-semibold  text-gray-900 dark:text-white">{props.title}</h5>


        <div className="flex flex-col mt-6 ">
          <div className="mt-2">
            <label className=" ml-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Totale Spesa</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-xl font-semibold text-right rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 ml-4 p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="150,73" required/>
          </div>
          <div className="mt-2">
            <label className=" ml-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Incasso</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-xl font-semibold text-right rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 ml-4 p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="150,73" required/>
          </div>
          <Button variant="primary" size="small" className="h-10 w-5/6 mb-1  mt-6 ml-3" onClick={() => (true)}>FINALIZZA</Button>
        </div>
      </div>
      <div className="flex flex-col h-full w-full border-2 items-center">
          <img className="w-[22rem] h-auto justify-center" src={'pos.gif'} alt='Profile'/>
          <div className="flex flex-row h-full items-center justify-end pr-4">
            <Button variant="primary" size="small" className="h-10 w-40 mb-1  ml-3" onClick={props.back}>INDIETRO</Button>
            <Button variant="primary" size="small" className="h-10 w-40 mb-1  ml-3" onClick={() => (true)}>ATTIVA IL POS</Button>
          </div>
      </div>
    </div>
    </>

    )
  }

  const Bonus = (props)=>{

    console.log( 'Bonus')

    return(
    <>
    <div className="flex flex-row h-full w-full border-2">
      <div className="flex flex-col h-fit w-fit border-2 justify-center">
       
          {<GiftCardMoney className="w-full h-24 mb-2 text-gray-500 dark:text-gray-400" />}
        
        <h5 className="w-5/6 border-2 ml-4 text-xl text-center break-words	font-semibold  text-gray-900 dark:text-white">{props.title}</h5>


        <div className="flex flex-col mt-6 ">
          <div className="mt-2">
            <label className=" ml-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Totale Spesa</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-xl font-semibold text-right rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 ml-4 p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="150,73" required/>
          </div>
          <div className="mt-2">
            <label className=" ml-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Incasso</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-xl font-semibold text-right rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 ml-4 p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="150,73" required/>
          </div>
          <Button variant="primary" size="small" className="h-10 w-5/6 mb-1  mt-6 ml-3" onClick={() => (true)}>FINALIZZA</Button>
        </div>
      </div>
      <div className="ml-4 w-full h-fit border-2 grid grid-cols-2 grid-flow-row gap-3">
        <div className="flex flex-col h-full w-full border-2 items-center">
          <div className="w-96 h-auto">
            <label className=" ml-4 block mb-2 text-xl font-medium text-gray-900 dark:text-white"> Inserire il codice della carta</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-xl font-semibold text-right rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-4 my-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="_" required/>
          
            <NumericKb />
          </div>
          
          <div className="flex flex-row h-full items-center justify-end pr-4">
            <Button variant="primary" size="small" className="h-10 w-40 mb-1  ml-3" onClick={props.back}>INDIETRO</Button>
            <Button variant="primary" size="small" className="h-10 w-40 mb-1  ml-3" onClick={() => (true)}>REGISTRA</Button>
          </div>
      </div>
        <div className="flex flex-col h-full w-full border-2 items-center">
          <div className="w-96 h-auto">
              <label className=" ml-4 block mb-2 text-xl font-medium text-gray-900 dark:text-white"> Dettagli</label>
              <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-xl font-semibold text-right rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-4 my-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="_" required/>
            
          </div>
        </div>
      </div>
    </div>
    </>

    )
  }

  const Other = (props)=>{

    console.log( 'Other')

    return(
    <>
    <div className="flex flex-row h-full w-full border-2">
      <div className="flex flex-col h-fit w-fit border-2 justify-center">
       
          {<MoneyCheckDollar className="w-full h-24 mb-2 text-gray-500 dark:text-gray-400" />}
        
        <h5 className="w-5/6 border-2 ml-4 text-xl text-center break-words	font-semibold  text-gray-900 dark:text-white">{props.title}</h5>


        <div className="flex flex-col mt-6 ">
          <div className="mt-2">
            <label className=" ml-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Totale Spesa</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-xl font-semibold text-right rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 ml-4 p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="150,73" required/>
          </div>
          <div className="mt-2">
            <label className=" ml-4 block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Incasso</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-xl font-semibold text-right rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 ml-4 p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="150,73" required/>
          </div>
          <Button variant="primary" size="small" className="h-10 w-5/6 mb-1  mt-6 ml-3" onClick={() => (true)}>FINALIZZA</Button>
        </div>
      </div>
      <div className="flex flex-col h-full w-full border-2 items-center">
          <NumericKb />
          <div className="flex flex-row h-full items-center justify-end pr-4">
            <Button variant="primary" size="small" className="h-10 w-40 mb-1  ml-3" onClick={props.back}>INDIETRO</Button>
            <Button variant="primary" size="small" className="h-10 w-40 mb-1  ml-3" onClick={() => (true)}>REGISTRA</Button>
          </div>
      </div>
    </div>
    </>

    )
  }


  const Card = (props)=> {
    return (
     
        <>
       <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md">
      <div className="w-[4rem] h-[4rem] mb-2 text-gray-500" aria-hidden="true"><i className={props.icon}></i>
  
      </div>
      <a href="#" onClick={()=>props.onClick(props.view)}>
          <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900">{props.title}</h5>
      </a>
      <p className="mb-3 font-sm text-gray-500">{props.text}</p>
      {props.hyperlink &&
      <a href="#" className="inline-flex items-center text-blue-600 hover:underline">
          {props.hyperlink}
          <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
      </a>
      }
  </div>
                  
                  
                 
            
        </> 
              
                                
             
          
          
    
    )
  }
  export default CloseCart;