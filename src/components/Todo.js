import React, {useState, useEffect} from 'react'
import db from './firebase';
import firebase from "firebase";
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTimes, faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const TodoForm = styled.div `
    margin-top: 15px;
    width: 280px;
    box-shadow: 9.91px 9.91px 15px #434343, -9.91px -9.91px 15px #515151;
    border-radius: 25px;
    padding: 20px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 50px;
    background: #4a4a4a;
    @media (max-width: 1600px) {
        right: 10px;
        width: 200px;
    }
    span {
        display: flex;
        justify-content: center;
        margin-bottom: 15px;
        svg {
            font-size: 30px;
            color: #bfbfbf;
            box-shadow: inset 9.91px 9.91px 15px #434343, inset -9.91px -9.91px 15px #515151;
            padding: 15px;
            border-radius: 25px;
        }
    }
    form {
        display: flex;
        justify-content: space-between;
        display: none;
        input {
            border-radius: 25px;
            box-shadow: inset 9.91px 9.91px 15px #434343, inset -9.91px -9.91px 15px #515151;
            padding: 10px 15px 10px 16px;
            border: none;
            background: #4a4a4a;
            color: #bfbfbf;
            width: 200px;
            &:focus {
                outline: none;
            }
        }
    }
    button {
            border-radius: 50%;
            box-shadow: inset 9.91px 9.91px 15px #434343, inset -9.91px -9.91px 15px #515151;
            display: inline-block;
            padding: 10px;
            border: none;
            background: #4a4a4a;
            color: #bfbfbf;
            display: inline-block;
            width: 35px;
            height: 35px;
            display: flex;
            justify-content: center;
            align-items: center;
            &:focus {
                outline: none;
            }
        }
    ul {
        list-style-type: none;
        padding-left: 0px;
        display: none;
        div {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 15px;
            li {
                color: #bfbfbf;
                box-shadow: inset 9.91px 9.91px 15px #434343, inset -9.91px -9.91px 15px #515151;
                padding: 10px 15px 10px 16px;
                border-radius: 25px;
                word-break: break-all;
                width: 200px;
            }
            
        }
    }
    ${({ isClicked }) =>
    isClicked &&
    css`
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        transition: 1s;
        
      form {
          display: flex;
      }
      ul {
          display: block;
      }
    `}
`
function Todo() {

    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    const [modalState, setModalState] = useState(false)

    const manageState = () => {
        setModalState(!modalState)
        console.log(modalState);
    }

    useEffect(() =>{
        db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setTodos(snapshot.docs.map(doc => ({id: doc.id ,todo: doc.data().todo})))
        })
    }, [])

    const addTodo = (event) => {
        event.preventDefault();
        db.collection('todos').add({
            todo: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput('');
    }

    return (
        <TodoForm isClicked={modalState}>
            <span onClick={ () => manageState() }><FontAwesomeIcon icon={faShoppingCart} /></span>
            <ul>
                {todos.map(todo => (
                    <div><li>{todo.todo}</li><button onClick={event => db.collection('todos').doc(todo.id).delete()}><FontAwesomeIcon icon={faTimes} /></button></div>
                )
                )}
            </ul>
            <form>
            <input value={input} onChange={event => setInput(event.target.value)} />
            <button disabled={!input} type="submit" onClick={addTodo}><FontAwesomeIcon icon={faPlus} /></button>
            </form>
        </TodoForm>
    )
}

export default Todo;
