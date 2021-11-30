// import React from "react";
import {Grid, Divider, Card} from '@mui/material'
import { getrecommendedMHResources, awaitMHR } from "../firebase";
// import Async from 'react-promise'
import React, { Component } from 'react';

export default class ListData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  async componentDidMount() {
    const data = await getrecommendedMHResources();
    this.setState({ data });
  }

  render() {
    const { data } = this.state;
    console.log(data)
    // const itemList = data.map(function(item) {
    //         return <li className="item" key={item.id}>{item.title}</li>;
    //     });
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
          {Object.entries(data).map(([key, value]) => (

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
  }
}
  







// function MoodResources() {
  
// var items = this.props.items.map(function (item) {
//     var imageSrc = getrecommendedMHResources(); // <-- this contains an async call
//     return (
//         <Async promise={imageSrc} then={(val) => <MenuItem text={item.get('ItemTitle')} imageUrl={val}/>} />    
//     );
// });


 
// } export default MoodResources;

 // function MoodResourcesUI() {


// }
// let res;

// function MoodResources() {
//   var resources_dict3 = awaitMHR()
//   console.log(resources_dict3)

  

//   var resources_dict = getrecommendedMHResources() 
//   resources_dict.then(function (result) {
//     console.log(result)

    

//   })

//   let resources_dict2;

//   // var score = getHappinessScore()
//   // score.then(function (result) {
//   //   console.log(result)
//   //   plotGaugeChart(result * 100)
//   // }

//   // resources_dict2 = resources_dict.then((result) => {
//   //   console.log(result)
//   //   return(result)
//   // })

//   // const promise = getrecommendedMHResources();
//   // promise.then(function(result) {
//   //   resources_dict2 = result;
  
//   // })


//   // var [entries, setEntries2] = React.useState(null);
//   // console.log(setEntries2)

//   // const promise = getrecommendedMHResources();
//   //   promise.then(function(result) {
//   //     console.log(result)
//   //     // setEntries(result);
//   //   })
//   //   console.log(setEntries2)


//   // resources_dict.then(function(result) { 
//   //   console.log(result)
//   //   resources_dict2 = result
//   //   console.log('done') 
//   //   return result;
//   // });

//   console.log('byeeeeeee')
//   console.log(resources_dict)

//   return (
      
//     <div
//       style={{margin: "5rem"}}
//     >
//       <Grid container>
//         <Grid item xs={10}>
//           <h1 
//             style={{
//               marginTop: "5rem"
//             }}>
//               Mental Health Resources
//           </h1>
//           <Divider style={{width: "60rem"}}/>
//           <h4 
//             style={{
//               marginTop: "1rem"
//             }}>
//               Here is what we recommend for you based on your latest entries:
//           </h4>
//         </Grid>
//       </Grid>
//       {/* for key, value in resources_dict.items() { 
//          } */}

     
//       <Grid container direction="column" style={{marginTop: "2rem"}}>
//         <Grid item>
//           {Object.entries({0:'hello'}).map(([key, value]) => (

// <Card style={{width: "50rem", height: "40px", padding: "10px", margin: "10px"}}>
//            <a target="_blank" href={value} style={{ color: '#578ff1' }}>{key}</a>
//            </Card>
          
//           )) 

//           }
//            {/* <Card style={{width: "50rem", height: "40px", padding: "10px", margin: "10px"}}>
//            <a target="_blank" href="http://www.afsp.org/" style={{ color: '#578ff1' }}>American Foundation for Suicide Prevention</a>
//            </Card> */}
         
            
//         </Grid>
//       </Grid>
//     </div>
//   );
    

// } export default MoodResources;
