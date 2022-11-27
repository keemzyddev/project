import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Todos from "./component/Todos/Todos";
import Header from "./component/Header/Header";
import Footer from "./component/Footer";
import Form from "./component/Form/Form";
import About from "./component/About";
import "./App.css";

function App() {
  const [showAddTodo, setShowAddTodo] = useState(false);

  return (
    <Router>
      <div className="App">
        <Header
          onAdd={() => setShowAddTodo(!showAddTodo)}
          showAdd={showAddTodo}
        />

        <Routes>
          <Route path="/todo" element={<Navigate to='/' replace={true} />} />
          <Route
            path="/"
            element={
              <>
              
                <div>{showAddTodo && <Form />}</div>
                <div>
                  <Todos />
                </div>
                <Footer />
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
