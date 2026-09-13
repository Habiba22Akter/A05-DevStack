import { Suspense } from "react";

import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Technologies from "./components/technologies/Technologies";
import Footer from "./components/Footer";
import type { Technology } from "./types/technology";
// import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";


const technologiesFetch = async (): Promise<Technology[]> => {

  const res = await fetch("/technologies.json");

  const data = await res.json();

  return data;
};


const technologiesPromise = technologiesFetch();


function App() {

  return (
    <>
      <Nav />
      <Banner />
      <Suspense
        fallback={
          <div className="py-20 text-center">
            <h2 className="text-xl font-semibold">
              Loading Technologies...
            </h2>
          </div>
        }
      >
        <Technologies
          technologiesPromise={technologiesPromise}
        />
      </Suspense>

      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={2000}
      />
    </>
  );
}

export default App;
