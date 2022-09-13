import "./App.css";
import Directory from "./Components/directory/Directory";
import categories from "./Data/categories-data";

const App = () => {
  return (
    <div>
     <Directory  categories={categories}/>
    </div>
  );
};

export default App;
