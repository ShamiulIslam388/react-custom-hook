import "./styles.css";
import { useFetch } from "./customhook";

const url = "https://jsonplaceholder.typicode.com/users";

export default function App() {
  const { data, loading } = useFetch(url);
  return (
    <div className="App">
      <h4>{loading ? "loading" : "Data"}</h4>
      {data.map((user) => {
        return <li key={user.id}>{user.name}</li>;
      })}
    </div>
  );
}
