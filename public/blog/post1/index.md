---
title: "Frameworks vs. Fundamentals: How overreliance on tools can stunt your growth as a developer"
date: "2025-01-16"
description: "In this article, we’ll explore the contrast between framework-driven and fundamentals-driven development, and why striking a balance is essential"
author: "David Costa"
cover: "./cover.webp"
---

## Introduction: The Power of Fundamentals

<br/>

While building with modern tools like Next.js dominates my current projects, I've been exploring functional programming concepts like monads. But beyond the usual web development, I occasionally take some time to study other topics. The current hyperfocus is functional programming and its infamous monads.

<br/>

You might ask, “Why is this important to you, David?”, “Are monads paying well?” Honestly, I doubt it, but in the programming world, you never know. However, even if functional programming isn't the hot topic or the most talked about trend right now, it brings fundamental concepts that are essential for any developer. By understanding the basics and applying these principles in different contexts, I can improve the quality of my code, whether in new projects or legacy systems.
The Trap of "Magical" Stacks

<br/>

The tech world obsesses over "magic" stacks (Next.js, React, Tailwind) and new tools emerging daily (while you read this a new js framework arrives on github). But hyper focusing on trends risks creating brittle expertise. Without core programming principles, we’re just stacking Lego blocks without understanding the bricks.

<br/>

Imagine inheriting a good and old legacy system, some hacks some code pieces glued by silver tape. A developer reliant solely on modern abstractions would drown. Functional concepts like immutability or pure functions aren’t academic—they’re survival skills for untangling spaghetti code, regardless of the stack.

<br/>

Frameworks come and go, but clean architecture, modular design, and problem solving logic endure. Investing in fundamentals isn’t about chasing hype—it’s about building adaptable expertise that outlives today’s “ultra-powerful master blaster” tools.

<br/>

---

<br/>

## Example 1: Modern Project with React Hooks

<br/>

Here’s a simple example of a to-do list application (the classic "todo list") using React and Next.js:

<br/>

```javascript
"use client";
import { useState, useEffect } from 'react';

export default function TodoApp() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('/api/todos')
      .then(response => response.json())
      .then(data => setTodos(data))
      .catch(error => console.error('Error fetching todos:', error));
  }, []);

  const addTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  return (
    <div>
      <h1>My Todo List</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <button onClick={() => addTodo('New Task')}>Add Task</button>
    </div>
  );
}
```

<br/>

- Modern Approach: The use of hooks like useState and useEffect enables reactive and well structured state management. Immutability and Best Practices: The state is updated immutably, which is a practice derived from fundamental concepts.

<br/>

This code is elegant and efficient, but without understanding concepts like immutability, pure functions, and state management, you might just be following a "recipe" without understanding the "why" behind each decision.

<br />

## Example 2: Legacy Project with Imperative Manipulation

<br/>

Now, see how an older, more legacy codebase without modern abstractions might approach the same problem:

<br/>

```typescript
function TodoApp() {
  let todos = [];

  function fetchTodos(callback) {
    fetch('/api/todos')
      .then(response => response.json())
      .then(data => callback(data))
      .catch(error => console.error('Error fetching todos:', error));
  }

  function render() {
    const todoList = document.querySelector('#todo-list');
    todoList.innerHTML = '';

    todos.forEach((todo) => {
      const li = document.createElement('li');
      li.textContent = todo;
      todoList.appendChild(li);
    });
  }

  function addTodo(newTodo) {
    todos.push(newTodo); // Direct modification
    render();
  }

  fetchTodos((data) => {
    todos = data;
    render();
  });

  return `
    <div>
      <h1>My Todo List</h1>
      <ul id="todo-list"></ul>
      <button onclick="addTodo('New Task')">Add Task</button>
    </div>
  `;
}
```

<br/>

- Legacy Approach: Here, the todos state is directly manipulated, and the rendering logic is manually controlled.
- Legacy Challenges: The lack of abstractions makes the code harder to maintain and refactor. However, understanding the imperative logic behind it can be essential for those who need to support older systems.

<br/>

Comparison between the two examples:

<br/>


- Modern Code: It’s more readable and takes advantage of useful abstractions but can mask the internal workings for those who rely solely on frameworks.
- Legacy Code: It requires more effort to understand and work with but offers a more direct view of the fundamental processes.

<br/>

---

<br/>

## Balancing the Modern and the Classic

<br/>

A developer's true skill lies not in clinging to one technology but in navigating confidently between different paradigms and coding styles. For this:

<br/>

- Understand the Concepts Behind the Tools: Why do we use hooks? How does state management work in different paradigms?
- Practice with Diversity: Work with modern frameworks but also explore different languages or contexts.
- Learn from Legacy: Legacy projects are a goldmine for learning because they expose challenges that modern tools try to abstract away.

<br/>

---

<br/>

## Conclusion: Master the Present, Study the Past

<br/>

Legacy projects often present challenges that go beyond the documentation of a modern framework. They demand a deeper understanding of how things work under the hood. On the other hand, modern projects, even with all their sophistication, also benefit greatly from a solid foundation.

<br/>

Frameworks like Next.js aren't enemies; they're powerful allies when used wisely. However, to truly master programming, it’s essential to go beyond the tools and explore the concepts that underpin them.

<br/>

Programming isn’t about choosing between the modern and the classic. It’s about finding strength in balance, understanding that fundamentals are the roots of everything we build, whether it’s a modern application or maintaining a legacy system.