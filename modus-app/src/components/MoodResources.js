import React from "react";
import {Grid, Divider, Card} from '@mui/material'
import { getrecommendedMHResources, awaitMHR } from "../firebase";

function MoodResources() {
  var resources_dict3 = awaitMHR()
  console.log(resources_dict3)
  // var result3 = resources_dict3.WaitAndUnwrapException();

  var resources_dict = getrecommendedMHResources() 
  resources_dict.then(function (result) {
    console.log(result)

  })

  let resources_dict2;

  // var score = getHappinessScore()
  // score.then(function (result) {
  //   console.log(result)
  //   plotGaugeChart(result * 100)
  // }

  // resources_dict2 = resources_dict.then((result) => {
  //   console.log(result)
  //   return(result)
  // })

  // const promise = getrecommendedMHResources();
  // promise.then(function(result) {
  //   resources_dict2 = result;
  
  // })


  // var [entries, setEntries2] = React.useState(null);
  // console.log(setEntries2)

  // const promise = getrecommendedMHResources();
  //   promise.then(function(result) {
  //     console.log(result)
  //     // setEntries(result);
  //   })
  //   console.log(setEntries2)




  // resources_dict.then(function(result) { 
  //   console.log(result)
  //   resources_dict2 = result
  //   console.log('done') 
  //   return result;
  // });

  console.log('byeeeeeee')
  console.log(resources_dict)


    return (
      
        <div
          style={{margin: "5rem"}}
        >
          <Grid container>
            <Grid item xs={10}>
              <h1 
                style={{
                  marginTop: "5rem"
                }}>
                  Mental Health Resources
              </h1>
              <Divider style={{width: "60rem"}}/>
              <h4 
                style={{
                  marginTop: "1rem"
                }}>
                  Here is what we recommend for you based on your latest entries:
              </h4>
            </Grid>
          </Grid>
          {/* for key, value in resources_dict.items() { 
             } */}
  
         
          <Grid container direction="column" style={{marginTop: "2rem"}}>
            <Grid item>
              {Object.entries({0:"hello",1:"http://www.afsp.org/"}).map(([key, value]) => (

   <Card style={{width: "50rem", height: "40px", padding: "10px", margin: "10px"}}>
               <a target="_blank" href={value} style={{ color: '#578ff1' }}>{key}</a>
               </Card>
              
              )) 

              }
               {/* <Card style={{width: "50rem", height: "40px", padding: "10px", margin: "10px"}}>
               <a target="_blank" href="http://www.afsp.org/" style={{ color: '#578ff1' }}>American Foundation for Suicide Prevention</a>
               </Card> */}
             
                
            </Grid>
          </Grid>
        </div>
      );

} export default MoodResources;