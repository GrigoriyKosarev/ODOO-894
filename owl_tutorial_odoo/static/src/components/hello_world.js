/** @odoo-module **/

import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";

/**
 * Приклад 1: Найпростіший OWL компонент
 *
 * Цей компонент просто відображає привітання.
 * Не має стану (state) і не має інтерактивності.
 */
export class HelloWorld extends Component {}

// Вказуємо який XML шаблон використовувати
HelloWorld.template = "owl_tutorial.HelloWorld";

// Реєструємо компонент як action в Odoo
registry.category("actions").add("owl_tutorial_hello_world", HelloWorld);
