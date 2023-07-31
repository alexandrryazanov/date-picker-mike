import "./App.css";
import DatePicker from "./components/DatePicker";
import { setDefaultOptions } from "date-fns";
import { de } from "date-fns/locale";

setDefaultOptions({ locale: de });

function App() {
  return (
    <div className="App">
      <DatePicker startWeekWithMonday={false} onChange={() => null} />
    </div>
  );
}

export default App;
