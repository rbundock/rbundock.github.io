---
layout: post
title:  "Naming key columns. Power BI desktop series."
image: /assets/img/power-bi-desktop-series-naming-key-columns.jpg
---

![{{ page.title }}]({{ page.image }})


## A short article about defining valid identity columns
Power BI Desktop is the primary tool for building models that back visualisations and other analyses on top of user-defined data sets. Some defaults and conventions used during import and connecting the data might not be as evident as expected from a visual tool.

This article presents a common pitfall when defining field names. Following the recommendation ensures correct relationships between tables, predictable model changes and uninterrupted model development.

## Problem
Power BI Desktop automatically detects an identity field. This is the field that identifies the row in the table. It does so by looking for the ‘ID’ phrase in the column name. Although a relationship won’t necessarily use this field, visualisations will apply defaults specific to an identity field. The default summarisation in the totals row will use the number of values (rows) when you might expect a sum or average, or no summarisation at all.

![Table1](/assets/img/pbi0_1.png)

The screenshot presents a table with three columns. All the columns contain the exact data for us to see the difference in their display in visualisations.

- **ID** (a usually intended identity column)
  
- **Containing ID** (a column that accidentally contains the phrase ‘ID’)
  
- **Usual column** (a column that does not contain the phrase ‘ID’)

![Table2](/assets/img/pbi0_2.png)  

We can display all three columns to see the difference right away. The value of the first two columns was counted, and the third was summed.

![Table3](/assets/img/pbi0_3.png)  

Here, we can see that the count summarisation has been chosen by default, where we didn’t intend this to be an identity column. It is even more of an issue for text columns.

![Table3](/assets/img/pbi0_4.png)  

The last column is summarised correctly.

## Solution
For summarisation to work as intended, please avoid the phrase ‘ID’ altogether when naming columns that are not meant to be used as a key column. Omit the phrase unless it is a part of some abbreviation, then use an entire phrase instead.

