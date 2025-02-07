import { useState } from "react";
import "./styles.css";

const data = [
  {
    title: "Section 1",
    content: "This is the content of section 1",
  },
  {
    title: "Section 2",
    content: "This is the content of section 2",
  },
];

export default function App() {
  const [selected, setSelected] = useState([]);
  const handleClick = (idx) => {
    // setSelected(idx);
    setSelected((prevContentSection) => {
      if (prevContentSection.includes(idx)) {
        return prevContentSection.filter((section) => section !== idx);
      } else {
        return [...prevContentSection, idx];
      }
    });
  };
  return (
    <div className="App">
      <h1>Accordian - ReactJS</h1>
      {data.map((obj, idx) => (
        <div key={idx} className="wrapper">
          <div className="title">
            <h3>{obj.title}</h3>
            <button onClick={() => handleClick(idx)}>
              {selected.includes(idx) ? "-" : "+"}
            </button>
          </div>
          {selected.includes(idx) && <p>{obj.content}</p>}
          {/* {selected === idx && <p>{obj.content}</p>} */}
        </div>
      ))}
    </div>
  );
}
