/** @odoo-module **/

import { Component, useState } from "@odoo/owl";
import { registry } from "@web/core/registry";

/**
 * Приклад 3: TODO List (Список справ)
 *
 * Демонструє:
 * - Робота з масивами в state
 * - Цикли (t-foreach)
 * - Двостороннє зв'язування (t-model)
 * - Обробка Enter
 * - Обчислювані властивості (getters)
 */
export class TodoList extends Component {
    setup() {
        this.state = useState({
            todos: [
                { id: 1, text: "Вивчити JavaScript", done: true },
                { id: 2, text: "Вивчити OWL", done: false },
                { id: 3, text: "Створити Odoo модуль", done: false },
            ],
            newTodoText: "",
            filter: "all", // all, active, completed
        });
    }

    /**
     * Додати нову справу
     */
    addTodo() {
        const text = this.state.newTodoText.trim();
        if (!text) return;

        const newTodo = {
            id: Date.now(), // Простий спосіб генерації унікального ID
            text: text,
            done: false,
        };

        this.state.todos.push(newTodo);
        this.state.newTodoText = ""; // Очистити поле введення
    }

    /**
     * Перемикнути статус справи (виконано/не виконано)
     */
    toggleTodo(todo) {
        todo.done = !todo.done;
    }

    /**
     * Видалити справу
     */
    deleteTodo(todoId) {
        const index = this.state.todos.findIndex((t) => t.id === todoId);
        if (index !== -1) {
            this.state.todos.splice(index, 1);
        }
    }

    /**
     * Обробка натискання Enter в полі введення
     */
    onKeydown(event) {
        if (event.key === "Enter") {
            this.addTodo();
        }
    }

    /**
     * Змінити фільтр
     */
    setFilter(filter) {
        this.state.filter = filter;
    }

    /**
     * Видалити всі виконані справи
     */
    clearCompleted() {
        this.state.todos = this.state.todos.filter((todo) => !todo.done);
    }

    // ============== Обчислювані властивості (Getters) ==============

    /**
     * Відфільтровані справи (залежно від активного фільтра)
     */
    get filteredTodos() {
        switch (this.state.filter) {
            case "active":
                return this.state.todos.filter((t) => !t.done);
            case "completed":
                return this.state.todos.filter((t) => t.done);
            default:
                return this.state.todos;
        }
    }

    /**
     * Загальна кількість справ
     */
    get totalTodos() {
        return this.state.todos.length;
    }

    /**
     * Кількість виконаних справ
     */
    get completedTodos() {
        return this.state.todos.filter((t) => t.done).length;
    }

    /**
     * Кількість активних (не виконаних) справ
     */
    get activeTodos() {
        return this.totalTodos - this.completedTodos;
    }

    /**
     * Відсоток виконання
     */
    get completionPercentage() {
        if (this.totalTodos === 0) return 0;
        return Math.round((this.completedTodos / this.totalTodos) * 100);
    }
}

TodoList.template = "owl_tutorial.TodoList";

registry.category("actions").add("owl_tutorial_todo_list", TodoList);
