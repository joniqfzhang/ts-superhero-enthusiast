import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import SuperHeros from './SuperHeros';
// import DisplayLocations from './DisplayLocations';

function App() {
  const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/",
    // uri: "http://localhost:4000/graphql", // this is also works
    // uri: 'https://flyby-router-demo.herokuapp.com/',
  });
  
  return (
    <ApolloProvider client={apolloClient}>
      <div className="App">
        <SuperHeros> List of SuperHeros </SuperHeros>
        {/* <DisplayLocations></DisplayLocations> was purely for debugging usage*/}
        {/* <DisplayLocations></DisplayLocations> */}
      </div>
     </ApolloProvider>
  );
}

export default App;
