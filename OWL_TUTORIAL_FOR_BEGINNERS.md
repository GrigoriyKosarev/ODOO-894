# 🦉 OWL (Odoo Web Library) - Повний Урок для Новачків

## 📖 Зміст

1. [Що таке OWL?](#що-таке-owl)
2. [JavaScript Основи](#javascript-основи)
3. [OWL Компоненти - Базові](#owl-компоненти---базові)
4. [OWL Компоненти - Середні](#owl-компоненти---середні)
5. [OWL + Odoo Backend](#owl--odoo-backend)
6. [Практичні Приклади](#практичні-приклади)

---

## Що таке OWL?

**OWL (Odoo Web Library)** - це JavaScript фреймворк, створений Odoo для побудови інтерактивних компонентів веб-інтерфейсу.

### 🎯 Коли використовувати OWL:

✅ **ТАК - використовуйте OWL коли потрібно:**
- Створити кастомний віджет для поля
- Інтерактивний дашборд з графіками
- Drag-and-drop інтерфейс
- Складні форми з динамічною логікою
- Real-time оновлення даних
- Кастомні календарі, канбани, тощо

❌ **НІ - НЕ потрібен OWL для:**
- Додавання полів до моделей (Python)
- Експорт даних (Python)
- Звіти (Python + QWeb)
- Прості кнопки (XML)
- Server actions (XML + Python)
- Workflow автоматизація (Python)

### Архітектура OWL в Odoo

```
┌─────────────────────────────────────┐
│         Browser (Frontend)          │
│  ┌───────────────────────────────┐  │
│  │     OWL Components (JS)       │  │
│  │  - Компоненти (Classes)       │  │
│  │  - Шаблони (XML)              │  │
│  │  - Стилі (CSS/SCSS)           │  │
│  └───────────────────────────────┘  │
│              ▲                       │
│              │ RPC calls             │
│              ▼                       │
└─────────────────────────────────────┘
               │
               │ HTTP/JSON-RPC
               │
┌─────────────────────────────────────┐
│        Server (Backend)             │
│  ┌───────────────────────────────┐  │
│  │    Python Models & Methods    │  │
│  │  - Бізнес логіка              │  │
│  │  - Робота з базою даних       │  │
│  │  - API endpoints              │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
```

---

## JavaScript Основи

Перед вивченням OWL, потрібно розуміти основи JavaScript.

### 1. Змінні

```javascript
// Змінні (можна змінювати)
let age = 25;
age = 26; // OK

// Константи (не можна змінювати)
const name = "Іван";
// name = "Петро"; // ERROR!

// Старий спосіб (не використовувати)
var oldWay = "deprecated";
```

### 2. Типи даних

```javascript
// Числа
let number = 42;
let float = 3.14;

// Рядки (strings)
let text1 = "Привіт";
let text2 = 'Світ';
let text3 = `Привіт, ${text2}!`; // Template literal (інтерполяція)

// Boolean (true/false)
let isActive = true;
let isDeleted = false;

// Arrays (масиви)
let numbers = [1, 2, 3, 4, 5];
let names = ["Іван", "Петро", "Марія"];

// Objects (об'єкти)
let person = {
    name: "Іван",
    age: 25,
    city: "Київ"
};

// Null і Undefined
let empty = null;
let notDefined = undefined;
```

### 3. Функції

```javascript
// Звичайна функція
function greet(name) {
    return "Привіт, " + name;
}

// Arrow function (стрілкова функція) - СУЧАСНИЙ СПОСІБ
const greet2 = (name) => {
    return `Привіт, ${name}`;
};

// Коротка arrow function (без return)
const greet3 = (name) => `Привіт, ${name}`;

// Виклик функції
console.log(greet("Іван")); // Привіт, Іван
```

### 4. Умови

```javascript
let age = 18;

// If-else
if (age >= 18) {
    console.log("Дорослий");
} else {
    console.log("Неповнолітній");
}

// Тернарний оператор (коротко)
let status = age >= 18 ? "Дорослий" : "Неповнолітній";
```

### 5. Цикли

```javascript
// For loop
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}

// ForEach (для масивів)
let fruits = ["яблуко", "банан", "апельсин"];
fruits.forEach((fruit) => {
    console.log(fruit);
});

// Map (перетворення масиву)
let numbers = [1, 2, 3];
let doubled = numbers.map((num) => num * 2); // [2, 4, 6]

// Filter (фільтрація масиву)
let ages = [15, 18, 21, 16];
let adults = ages.filter((age) => age >= 18); // [18, 21]
```

### 6. Робота з об'єктами

```javascript
// Створення об'єкта
let product = {
    name: "Ноутбук",
    price: 20000,
    quantity: 5
};

// Доступ до властивостей
console.log(product.name);        // "Ноутбук"
console.log(product["price"]);    // 20000

// Додавання нової властивості
product.brand = "Dell";

// Destructuring (деструктуризація)
const { name, price } = product;
console.log(name);  // "Ноутбук"
console.log(price); // 20000
```

### 7. Класи (для OWL)

```javascript
// Визначення класу
class Person {
    // Конструктор (викликається при створенні)
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Метод
    greet() {
        return `Привіт, мене звати ${this.name}`;
    }

    // Геттер
    get info() {
        return `${this.name}, ${this.age} років`;
    }
}

// Створення екземпляра
const ivan = new Person("Іван", 25);
console.log(ivan.greet());  // "Привіт, мене звати Іван"
console.log(ivan.info);     // "Іван, 25 років"

// Наслідування
class Employee extends Person {
    constructor(name, age, position) {
        super(name, age); // Виклик конструктора батьківського класу
        this.position = position;
    }

    work() {
        return `${this.name} працює як ${this.position}`;
    }
}

const worker = new Employee("Петро", 30, "Програміст");
console.log(worker.work()); // "Петро працює як Програміст"
```

### 8. Async/Await (для API викликів)

```javascript
// Promise (обіцянка)
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Дані отримано");
        }, 1000);
    });
};

// Async/Await - СУЧАСНИЙ СПОСІБ
async function loadData() {
    try {
        const data = await fetchData();
        console.log(data); // "Дані отримано" (через 1 секунду)
    } catch (error) {
        console.error("Помилка:", error);
    }
}

loadData();
```

---

## OWL Компоненти - Базові

OWL компонент складається з **3 частин**:

1. **JavaScript клас** - логіка
2. **XML шаблон** - структура (HTML)
3. **CSS** - стилі (опціонально)

### Приклад 1: Простий компонент "Hello World"

#### Файл: `static/src/components/hello_world/hello_world.js`

```javascript
/** @odoo-module **/

import { Component } from "@odoo/owl";

export class HelloWorld extends Component {
    // Це найпростіший компонент - без логіки
    // Просто відображає шаблон
}

// Вказуємо який шаблон використовувати
HelloWorld.template = "owl_tutorial.HelloWorld";
```

#### Файл: `static/src/components/hello_world/hello_world.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<templates xml:space="preserve">
    <t t-name="owl_tutorial.HelloWorld">
        <div class="hello-world">
            <h1>Привіт, Світ!</h1>
            <p>Це мій перший OWL компонент</p>
        </div>
    </t>
</templates>
```

### Приклад 2: Компонент зі станом (state)

#### Файл: `static/src/components/counter/counter.js`

```javascript
/** @odoo-module **/

import { Component, useState } from "@odoo/owl";

export class Counter extends Component {
    // Налаштування компонента
    setup() {
        // useState створює реактивний об'єкт
        // Коли змінюється state - компонент перемальовується автоматично
        this.state = useState({
            count: 0
        });
    }

    // Методи компонента
    increment() {
        this.state.count++;
    }

    decrement() {
        this.state.count--;
    }

    reset() {
        this.state.count = 0;
    }
}

Counter.template = "owl_tutorial.Counter";
```

#### Файл: `static/src/components/counter/counter.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<templates xml:space="preserve">
    <t t-name="owl_tutorial.Counter">
        <div class="counter-component">
            <h2>Лічильник</h2>

            <!-- Відображення значення -->
            <div class="counter-display">
                <h1><t t-esc="state.count"/></h1>
            </div>

            <!-- Кнопки -->
            <div class="counter-buttons">
                <button class="btn btn-success" t-on-click="increment">
                    + Збільшити
                </button>

                <button class="btn btn-danger" t-on-click="decrement">
                    - Зменшити
                </button>

                <button class="btn btn-secondary" t-on-click="reset">
                    ↻ Скинути
                </button>
            </div>
        </div>
    </t>
</templates>
```

**Пояснення:**
- `t-esc="state.count"` - відображає значення (escaped - безпечно)
- `t-on-click="increment"` - при кліку викликає метод increment()
- `useState()` - робить об'єкт реактивним (автоматичне оновлення UI)

### Приклад 3: Компонент з props (параметрами)

#### Файл: `static/src/components/greeting/greeting.js`

```javascript
/** @odoo-module **/

import { Component } from "@odoo/owl";

export class Greeting extends Component {
    // props - параметри які передаються ззовні
    // Визначаємо які props очікуємо
    static props = {
        name: { type: String, optional: false },
        age: { type: Number, optional: true },
    };

    // Значення за замовчуванням для props
    static defaultProps = {
        age: 0,
    };

    get greeting() {
        if (this.props.age) {
            return `Привіт, ${this.props.name}! Вам ${this.props.age} років.`;
        }
        return `Привіт, ${this.props.name}!`;
    }
}

Greeting.template = "owl_tutorial.Greeting";
```

#### Файл: `static/src/components/greeting/greeting.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<templates xml:space="preserve">
    <t t-name="owl_tutorial.Greeting">
        <div class="greeting-component">
            <h3><t t-esc="greeting"/></h3>
        </div>
    </t>
</templates>
```

**Використання компонента:**

```xml
<!-- Передача props -->
<Greeting name="'Іван'" age="25"/>
<Greeting name="'Марія'"/>
```

---

## OWL Компоненти - Середні

### Приклад 4: TODO List (Список справ)

#### Файл: `static/src/components/todo_list/todo_list.js`

```javascript
/** @odoo-module **/

import { Component, useState } from "@odoo/owl";

export class TodoList extends Component {
    setup() {
        this.state = useState({
            todos: [
                { id: 1, text: "Вивчити JavaScript", done: true },
                { id: 2, text: "Вивчити OWL", done: false },
                { id: 3, text: "Створити Odoo модуль", done: false },
            ],
            newTodoText: "",
        });
    }

    // Додати нову справу
    addTodo() {
        if (this.state.newTodoText.trim()) {
            const newTodo = {
                id: Date.now(), // Простий спосіб генерації ID
                text: this.state.newTodoText,
                done: false,
            };
            this.state.todos.push(newTodo);
            this.state.newTodoText = ""; // Очистити поле
        }
    }

    // Перемикнути статус (виконано/не виконано)
    toggleTodo(todo) {
        todo.done = !todo.done;
    }

    // Видалити справу
    deleteTodo(todoId) {
        const index = this.state.todos.findIndex(t => t.id === todoId);
        if (index !== -1) {
            this.state.todos.splice(index, 1);
        }
    }

    // Обробка Enter в input
    onKeydown(event) {
        if (event.key === "Enter") {
            this.addTodo();
        }
    }

    // Геттери для статистики
    get totalTodos() {
        return this.state.todos.length;
    }

    get completedTodos() {
        return this.state.todos.filter(t => t.done).length;
    }

    get pendingTodos() {
        return this.totalTodos - this.completedTodos;
    }
}

TodoList.template = "owl_tutorial.TodoList";
```

#### Файл: `static/src/components/todo_list/todo_list.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<templates xml:space="preserve">
    <t t-name="owl_tutorial.TodoList">
        <div class="todo-list-component">
            <h2>📝 Мій TODO List</h2>

            <!-- Статистика -->
            <div class="todo-stats">
                <span>Всього: <t t-esc="totalTodos"/></span> |
                <span>Виконано: <t t-esc="completedTodos"/></span> |
                <span>Залишилось: <t t-esc="pendingTodos"/></span>
            </div>

            <!-- Додавання нової справи -->
            <div class="todo-input-group">
                <input
                    type="text"
                    class="form-control"
                    placeholder="Нова справа..."
                    t-model="state.newTodoText"
                    t-on-keydown="onKeydown"
                />
                <button
                    class="btn btn-primary"
                    t-on-click="addTodo">
                    ➕ Додати
                </button>
            </div>

            <!-- Список справ -->
            <ul class="todo-list">
                <!-- t-foreach - цикл по масиву -->
                <t t-foreach="state.todos" t-as="todo" t-key="todo.id">
                    <li t-att-class="todo.done ? 'todo-item done' : 'todo-item'">
                        <!-- Checkbox -->
                        <input
                            type="checkbox"
                            t-att-checked="todo.done"
                            t-on-click="() => this.toggleTodo(todo)"
                        />

                        <!-- Текст -->
                        <span class="todo-text">
                            <t t-esc="todo.text"/>
                        </span>

                        <!-- Кнопка видалення -->
                        <button
                            class="btn btn-sm btn-danger"
                            t-on-click="() => this.deleteTodo(todo.id)">
                            🗑️
                        </button>
                    </li>
                </t>
            </ul>
        </div>
    </t>
</templates>
```

**Нові директиви QWeb:**
- `t-model` - двостороннє зв'язування (two-way binding)
- `t-foreach` - цикл по масиву
- `t-as` - назва змінної в циклі
- `t-key` - унікальний ключ (для оптимізації)
- `t-att-class` - динамічний клас
- `t-att-checked` - динамічний атрибут

---

## OWL + Odoo Backend

### Приклад 5: Завантаження даних з Odoo

#### Файл: `static/src/components/product_list/product_list.js`

```javascript
/** @odoo-module **/

import { Component, useState, onWillStart } from "@odoo/owl";
import { useService } from "@web/core/utils/hooks";

export class ProductList extends Component {
    setup() {
        // Ініціалізація стану
        this.state = useState({
            products: [],
            loading: true,
            error: null,
        });

        // Отримання сервісу RPC (для API викликів)
        this.rpc = useService("rpc");

        // Хук який викликається перед першим рендером
        onWillStart(async () => {
            await this.loadProducts();
        });
    }

    // Завантаження продуктів з Odoo
    async loadProducts() {
        try {
            this.state.loading = true;
            this.state.error = null;

            // RPC виклик до Odoo backend
            const products = await this.rpc("/web/dataset/call_kw", {
                model: "product.product",
                method: "search_read",
                args: [
                    [], // domain (фільтр) - [] означає всі записи
                    ["name", "list_price", "qty_available"], // поля для читання
                ],
                kwargs: {
                    limit: 10, // обмеження кількості
                },
            });

            this.state.products = products;
        } catch (error) {
            console.error("Помилка завантаження продуктів:", error);
            this.state.error = "Не вдалося завантажити продукти";
        } finally {
            this.state.loading = false;
        }
    }

    // Оновлення списку
    refresh() {
        this.loadProducts();
    }
}

ProductList.template = "owl_tutorial.ProductList";
```

#### Файл: `static/src/components/product_list/product_list.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<templates xml:space="preserve">
    <t t-name="owl_tutorial.ProductList">
        <div class="product-list-component">
            <div class="product-list-header">
                <h2>📦 Список Продуктів</h2>
                <button class="btn btn-primary" t-on-click="refresh">
                    🔄 Оновити
                </button>
            </div>

            <!-- Завантаження -->
            <t t-if="state.loading">
                <div class="alert alert-info">
                    ⏳ Завантаження...
                </div>
            </t>

            <!-- Помилка -->
            <t t-if="state.error">
                <div class="alert alert-danger">
                    ❌ <t t-esc="state.error"/>
                </div>
            </t>

            <!-- Список продуктів -->
            <t t-if="!state.loading and !state.error">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Назва</th>
                            <th>Ціна</th>
                            <th>На складі</th>
                        </tr>
                    </thead>
                    <tbody>
                        <t t-foreach="state.products" t-as="product" t-key="product.id">
                            <tr>
                                <td><t t-esc="product.name"/></td>
                                <td><t t-esc="product.list_price"/> грн</td>
                                <td><t t-esc="product.qty_available"/></td>
                            </tr>
                        </t>
                    </tbody>
                </table>
            </t>
        </div>
    </t>
</templates>
```

**Нові концепції:**
- `useService("rpc")` - отримання RPC сервісу для API викликів
- `onWillStart()` - lifecycle hook (виконується перед рендером)
- `/web/dataset/call_kw` - стандартний endpoint для викликів методів
- `async/await` - асинхронні операції

---

## Практичні Приклади

### Приклад 6: Форма з валідацією

```javascript
/** @odoo-module **/

import { Component, useState } from "@odoo/owl";
import { useService } from "@web/core/utils/hooks";

export class RegistrationForm extends Component {
    setup() {
        this.state = useState({
            form: {
                name: "",
                email: "",
                age: "",
            },
            errors: {},
            submitting: false,
        });

        this.notification = useService("notification");
    }

    // Валідація форми
    validate() {
        const errors = {};

        if (!this.state.form.name.trim()) {
            errors.name = "Ім'я обов'язкове";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(this.state.form.email)) {
            errors.email = "Невалідний email";
        }

        const age = parseInt(this.state.form.age);
        if (isNaN(age) || age < 18 || age > 100) {
            errors.age = "Вік має бути від 18 до 100";
        }

        this.state.errors = errors;
        return Object.keys(errors).length === 0;
    }

    // Відправка форми
    async submit() {
        if (!this.validate()) {
            return;
        }

        try {
            this.state.submitting = true;

            // Тут можна відправити дані на backend
            // await this.rpc(...);

            // Показати повідомлення
            this.notification.add("Реєстрація успішна!", {
                type: "success",
            });

            // Очистити форму
            this.state.form = { name: "", email: "", age: "" };
            this.state.errors = {};
        } catch (error) {
            this.notification.add("Помилка реєстрації", {
                type: "danger",
            });
        } finally {
            this.state.submitting = false;
        }
    }
}

RegistrationForm.template = "owl_tutorial.RegistrationForm";
```

---

## 📚 Корисні Посилання

### Офіційна документація:
- **OWL документація**: https://github.com/odoo/owl
- **Odoo документація**: https://www.odoo.com/documentation/16.0/developer/reference/frontend/owl_components.html

### JavaScript навчання:
- **MDN JavaScript**: https://developer.mozilla.org/uk/docs/Web/JavaScript
- **JavaScript.info**: https://javascript.info/

### Практика:
1. Почніть з простих компонентів (Hello World, Counter)
2. Додайте стан (useState)
3. Додайте інтеракцію (події, форми)
4. Інтегруйте з Odoo backend (RPC)

---

## 🎓 Завдання для практики

### Легкі:
1. Створіть компонент "Калькулятор" (додавання, віднімання)
2. Створіть компонент "Таймер" (відлік секунд)
3. Створіть компонент "Список покупок"

### Середні:
4. Створіть компонент "Пошук продуктів" з фільтрацією
5. Створіть компонент "Календар подій"
6. Створіть компонент "Графік продажів"

### Складні:
7. Створіть компонент "Drag-and-drop Kanban"
8. Створіть компонент "Real-time Chat"
9. Створіть компонент "Інтерактивний Dashboard"

---

## ⚠️ Важливо для вашої поточної задачі

**Для експорту в Excel OWL НЕ ПОТРІБЕН!**

Ваша поточна реалізація (Python + XML) є **правильною** і **оптимальною**:
- ✅ Python метод `action_export_product_demand()`
- ✅ XML view з кнопкою
- ✅ Server action в Action menu

OWL потрібен був би лише якщо ви хочете:
- Інтерактивний перегляд даних **перед** експортом
- Вибір колонок/полів через UI
- Попередній перегляд таблиці в браузері

Але для простого експорту в файл - ваш підхід **ідеальний**!

---

**Бажаєте, щоб я створив робочі приклади цих компонентів в модулі?**
