import "./App.css";
import {
  Home,
  Detail,
  SearchBar,
  SearchResults,
  CreateActivity,
  Landing,
  Login,
  Register,
} from "./Views/index";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries, setAccess } from "./Redux/actions";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  const navigate = useNavigate();
  let { pathname } = useLocation();
  const allCountries = useSelector((state) => state.allCountries);
  const access = useSelector((state) => state.access);
  const dispatch = useDispatch();

  const login = async (state) => {
    const { email, password } = state;
    const URL = `http://localhost:3001/login?email=${email}&password=${password}`;
    try {
      const response = await axios.get(URL);
      const { access } = response.data;

      dispatch(setAccess(access));

      access && navigate("/home");

      !access && window.alert("Los datos ingresados son incorrectos");
    } catch (error) {
      window.alert("No estás logueado");
    }
  };

  const logOut = () => {
    navigate("/login");
    dispatch(setAccess(false));
  };

  useEffect(() => {
    !access &&
      (pathname === "/home" ||
        pathname === "/create" ||
        pathname === "/home/search") &&
      navigate("/login");

    if (allCountries.length === 0) {
      dispatch(getAllCountries());
    }
  }, [dispatch, allCountries, access, navigate, pathname]);

  return (
    <div className="App">
      {(pathname === '/home' || pathname === '/home/search' || pathname === '/create') && <NavBar logOut={logOut} />}

      {pathname === "/" && <Landing />}

      {(pathname === "/home" || pathname === "/home/search") && <SearchBar />}

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<CreateActivity />} />
        <Route path="/login" element={<Login login={login} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/home/search" element={<SearchResults />} />
      </Routes>
    </div>
  );
}

export default App;