import React, { Component, useState } from 'react';
import axios from 'axios';
import jsonp from 'jsonp';

import Aux from '../../hoc/Aux';
import Survey from '../Survey/Survey.js';

const SurveyForm = () => {

  let [responseObj, setResponseObj] = useState({});

  function getSurvey(e){
    e.preventDefault();

    const api_token = process.env.REACT_APP_API_KEY;
    const user_identifier = 'tapresearch';
    const api = 'https://www.tapresearch.com/supply_api/surveys/offer';

    const testapi = 'https://jsonplaceholder.typicode.com/posts?callback=cb';
    const testapi2 = `${api}?callback=cb`
    const testapi3 = `${api}?api_token=${api_token}&user_identifier=${user_identifier}`;

    const config = {
      headers: {
        'api_token': api_token,
        'user_identifier': user_identifier,
      }
    }

    const payload = {
      'user_identifier': user_identifier,
      'api_token': api_token,
    }

    // axios.post(api, payload, config)
    // .then(response => {
    //   console.log(response);
    // })
    // .catch((error) => {
    //   console.error(error);
    // });

    // axios.get(api, config)
    // .then(response => {
    //   console.log(response);
    //   this.setState({surveys: response.data});
    // })
    // .catch((error) => {
    //   console.error(error);
    // });

    // fetch(testapi, {
    //   method: "GET",
    //   headers: {
    //     'api_token': api_token,
    //     'user_identifier': user_identifier,
    //   }
    // })
    // .then(response => {
    //   console.log(response);
    //   response.json();
    // })
    // .catch(err => {
    //   console.log(err);
    // });

    fetch(testapi3, {
      method: "POST",
      headers: {
        'api_token': api_token,
        'user_identifier': user_identifier,
      },
      body: JSON.stringify(payload),
      cors: true,
      credentials: 'same-origin',
    })
    .then(response => {
      console.log(response);
      response.json();
    })
    .catch(err => {
      console.log(err);
    });

    // const callbackScript = document.createElement("script");
    // callbackScript.type = 'text/json';
    // callbackScript.text = 'var cb = function(data){console.log(data);}';

    // const jsonpScript = document.createElement("script");
    // jsonpScript.type = 'text/json';
    // jsonpScript.src = testapi;
    // jsonpScript.async = true;

    // document.body.appendChild(callbackScript);
    // document.body.appendChild(jsonpScript);

  }

  return (
    <Aux>
      <div>
        <h5>Enter an alphanumeric string (user identifier)</h5>
        <form onSubmit={getSurvey}>
          <input 
          />
          <button type="submit">Get Surveys</button>
        </form>
      </div>
    </Aux>
  )
}

export default SurveyForm;
















// class SurveyForm extends Component {
//   state = {
//     surveys: [],
//   }

//   componentDidMount(){
//     const api_token = process.env.REACT_APP_API_KEY;
//     const user_identifier = 'tapresearch';
//     const api = 'https://supply-docs.tapresearch.com/#get-survey-offer';

//     const testapi = 'https://jsonplaceholder.typicode.com/posts?callback=cb';
//     const testapi2 = 'https://supply-docs.tapresearch.com/#get-survey-offer?callback=cb'
//     const testapi3 = `https://supply-docs.tapresearch.com/#get-survey-offer?api_token=${api_token}&user_identifier=${user_identifier}`;

//     const config = {
//       headers: {
//         'api_token': api_token,
//         'user_identifier': user_identifier,
//       }
//     }

//     const data = {
//       'user_identifier': user_identifier,
//       'api_token': api_token,
//     }

//     // axios.post(api, data, config)
//     // .then(response => {
//     //   console.log(response);
//     // })
//     // .catch((error) => {
//     //   console.error(error);
//     // });

//     axios.get(api, config)
//     .then(response => {
//       console.log(response);
//       this.setState({surveys: response.data});
//     })
//     .catch((error) => {
//       console.error(error);
//     });
    
//   }

//   render(){
//     const surveys = this.state.surveys.map(survey => {
//       return <Survey url={survey.url} />;
//     });

//     return (
//       <Aux>
//         <div>
//           <h5>Enter an alphanumeric string (user identifier)</h5>
//           <form>
//             <input 
//             />
//             <button type="submit">Get Surveys</button>
//           </form>
//         </div>
//         {surveys}
//       </Aux>
//     );
//   }
// }

// export default SurveyForm;