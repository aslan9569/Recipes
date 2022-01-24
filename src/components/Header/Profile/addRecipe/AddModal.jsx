import React, { useState } from 'react'
import classes from './addrecipe.module.css';
import { useDispatch, useSelector } from 'react-redux'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { addClose, addRecipe } from '../../../../redux/ducks/cardsReducer'

function AddModal (props) {
  const dispatch = useDispatch();
  const [category, setCategory] = useState(null);
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [recipe, setRecipe] = useState('');
  const allItems = useSelector(state => state.cards.allItems.length + 1);

  const handleAdd = () => {
    dispatch(addRecipe(allItems,category, image, title, description, ingredients, recipe))
    setCategory('')
    setImage('')
    setTitle('')
    setDescription('')
    setIngredients('')
    setRecipe('')
  }
  const closeAddWindow = () => {
    dispatch(addClose())
  }


  return (
    <div className={classes.modal}>
      <div className={classes.modalContent}>
        <div className={classes.container}>
          <div className={classes.close}>
            <FontAwesomeIcon icon={faTimes} className={classes.esq} onClick={closeAddWindow} />
          </div>
          <h3>Добавить рецепт</h3>
          <div>
            <input
              type="text"
              placeholder="Категория"
              value={category}
              onChange={e => setCategory(Number(e.target.value))}
            />
          </div>
          <div className={classes.info}>1-салаты, 2-закуски, 3-первые блюда, 4-выпечка, 5-гарниры, 6-напитки, 7-сэндвичи</div>
          <div>
            <input
              type="text"
              placeholder="Ссылка на изображение"
              value={image}
              onChange={e => setImage(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Название"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              value={description}
              placeholder="Краткое описание"
              onChange={e => setDescription(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Ингредиенты"
              value={ingredients}
              onChange={e => setIngredients(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Рецепт"
              value={recipe}
              onChange={e => setRecipe(e.target.value)}
            />
          </div>
          <div>
            <button
            onClick={() => handleAdd(allItems,category, image, title, description, ingredients, recipe)}
            >
              Добавить
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddModal