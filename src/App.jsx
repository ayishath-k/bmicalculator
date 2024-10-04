


import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './App.css'
import { useState } from 'react';




function App() {

  
  const [age, setAge] = useState("");
 
  
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState('');



  const calculateBMI = (e) => {
    // console.log(e.target.name);
    
    // console.log(e.target.value);


    if (weight > 0 && height > 0) {
      const heightInMeters = height / 100;
      const calculatedBmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(calculatedBmi);
      let bmiMessage = '';

      if (calculatedBmi < 18.5) {
        bmiMessage = 'Underweight';
      } else if (calculatedBmi >= 18.5 && calculatedBmi < 24.9) {
        bmiMessage = 'Normal weight';
      } else if (calculatedBmi >= 25 && calculatedBmi < 29.9) {
        bmiMessage = 'Overweight';
      } else {
        bmiMessage = 'Obesity';
      }
      setMessage(bmiMessage);
    } else {
      alert('Please enter valid height and weight');
    }


  };



  
  
    
    

  
  return (
    <>
    <div style={{height:'100vh'}} className='bg-dark w-100 d-flex justify-content-center align-items-center ' > 

      <div style={{width:'500px'}} className='p-4 bg-light rounded' >
      <h2 className='text-center'>BMI Calculator</h2>
     

      
      <div className='d-flex justify-content-between flex-column'>
      <TextField id="standard-basic" name='height' label="enter your height" value={height} variant="standard"type="number" onChange={(e)=>setHeight(e.target.value)} />
           
            
      <br/>
      <TextField id="standard-basic" name='weight' label="enter your weight" variant="standard" value={weight} type="number" onChange={(e)=>setWeight(e.target.value)}/><br />
      <TextField id="standard-basic" name='age' label="enter your age" variant="standard" type="number" onChange={(e)=>calculateBMI(e)}/><br />
 
        


      <Button variant="contained" type='button' style={{backgroundColor:"#b22a00"}} onClick={calculateBMI} >calculate your bmi</Button>

      {bmi && (
        <div className='mt-3 d-flex justify-content-center flex-column'>
          <h2>Your BMI is: {bmi}</h2>

          <h3>{message}</h3>
        </div>
      )}


      

      </div>
      </div>
    </div>
   
   </>
  )
}


export default App