import React, { useState } from 'react';
import './App.css';

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState('');
  const [uiBackgroundColor, setUiBackgroundColor] = useState('#056165');
  const [inputColor, setInputColor] = useState('');

  const handleDelete = (todoId) => {
    setToDos(toDos.filter((todo) => todo.id !== todoId));
  };

  const handleBackgroundColor = (e) => {
    const { value } = e.target;
    setUiBackgroundColor(value);
    setInputColor(value);
    if (value.trim() === '') {
      document.body.style.backgroundColor = '#056165';
    } else {
      document.body.style.backgroundColor = value;
    }
  };

  return (
    <div>
      <input
        className='colorinput'
        value={inputColor}
        onChange={handleBackgroundColor}
        type='text'
        placeholder='🛠️ Customize Color...'
      />
      <div className="app" style={{ background: uiBackgroundColor }}>
        <div className="mainHeading">
          <h1>ToDo List</h1>
        </div>
        <div className="subHeading">
          <br />
          <h2>Enter Quick Task here!! </h2>
        </div>
        <div className="input">
          <input
            value={toDo}
            onChange={(e) => setToDo(e.target.value)}
            type="text"
            placeholder="🖊️ Add item..."
          />
          <i
            onClick={() =>{
              setToDos([
                ...toDos,
                { id: Date.now(), text: toDo, status: false },
              ]);
              setToDo('')
            }}
            className="fas fa-plus"
          ></i>
        </div>
        <div className="todos">
          {toDos.map((obj) => (
            <div className="todo" key={obj.id}>
              <div className="left">
                <input
                  onChange={(e) => {
                    console.log(e.target.value);
                    console.log(obj);
                    setToDos(
                      toDos.map((obj2) => {
                        if (obj2.id === obj.id) {
                          obj2.status = e.target.value;
                        }
                        return obj2;
                      })
                    );
                  }}
                  value={obj.status}
                  type="checkbox"
                  name=""
                  id=""
                />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i onClick={() => handleDelete(obj.id)} className="fas fa-times"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
