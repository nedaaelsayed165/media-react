


import "./App.css";
import Pages from "./Components/Pages/Pages";
import { BrowserRouter } from "react-router-dom";
import AppContext from "./Components/AppContext/AppContext";

function App() {
  return (
    // <h1 className="App">
      <BrowserRouter>
        <AppContext>
          <Pages></Pages>
        </AppContext>
      </BrowserRouter>
    // </h1>
  );
}

export default App;


// import { useState } from "react";
// import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./component/navbar/Navbar";
// import Card from "./component/card/Card";
// import { posts } from "../data";
// import Home from "./Pages/Home";
// import CreatePost from "./Pages/CreatePost";
// import Login from "./Pages/Login";

// function App() {
//   const [username, setUsername] = useState("");
//   const [user, setUser] = useState("");

//   console.log(user);

//   return (
//     <>
//       <Router>
//         <Navbar />
//         {/* <nav>
//           <Link to={"/"}> Home </Link>
//           <Link to={"/"}> Home </Link>
//         </nav> */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/Add" element={<CreatePost />} />
//           <Route path="/LognIn" element={<Login />} />
//         </Routes>
//       </Router>
//       <div className="container">
//         {user ? (
//           <>
//             {/* <Navbar /> */}
//             {posts.map((post) => (
//               <Card key={post.id} post={post} />
//             ))}
//             <span className="font-bold text-black absolute top-14 right-20">
//               {user}
//             </span>
//           </>
//         ) : (
//           <div className="flex h-screen-1/2 flex-col items-center justify-center ">
//             <input
//               type="text"
//               className="w-4/5 p-3 mb-5 rounded-md border border-black"
//               placeholder="user name..."
//               onChange={(e) => setUsername(e.target.value)}
//             />
//             <button
//               className="w-1/2 p-2.5 bg-black text-white border-none rounded-md cursor-pointer"
//               onClick={() => setUser(username)}
//             >
//               Sign In
//             </button>
//           </div>
//         )}
//       </div>
//       {/* <h1 className="text-3xl font-bold underline">Hello world!</h1>
//        */}
//     </>
//   );
// }

// export default App;
