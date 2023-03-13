import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { LoginPage } from "./login";
import { EncoderPage } from "./encoder";

function App() {
  return (
    <div>

    <Router>
      <Routes>
        <Route path="/login" index element={<LoginPage />} />
        <Route path="/encoder" element={<EncoderPage />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
