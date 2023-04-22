import React, { useState } from "react"
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

// const App = () => {
//   const showMess = () => {
//     alert('Yo')
//   }
//   return (
//   <>
//   <button onClick={showMess} >Click</button>
//   </>
// )
// }

// export default App

// const App = () => {
//   const users = [
//     { id: 1, name: "user1", surn: "surn1", age: 30 },
//     { id: 2, name: "user2", surn: "surn2", age: 31 },
//     { id: 3, name: "user3", surn: "surn3", age: 32 },
//   ];

//   const data = users.map((item) => {
//     return (
//       <tr key={item.id}>
//         <td>{item.name}</td>
//         <td>{item.surn}</td>
//         <td>{item.age}</td>
//       </tr>
//     );
//   });

//   return (
//     <>
//       <table>
//         <thead>
//           <tr>
//             <td>Имя</td>
//             <td>Фамилия</td>
//             <td>Возраст</td>
//           </tr>
//         </thead>
//         <tbody>{data}</tbody>
//       </table>
//     </>
//   );
// };

// export default App;

// const App = () => {
//   const [name, setName] = useState("")
//   const [result, setResult] = useState()

//   const handlerChangeName = (e) => {
//     return setName(e.target.value)
//   }

//   const handlerClick = () => {
//     setResult(name)
//   }

//   return (
//     <>
//       <div>{result}</div>
//       <br />
//       <input value={name} onChange={handlerChangeName} />
//       <br />
//       <button onClick={handlerClick}>Change name</button>
//     </>
//   )
// }

// export default App

const App = () => {

  const [checked, setChecked] = useState(false)
  const [hello, setHello] = useState()
  const [bye, setBye] = useState()

  const handleClick = () => {
    if (checked) {
     setHello('Hello User')
    } else {
      setBye('Bye User')
    }
  }

  return <>
  <div>{checked ? hello : bye}</div>
  <br />
  <input type="checkbox" checked={checked} onChange={() => {setChecked(!checked)}}/>
  <br />
  <input type='submit' onClick={handleClick}/>
  </>
}

export default App
