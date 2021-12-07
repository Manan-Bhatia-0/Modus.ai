import React from 'react';
import useDarkMode from 'use-dark-mode';
import Grid from "@mui/material/Grid";
import "../pages/modus.css";
 
import Toggle from './Toggle';
 
const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);
 
  return (
    <div class="darkmodeContainer">
        {/* <Grid container> */}
            {/* <Grid item> */}
                <button type="button" onClick={darkMode.disable} style={{backgroundColor: "#7699e4"}}>
                    ☀
                </button>
            {/* </Grid> */}
            {/* <Grid item> */}
                <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
            {/* </Grid> */}
            {/* <Grid item> */}
                <button type="button" onClick={darkMode.enable} style={{backgroundColor: "#7699e4"}}>
                    ☾
                </button>
            {/* </Grid> */}
        {/* </Grid> */}
    </div>
  );
};
 
export default DarkModeToggle;