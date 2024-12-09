import { useState } from "react";
import { puppyList } from "./data.js";
import "./App.css";

function App() {
  // useState returns an array. And, the array contains two elements. The first is the value that you are storing. The second is a function, which you can use to reset the value. You can deconstruct both of those values from the array
  const [puppies, setPuppies] = useState(puppyList); //passing the puppyList array from the data.js file as the default value. ALWAYS pass the useState hook a default value.
  const [featPupId, setFeatPupId] = useState(null); // track another piece of data in the application by creating a new variable to store the ID of the selected puppy. set to null to conditionally render an element in your JSX code
  const featuredPup = puppies.find((pup) => pup.id === featPupId); // create a variable named featuredPup. Use the Array.find() method to find the puppy with a matching ID

  console.log(featuredPup);

  return (
    <>
      <div className="App">
        {/* braces {} allow us to 'escape into JavaScript' */}
        {/* react needs a key to maintain the integrity of the order of elements, the key should be a unique identifier that comes directly from your data.
        so in this case, puppies should each have a unique ID */}
        {/* // Somewhere in the application (outside the map and inside the parent div element) add a p tag, and render featPupID inside it */}
        {/* Answer: <p>{featPupId}</p> */}
        {/* conditionally render the p tag if featPupId is not null */}


        {/* { featuPupID && <p>{ featPupId }</p> } track the ID onClick and render it in the application */}
        {/* Instead of rendering a p tag with the id, render a div tag with a list of info that comes from the puppy */}
        {featPupId && (
          <div>
            {/* notice that both the <h2> and <ul> tags need to be rendered in one parent element */}
            <h2>{featuredPup.name}</h2> 
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
        )}

        {puppies.map((puppy) => {
          return (
            <p
              onClick={() => {
                setFeatPupId(puppy.id); // tracking the ID via useState so you can render the ID somewhere in the application
                // {()=>{console.log("puppy id: ", puppy.id) logs the puppy id on each click in the console
              }}
              key={puppy.id}
            >
              {puppy.name}
            </p>
          ); // add an onClick handler to the element directly, pass a function to onClick. React will invoke the function
        })}
      </div>
    </>
  );
}

export default App;
