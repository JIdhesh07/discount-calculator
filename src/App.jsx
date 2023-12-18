
import './App.css';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  
    const[amount,setAmount]= useState(0);
    const[percen,setPercen]=useState(0);
  
    console.log(amount);
    console.log(percen);
  
    const[final,setFinal]=useState(0)
    const[saved,setSaved]=useState(0)
  
    const calculates =(e) =>{
      const result = amount-(amount*(percen/100))
      console.log(result);
      setFinal(result)
  
      const last = amount-result;
      console.log(last);
      setSaved(last)
    }
  
    const reset=(e)=>{
      setAmount(0);
      setPercen(0);
      setFinal(0);
      setSaved(0);
    }
  


  
  return (
    <div className="App">
      <div className='vj'>
        <h1 style={{marginLeft:"600px"}}>Discount calculator</h1>
      </div>

      <div>
        <img style={{marginLeft:'650px'}} src="https://cdn.dribbble.com/users/388659/screenshots/4454275/untitled-1.gif" alt="" />
<img style={{marginTop:'-800px',width:'600px',marginLeft:'100px'}} src="https://thumbs.dreamstime.com/b/long-tropical-leaf-icon-cartoon-style-vector-web-design-isolated-white-background-134037408.jpg" alt="" />
        
      </div>
     <div className='conataner'>
      <div className='header'>
<h1>Discount calculator</h1>

</div>

<label htmlFor="">Amount</label>
<br />

<input onChange={(e)=>setAmount(e.target.value)} id='amount' type="text" className='form-control' style={{width:'300px',height:'30px'}} />
<br />
<br />
<br />

<label htmlFor="">Discount</label>
<br />

<input onChange={(e)=>setPercen(e.target.value)} id='amount' type="text" style={{width:'300px',height:'30px'}} className='form-control' />


<br />
<br />
<br />
<div className='button'>
<Button onClick={e=>calculates(e)} style={{marginLeft:'40px',backgroundColor:'green'}} variant="contained">Discount</Button>
<Button  onClick={e=>reset(e)} style={{marginLeft:'30px',backgroundColor:'green',color:'white'}} variant="outlined">Reset</Button>
</div>


<br />

<h2 style={{marginLeft:'50px'}}>Total amount: {final}</h2>


     </div>


    </div>

  )

  };


export default App;
