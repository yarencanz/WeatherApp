import * as React from 'react';
import Switch from '@mui/material/Switch';
import index from './index.css';
//import gunes from "..assets/güneş.jpg";




function Navbar() {
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };

    return(
        <nav className='navbar_container'>

        <div className='logo'>
      
        <h2>Weather</h2>
        </div>

        <div className='switch'>
        <Switch 
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }} />
     
       </div>
        </nav>
    )
     
    
   }
   
   export default Navbar