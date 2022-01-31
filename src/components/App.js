import Header from "./Header/Header";
import Main from "./Main/Main";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadAllCards } from "../redux/ducks/cardsReducer";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAllCards());
  }, []);

  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App;
