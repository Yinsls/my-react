import MouseMove from "../../components/trailing/MouseMove";
import "./App.css";

export default function App(props: any) {
  let mouse = new MouseMove();
  mouse.handleMove();

  return (
    <div className="App">
      <h3>app</h3>
      <p>learn react</p>
    </div>
  );
}
