# 🦉 OWL Tutorial - Навчальний модуль для Odoo

Цей модуль містить практичні приклади OWL (Odoo Web Library) компонентів для новачків.

## 📚 Що включено

### Приклади компонентів:

1. **Hello World** - Найпростіший компонент
   - Базова структура OWL компонента
   - Шаблони (templates)

2. **Counter (Лічильник)** - Компонент зі станом
   - `useState` для реактивного стану
   - Обробка подій (clicks)
   - Методи компонента

3. **TODO List** - Робота з масивами
   - Масиви в state
   - Цикли (`t-foreach`)
   - Двостороннє зв'язування (`t-model`)
   - Фільтрація даних
   - Обчислювані властивості (getters)

## 🚀 Встановлення

### 1. Скопіюйте модуль

```bash
cp -r owl_tutorial_odoo /path/to/odoo/addons/
```

### 2. Оновіть список додатків

У Odoo:
1. Перейдіть в **Settings → Apps**
2. Натисніть **Update Apps List**
3. Підтвердіть

### 3. Встановіть модуль

1. Знайдіть **"OWL Tutorial для Новачків"**
2. Натисніть **Install**

## 📖 Як використовувати

### Перегляд прикладів через меню

Після встановлення у вас з'явиться нове меню:

**OWL Tutorial → Приклади → Всі Приклади**

### Перегляд окремих прикладів

Ви можете додати окремі меню для кожного прикладу, додавши в `views/owl_tutorial_menu.xml`:

```xml
<!-- Hello World -->
<record id="action_hello_world" model="ir.actions.client">
    <field name="name">Hello World</field>
    <field name="tag">owl_tutorial_hello_world</field>
</record>

<menuitem id="menu_hello_world"
          name="Hello World"
          parent="menu_owl_tutorial_examples"
          action="action_hello_world"/>

<!-- Counter -->
<record id="action_counter" model="ir.actions.client">
    <field name="name">Лічильник</field>
    <field name="tag">owl_tutorial_counter</field>
</record>

<menuitem id="menu_counter"
          name="Лічильник"
          parent="menu_owl_tutorial_examples"
          action="action_counter"/>

<!-- TODO List -->
<record id="action_todo_list" model="ir.actions.client">
    <field name="name">TODO List</field>
    <field name="tag">owl_tutorial_todo_list</field>
</record>

<menuitem id="menu_todo_list"
          name="TODO List"
          parent="menu_owl_tutorial_examples"
          action="action_todo_list"/>
```

## 🎓 Навчальний процес

### Крок 1: Вивчіть JavaScript основи

Прочитайте повний туторіал: `OWL_TUTORIAL_FOR_BEGINNERS.md`

### Крок 2: Розгляньте код прикладів

Відкрийте файли в `static/src/components/` та вивчіть:
- JavaScript файли (`.js`) - логіка
- XML файли (`.xml`) - шаблони

### Крок 3: Модифікуйте приклади

Спробуйте внести зміни:
- Додайте нові кнопки в Counter
- Додайте пріоритети в TODO List
- Змініть стилі

### Крок 4: Створіть власні компоненти

Використовуйте приклади як основу для власних компонентів.

## 📁 Структура модуля

```
owl_tutorial_odoo/
├── __init__.py
├── __manifest__.py
├── README.md
├── views/
│   └── owl_tutorial_menu.xml    # Меню
└── static/
    └── src/
        └── components/
            ├── hello_world.js    # Приклад 1: Простий компонент
            ├── hello_world.xml
            ├── counter.js        # Приклад 2: Стан (state)
            ├── counter.xml
            ├── todo_list.js      # Приклад 3: Масиви
            └── todo_list.xml
```

## 🔧 Налагодження

### Відкрийте браузер Console

1. Натисніть **F12** або **Ctrl+Shift+I**
2. Перейдіть на вкладку **Console**
3. Тут ви побачите помилки JavaScript

### Активуйте Developer Mode

1. **Settings → Activate Developer Mode**
2. Це дозволить бачити більше деталей

### Перезавантажте assets

Після зміни JavaScript/XML файлів:

```bash
# Варіант 1: Через UI
Settings → Technical → User Interface → Views
Натисніть "Regenerate Assets Bundles"

# Варіант 2: Через командну строку
./odoo-bin -c odoo.conf -u owl_tutorial_odoo -d your_database
```

## 💡 Корисні поради

### 1. Використовуйте console.log()

```javascript
setup() {
    this.state = useState({ count: 0 });
    console.log("Component initialized", this.state);
}

increment() {
    this.state.count++;
    console.log("New count:", this.state.count);
}
```

### 2. Використовуйте debugger

```javascript
increment() {
    debugger; // Браузер зупиниться тут
    this.state.count++;
}
```

### 3. Перевіряйте помилки в Console

Всі помилки JavaScript відображаються в Browser Console (F12).

## 📚 Додаткові ресурси

### Офіційна документація:
- [OWL Framework](https://github.com/odoo/owl)
- [Odoo Frontend Documentation](https://www.odoo.com/documentation/16.0/developer/reference/frontend/owl_components.html)

### JavaScript:
- [MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)

### Туторіали:
- Повний туторіал: `OWL_TUTORIAL_FOR_BEGINNERS.md`

## 🎯 Наступні кроки

Після опанування базових прикладів, спробуйте:

1. **Додати стилі (CSS)**
   - Створіть `.scss` файл для кожного компонента
   - Додайте в `__manifest__.py` в секцію `assets`

2. **Інтегрувати з Odoo Backend**
   - Використовуйте `useService("rpc")` для API викликів
   - Завантажуйте дані з моделей Odoo

3. **Створити складні компоненти**
   - Drag-and-drop
   - Графіки (Charts.js)
   - Календар

## ❓ FAQ

### Q: Чому компонент не оновлюється після зміни коду?

A: Потрібно перезавантажити assets:
```bash
./odoo-bin -c odoo.conf -u owl_tutorial_odoo -d your_database
```
Або очистити кеш браузера (Ctrl+Shift+R).

### Q: Як подивитися помилки?

A: Відкрийте Browser Console (F12) → вкладка Console.

### Q: Де знайти більше прикладів?

A: Подивіться стандартні Odoo компоненти в:
```
odoo/addons/web/static/src/
```

## 📝 Ліцензія

LGPL-3

## 👤 Автор

Your Company

---

**Успіхів у вивченні OWL! 🦉**
