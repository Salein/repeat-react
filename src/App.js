import React from "react";
import "./App.css";

function App() {
  const arr = [1, 2, 3, 4, 5];
	
	return <div>
		<ul>
      {arr.map(i => <li>{i}</li>)}
    </ul>
	</div>;
}

export default App;
