import { useState } from 'react';
import styles from './App.module.css'; // Halkan ka soo dhoweyso CSS Module-ka

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
    setInputValue('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>My Todo List</h1>
        
        <form onSubmit={handleSubmit} className={styles.formGroup}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new todo..."
            className={styles.input}
          />
          <button type="submit" className={styles.addButton}>
            Add
          </button>
        </form>

        <div className={styles.todoList}>
          {todos.map(todo => (
            <div key={todo.id} className={styles.todoItem}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className={styles.checkbox}
              />
              <span className={`${styles.todoText} ${todo.completed ? styles.completedText : ''}`}>
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className={styles.deleteButton}
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        {todos.length === 0 && (
          <p className={styles.emptyMessage}>
            No todos yet. Add some tasks above!
          </p>
        )}
      </div>
    </div>
  );
}

export default App;