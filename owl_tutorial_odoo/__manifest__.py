{
    'name': 'OWL Tutorial для Новачків',
    'version': '16.0.1.0.0',
    'category': 'Tools',
    'summary': 'Навчальний модуль OWL (Odoo Web Library) з прикладами для початківців',
    'description': """
        Цей модуль містить навчальні приклади OWL компонентів для Odoo 16.

        Що включено:
        - Базові приклади JavaScript
        - Прості OWL компоненти
        - Інтерактивні приклади
        - Інтеграція з Odoo backend

        Для навчальних цілей.
    """,
    'author': 'Your Company',
    'website': 'https://www.yourcompany.com',
    'depends': ['web'],
    'data': [
        'views/owl_tutorial_menu.xml',
    ],
    'assets': {
        'web.assets_backend': [
            'owl_tutorial_odoo/static/src/components/**/*.js',
            'owl_tutorial_odoo/static/src/components/**/*.xml',
        ],
    },
    'installable': True,
    'application': True,
    'auto_install': False,
    'license': 'LGPL-3',
}
