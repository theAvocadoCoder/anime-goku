import LandingPage from "./pages/LandingPage";
import appStyles from "./App.module.scss";
import { Route, Routes } from "react-router-dom";
import Navbar from "./global-components/Navbar";
import Footer from "./global-components/Footer";

function App() {
  console.log(appStyles)

  return (
		<div className={appStyles["app-container-div}"]}>
			<Routes>
				<Route element={<Navbar />}>
					<Route path="/" element={<LandingPage />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App
