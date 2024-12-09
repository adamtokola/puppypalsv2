import { useState } from "react";
import { puppyList } from "./data.js";
import './App.css'

function App() {
  
  // useState returns an array. And, the array contains two elements. The first is the value that you are storing. The second is a function, which you can use to reset the value. You can deconstruct both of those values from the array
  const [puppies, setPuppies] = useState(puppyList); //passing the puppyList array from the data.js file as the default value. ALWAYS pass the useState hook a default value.

  console.log(puppies);
  
  return (
    <>
      <div>

        {
          puppies.map((puppy) => {
            return <p>{puppy.name}</p>
          })
        }

      </div>
    </>
  )
}

export default App
