import LandingPage from "./pages/LandingPage";
import appStyles from "./App.module.scss";

function App() {
  console.log(appStyles)

  return (
    <div className={appStyles["app-container-div}"]}>
      <LandingPage />
    </div>
  )
}

export default App
