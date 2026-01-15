/** @odoo-module **/

import { Component, useState } from "@odoo/owl";
import { registry } from "@web/core/registry";

/**
 * Приклад 2: Лічильник (Counter)
 *
 * Демонструє:
 * - useState для реактивного стану
 * - Обробка подій (кліки)
 * - Методи компонента
 */
export class Counter extends Component {
    /**
     * setup() викликається один раз при ініціалізації компонента
     * Тут ми налаштовуємо стан та хуки
     */
    setup() {
        // useState створює реактивний об'єкт
        // Коли змінюється this.state - компонент автоматично перемальовується
        this.state = useState({
            count: 0,
            step: 1,
        });
    }

    /**
     * Збільшити лічильник
     */
    increment() {
        this.state.count += this.state.step;
    }

    /**
     * Зменшити лічильник
     */
    decrement() {
        this.state.count -= this.state.step;
    }

    /**
     * Скинути лічильник
     */
    reset() {
        this.state.count = 0;
    }

    /**
     * Змінити крок
     */
    changeStep(newStep) {
        this.state.step = newStep;
    }
}

Counter.template = "owl_tutorial.Counter";

registry.category("actions").add("owl_tutorial_counter", Counter);
