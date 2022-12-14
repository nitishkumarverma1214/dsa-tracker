import { useEffect, createContext } from "react";
import "./App.css";
import Contact from "./scenes/Contact";
import Home, { urlFormat } from "./scenes/Home";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import { createBrowserRouter } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import { Route } from "react-router-dom";
import Layout from "./scenes/Layout";
import { RouterProvider } from "react-router-dom";
import { useState } from "react";
import Topic from "./scenes/Topic";
import About from "./scenes/About";

import { db } from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  getCountFromServer,
} from "firebase/firestore";
import Login from "./scenes/Login";
import Register from "./scenes/Register";
import FormSuccess from "./scenes/FormSuccess";

export const LoginContext = createContext(null);

function App() {
  const [questionSet, setQuestionsSet] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logout = async () => {
    await signOut(auth);
    setIsLoggedIn(false);
  };

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

          questionSet.map(function (question) {
            try {
              const docRef = addDoc(collection(db, "questions"), question);

              console.log("Document written with ID: ", docRef.id);
            } catch (e) {
              console.error("Error adding document: ", e);
            }
          });
        });
    }
    async function checkDataExists() {
      const coll = collection(db, "questions");
      const snapshot = await getCountFromServer(coll);
      const docsCount = snapshot.data().count;
      // console.log("count: ", docsCount);

      if (!coll || docsCount <= 0) {
        fetchData();
      } else {
        const querySnapshot = await getDocs(coll);
        const records = [];
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          records.push(doc.data());
        });
        setQuestionsSet(records);
      }
    }
    checkDataExists();
  }, [isLoggedIn]);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            isLoggedIn ? (
              <Home questionSet={questionSet} />
            ) : (
              <Login setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/form-submit" element={<FormSuccess />} />
        <Route
          path="/register"
          element={<Register setIsLoggedIn={setIsLoggedIn} />}
        />
        {questionSet &&
          questionSet.length > 0 &&
          questionSet.map((questionType) => (
            <Route
              key={questionType.topic}
              path={`${urlFormat(questionType.topic)}`}
              element={<Topic data={questionType} />}
            />
          ))}
      </Route>
    )
  );
  return (
    <LoginContext.Provider value={{ isLoggedIn, logout }}>
      <RouterProvider router={router}></RouterProvider>
    </LoginContext.Provider>
  );
}

export default App;
