
import {Grid, Divider, Card} from '@mui/material'
import { getrecommendedMHResources, MoodAnalysisFuncs, getAgeGenderAnalysis} from "../firebase";
import React, { Component } from 'react';

export default class MoodResources extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{"Guided Meditation":'https://mindfullycity.com/free-guided-meditation-resources-for-difficult-times/'}, 0.0]
    };
  }
  async componentDidMount() {
    const data = await MoodAnalysisFuncs();
    const data2 = await getAgeGenderAnalysis();
    console.log(data)

    console.log(data2)
    if (data[1] == null) {
      data[1] = 0.0
    }
    this.setState({ data });

    console.log(this.state.data)
    // await MoodAnalysisFuncs(function (data) {
    //   console.log(data)
    //   this.setState({ data });

    // } )
    
  }

  render() {
    console.log(this.state)
    var { data } = this.state;
    console.log(data)


    // if(data.length==0) {
    //   data = []
    //   data[0] = {"Guided Meditation":'https://mindfullycity.com/free-guided-meditation-resources-for-difficult-times/'}
    //   data[1] = "Male"
    // }
    console.log(data) 
    // console.log(data[1])
  return (
      
    <div
      style={{margin: "5rem"}}
    >
        <Grid container>
        <Grid item xs={10}>
          <h1 
            style={{
              marginTop: "2rem"
            }}>
              How your demographics are doing: {data[1]}
          </h1>
          <h6 
            style={{
              marginTop: "1rem"
            }}>
              The above score shows how all users with the same age range and gender as you are doing. 
        
          </h6>
          <h6 
            style={{
              marginTop: "3rem"
            }}>
              You can use this score to see how yours compares to the average or how the same demographic might be doing! 
          </h6>
          
          {/* <Divider style={{width: "60rem"}}/> */}
         
        </Grid>
      </Grid>

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
      <Grid container direction="column" style={{marginTop: "2rem"}}>
        <Grid item>
          {Object.entries(data[0]).map(([key, value]) => (

<Card style={{width: "50rem", height: "40px", padding: "10px", margin: "10px"}}>
           <a target="_blank" href={value} style={{ color: '#578ff1' }}>{key}</a>
           </Card>
          
          )) 

          }
            
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
