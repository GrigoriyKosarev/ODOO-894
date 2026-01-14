{
    'name': 'MRP Product Demand Report',
    'version': '16.0.1.0.0',
    'category': 'Manufacturing',
    'summary': 'Export Product Demand data from Production Schedule to Excel',
    'description': """
        This module adds a "Product Demand" export action to the MRP Production Schedule wizard.
        It exports product demand forecast data to Excel with periods as columns.
    """,
    'author': 'Your Company',
    'website': 'https://www.yourcompany.com',
    'depends': ['mrp_mps'],
    'data': [
        'wizard/mrp_production_schedule_views.xml',
    ],
    'installable': True,
    'application': False,
    'auto_install': False,
    'license': 'LGPL-3',
}
