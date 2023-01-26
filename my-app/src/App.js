import react, { useState, useRef} from "react";
import Contact from "./Contact";
import Profile from "./Profile";
import Details from "./Details";


function App() {
  const [mobile] = useState("9866xxxxxx")
  
  return (
    <div className="container">
      <Profile />
      <Details name={"Janardhan Reddy"} 
      role={"Web Developer"}  experience={"(fresher)"}/>
      <Contact />
      <p className="mobile">{mobile}</p>
    </div>
    
  );
}

export default App;
