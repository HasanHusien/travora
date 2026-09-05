import axios from "axios";
export async function login({ email, password }) {
  try {
    // using axios library
    const res = await axios.post("/api/users/login", {
      email,
      password,
    });

    return res;
    // console.log(res.locals);
  } catch (err) {
    // from axios docs response.data
    console.error(err.response.data);
  }

  // const res = await fetch("/ap/users/login", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });
}

export async function logout() {
  try {
    const res = await axios.get("/api/users/logout");

    return res;
  } catch (err) {
    console.error(err);
  }
}

// let dispatcher = null;

// // Rendered via React
// function MyComponent() {
//   const [state, setState] = useState(1);

//   useEffect(() => {
//     // set the global var to this components setState
//     dispatcher = setState;
//     return () => {
//       // on unmount, reset the global var to null
//       dispatcher = null;
//     };
//   }, [setState]);

//   return (
//     <div className="App">
//       <div>Count: {state}</div>
//     </div>
//   );
// }

// // Rendered outside of React
// const elem = document.getElementById("button");
// let clickCount = 1;
// elem.onclick = () => {
//   if (dispatcher) {
//     // call the global var which is the React component's setState()
//     dispatcher(++clickCount);
//   }
// };
