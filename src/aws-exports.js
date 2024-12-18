
const awsconfig = {
  Auth: {
    region: 'eu-west-2',
    userPoolId: 'eu-west-2_H2f3104ah',
    userPoolWebClientId: 'h4lr7oitg9jtquph9fntoh65e',
  }
};

// export default awsconfig;

// import { Amplify } from 'aws-amplify';

// export const awsconfig = {
//   Auth: {
//     region: 'eu-west-2', // Replace with your region
//     userPoolId: 'eu-west-2_H2f3104ah', // Replace with your User Pool ID
//     userPoolWebClientId: 'h4lr7oitg9jtquph9fntoh65e', // Replace with your App Client ID
//     mandatorySignIn: true,
//     authenticationFlowType: 'USER_PASSWORD_AUTH', // Replace if you use a different flow
//   },
//   API: {
//     endpoints: [
//       {
//         name: 'YourAPINickname',
//         endpoint: 'https://your-api-endpoint.amazonaws.com', // Replace with your API Gateway endpoint
//         region: 'eu-west-2', // Replace with your API region
//       },
//     ],
//   },
// };

Amplify.configure(awsconfig);