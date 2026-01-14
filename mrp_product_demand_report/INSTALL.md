# Інструкція по встановленню MRP Product Demand Report

## Встановлення модуля

### 1. Встановіть залежності Python
```bash
pip install xlsxwriter
```

### 2. Скопіюйте модуль
Скопіюйте папку `mrp_product_demand_report` до директорії з addons вашого Odoo:
```bash
cp -r mrp_product_demand_report /home/grigoriy/odoo16/apps/
```

### 3. Перезапустіть Odoo з оновленням модуля
```bash
# Варіант 1: Перезапуск з оновленням конкретного модуля
./odoo-bin -c /path/to/odoo.conf -u mrp_product_demand_report -d your_database

# Варіант 2: Просто перезапустіть Odoo
sudo systemctl restart odoo
```

### 4. Оновіть список додатків
1. Увійдіть в Odoo як адміністратор
2. Перейдіть в **Apps** (Додатки)
3. Натисніть **Update Apps List** (Оновити список додатків)
4. Підтвердіть оновлення

### 5. Встановіть модуль
1. В списку додатків знайдіть **"MRP Product Demand Report"**
2. Натисніть **Install** (Встановити)

## Перевірка встановлення

### Перевірка через UI
1. Перейдіть в **Manufacturing → Master Production Schedule**
2. Відкрийте будь-який запис планування виробництва
3. В заголовку форми має з'явитися кнопка **"Product Demand"**

### Якщо кнопка не з'являється

#### Спосіб 1: Оновіть модуль з примусовою модифікацією
```bash
./odoo-bin -c /path/to/odoo.conf -u mrp_product_demand_report -d your_database --stop-after-init
```

#### Спосіб 2: Перевірте логи
Перевірте `/var/log/odoo/odoo-server.log` на наявність помилок:
```bash
tail -f /var/log/odoo/odoo-server.log | grep -i "product_demand\|mrp_product_demand"
```

#### Спосіб 3: Перевірте чи модуль встановлений
```python
# В Odoo shell (./odoo-bin shell -c /path/to/odoo.conf -d your_database)
env['ir.module.module'].search([('name', '=', 'mrp_product_demand_report')])
```

#### Спосіб 4: Оновіть view вручну
1. Увійдіть в режим розробника (**Settings → Activate Developer Mode**)
2. Перейдіть в **Settings → Technical → User Interface → Views**
3. Знайдіть view з назвою **"mrp.production.schedule.form.inherit.product.demand"**
4. Натисніть **Edit** і збережіть без змін (це примусово оновить view)

#### Спосіб 5: Видаліть і встановіть знову
```bash
# В Odoo shell
env['ir.module.module'].search([('name', '=', 'mrp_product_demand_report')]).button_immediate_uninstall()
env['ir.module.module'].search([('name', '=', 'mrp_product_demand_report')]).button_immediate_install()
```

## Використання

1. Перейдіть в **Manufacturing → Master Production Schedule**
2. Застосуйте необхідні фільтри (продукт, дати, тощо)
3. Натисніть кнопку **"Product Demand"** в заголовку форми
4. Excel файл `product_demand_report.xlsx` автоматично завантажиться

## Структура експортованого файла

### Колонки
- **Колонка A**: Назва поля
- **Колонки B-N**: Періоди з датами
- **Остання колонка**: Total (сума за всі періоди)

### Рядки (для кожного продукту)
1. **Product Internal Reference**: Внутрішній код продукту
2. **Product Name**: Назва продукту
3. **Indirect Demand Forecast per period**: Непрямий попит за період
4. **Total Indirect Demand Forecast per period**: Накопичувальний непрямий попит

## Вимоги до прав доступу

Користувач має мати права групи **Manufacturing / User** (`mrp.group_mrp_user`)

## Налагодження

### Помилка ParseError
Якщо виникає помилка `ParseError`, переконайтеся що:
- Модуль `mrp_mps` встановлений
- View `mrp_production_schedule_view_form` існує

### Помилка "xlsxwriter not found"
Встановіть бібліотеку:
```bash
pip3 install xlsxwriter
# або
python3 -m pip install xlsxwriter
```

### Кнопка не з'являється після встановлення
Спробуйте:
```bash
# Очистити кеш
./odoo-bin -c /path/to/odoo.conf -d your_database --stop-after-init --update=mrp_product_demand_report

# Перезапустити з оновленням всіх залежностей
./odoo-bin -c /path/to/odoo.conf -d your_database -u mrp_mps,mrp_product_demand_report
```

## Підтримка

Якщо проблема не вирішена, надішліть:
1. Версію Odoo
2. Повний текст помилки з логів
3. Результат команди:
```bash
grep -r "mrp.production.schedule" /home/grigoriy/odoo16/addons/mrp_mps/views/
```
