import React, { useState } from "react";
import classes from "./news.module.css";
import Idea from "./Idea";

function Ideas(props) {
  const [ideas, setIdeas] = useState([
    {
      id: 1,
      name: "Андрей",
      idea: "Все очень красиво сделано, супер",
    },
    {
      id: 2,
      name: "Вова",
      idea: "Молодец! Хороший сайт!",
    },
    {
      id: 3,
      name: "Асланбек",
      idea: "Это лучший сайт братка я тебе атвэчаю ежжи брат",
    },
  ]);

  const [name, setName] = useState("");
  const [idea, setIdea] = useState("");

  const handleAddIdea = (name, idea) => {
    console.log(name, idea);
    setIdeas([...ideas, { id: ideas.length + 1, name: name, idea: idea }]);
    setName("");
    setIdea("");
  };

  return (
    <div className={classes.container}>
      <h1>Идеи</h1>
      <div className={classes.form}>
        <div>
          <input
            type="text"
            placeholder="Введите имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <textarea
            placeholder="Ваша идея"
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
          ></textarea>
        </div>
        <div>
          <button onClick={() => handleAddIdea(name, idea)}>Отправить</button>
        </div>
      </div>
      {ideas.map((idea) => (
        <Idea idea={idea} key={idea.id} />
      ))}
    </div>
  );
}

export default Ideas