import React from "react"
import "./App.css"

// function App() {
//   const arr = [1, 2, 3, 4, 5]
	
// 	return <div>
// 		<ul>
//       {arr.map(i => <li>{i}</li>)}
//     </ul>
// 	</div>
// }

// export default App
// const App = () => {
//   const items = <ul>
//     <li>1</li>
//     <li>2</li>
//     <li>3</li>
//     </ul>

//   return (
//     <>
//     {items}
//     </>
//   )
// }

// export default App

// const App = () => {
//     const isAuth = false
//   return (
//     <>
//     {!isAuth && <p>Вы авторизованы</p>}
//     </>
//   )
// }

// export default App

const App = () => {
  const showMess = () => {
    alert('Yo')
  }
  return (
  <>
  <button onClick={showMess} >Click</button>
  </>
)
}

export default App