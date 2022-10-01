
import React, { useEffect, useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import "./style.css";
function App() {
  function editEl(id) {
    const newEdit = lists.find((list) => list.id === id);
    setInput(newEdit.input);

    setEdit(true);
    setEditId(id);
  }
  const clear = (id) => {
    const newList = lists.filter((list) => list.id !== id);
    setLists(newList);
    setAlert({ show: true, msg: "item removed", class: "error" });
  };

  function listGrocery(e) {
    e.preventDefault();

    if (!input) {
      setAlert({ show: true, msg: "please enter value", class: "error" });
    } else if (input && edit) {
      setLists(
        lists.map((list) => {
          if (list.id === editId) {
            return { ...list, input };
          } else {
            return list;
          }
        })
      );
      setAlert({ show: true, msg: "value changed", class: "success" });
      setEditId(null);
      setEdit(false);
      setInput("");
    } else {
      const inputs = { id: new Date().getTime().toString(), input };

      setLists([...lists, inputs]);
      setAlert({ show: true, msg: "item added to the list", class: "success" });
      setInput("");
    }
  }
  const [input, setInput] = useState("");
  const [lists, setLists] = useState(() => {
    const localData = localStorage.getItem("lists");
    return localData ? JSON.parse(localData) : [];
  });
  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: true, msg: "", class: "" });
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists]);
  useEffect(() => {
    const set = setInterval(() => {
      setAlert(!alert.show);
    }, 2000);
    return () => {
      clearInterval(set);
    };
  }, []);

  return (
    <div className="container">
      <header>
        {alert.show && <p className={`${alert.class}`}>{alert.msg}</p>}
        <h2>Grocery Bud</h2>
      </header>
      <form action="">
        <input
          type="text"
          name=""
          id=""
          placeholder="e.g. eggs"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" onClick={listGrocery}>
          Submit
        </button>
      </form>
      {lists.map((list) => {
        const { id, input } = list;
        return (
          <div key={id} className="list">
            <ul>
              <li>{input}</li>
            </ul>
            <div className="icons">
              <FaEdit onClick={() => editEl(id)} className="edit" />
              <FaTrash onClick={() => clear(id)} className="delete" />
            </div>
          </div>
        );
      })}
      {lists.length > 0 && (
        <p
          onClick={() => {
            setLists([]);
            setAlert({ show: true, msg: "empty list", class: "error" });
          }}
          className="clear"
        >
          Clear Item
        </p>
      )}
    </div>
  );
}

export default App;
