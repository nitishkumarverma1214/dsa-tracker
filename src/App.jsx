import { useRef } from "react";
import { useEffect } from "react";
import "./App.css";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import Home from "./scenes/Home";
import Navbar from "./scenes/Navbar";
import Localbase from "localbase";
import { createBrowserRouter } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import { Route } from "react-router-dom";
import Layout from "./scenes/Layout";
import { RouterProvider } from "react-router-dom";
import { Router } from "react-router-dom";
import { useState } from "react";
import Topic from "./scenes/Topic";
import About from "./scenes/About";

function App() {
  const db = useRef(new Localbase("db"));
  const [questionSet, setQuestionsSet] = useState([]);
  useEffect(() => {
    async function fetchData() {
      await fetch("sheet.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          setQuestionsSet(json);
          const writeObj = db.current.collection("questions");
          questionSet.map((question) => writeObj.add(question));
        });
    }

    fetchData();
  }, []);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home questionSet={questionSet} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

        <Route path="/array" element={<Topic data={questionSet[0]} />} />
        <Route path="/string" element={<Topic data={questionSet[1]} />} />
        <Route path="/binary_tree" element={<Topic data={questionSet[2]} />} />
        <Route path="/graph" element={<Topic data={questionSet[3]} />} />
        <Route path="/heap" element={<Topic data={questionSet[4]} />} />
        <Route
          path="/dynamic_programming"
          element={<Topic data={questionSet[5]} />}
        />
      </Route>
    )
  );
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
