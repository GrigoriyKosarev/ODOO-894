# MRP Product Demand Report

## Description

This module adds a "Product Demand" export action to the MRP Production Schedule wizard in Odoo. It allows users to export product demand forecast data to an Excel file with periods as columns.

## Features

- **Product Demand Export**: Adds a "Product Demand" button to the `mrp.production.schedule` wizard
- **Excel Export**: Exports data to Excel format (.xlsx) with proper formatting
- **Period Columns**: Shows periods as columns with a Total column at the end
- **Filtered Data**: Respects the filters applied in the wizard

## Exported Data

The Excel file contains the following rows for each product:
1. **Product Internal Reference**: The product's internal reference code
2. **Product Name**: The name of the product
3. **Indirect Demand Forecast per period**: The indirect demand quantity for each period
4. **Total Indirect Demand Forecast per period**: Cumulative indirect demand forecast

## Columns Structure

- **Column 1**: Field name (row label)
- **Columns 2-N**: Period values (date ranges)
- **Last Column**: Total (sum across all periods)

## Installation

1. Copy the `mrp_product_demand_report` module to your Odoo addons directory
2. Install required Python library:
   ```bash
   pip install xlsxwriter
   ```
3. Update the apps list in Odoo
4. Install the "MRP Product Demand Report" module

## Dependencies

- `mrp_mps`: Odoo MRP Master Production Schedule module
- `xlsxwriter`: Python library for creating Excel files

## Usage

1. Go to Manufacturing → Master Production Schedule
2. Apply any desired filters (product, date range, etc.)
3. Click the "Product Demand" button in the header
4. The Excel file will be automatically downloaded

## Technical Details

- **Module Name**: `mrp_product_demand_report`
- **Version**: 17.0.1.0.0
- **Odoo Version**: 17.0
- **License**: LGPL-3

## Author

Your Company

## Support

For issues or questions, please contact your system administrator.
