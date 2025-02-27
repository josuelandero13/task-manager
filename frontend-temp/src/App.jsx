import './App.css'
import AppRoutes from "./routes/AppRoutes.jsx";
import { AuthProvider } from "../src/components/AuthProvider.jsx";

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
}

export default App
