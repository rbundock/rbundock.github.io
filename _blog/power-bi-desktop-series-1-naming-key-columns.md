---
layout: post
title:  "Naming key columns. Power BI desktop series."
image: /assets/img/power-bi-desktop-series-naming-key-columns.jpg
---

![{{ page.title }}]({{ page.image }})

## A short article about defining valid identity columns
Power BI Desktop is the primary tool for building models that back visualisations and other analysis on top of user-defined data sets. Some defaults and conventions used during import and connecting the data might not be as obvious as expected from a visual tool.

This article presents a common pitfall when defining field names. Following the recommendation ensures correct relationships between tables, predictable model changes and uninterrupted model development.

## Problem
Power BI Desktop automatically detects an identity field. This is the field that identifies the row in the table. It does so by looking for ‘ID’ phrase in the column name. Although a relationship won’t necessarily use this field, visualisations will apply defaults specific to an identity field. The default summarisation in the totals row will use the number of values (rows) when you might expect sum or average or no summarisation at all.

The screenshot presents a table with three columns. All the columns contain the same data for us to see what the difference will be in their display in visualisations.

- **ID** (a usually intended identity column)
  
- **Containing ID** (a column that accidentally contains the phrase ‘ID’)
  
- **Usual column** (a column that does not contain the phrase ‘ID’)

We can display all three columns in order to see the difference right away. The value of the first two columns were counted and the third summed.

Here we can see that the count summarisation has been chosen by default where we didn’t intend this to be an identity column. It is even more of an issue for text columns.

The last column is summarised correctly.

## Solution
For summarization to work as intended please avoid the phrase ‘ID’ altogether when naming columns that are not meant to be used as a key column. Omit the phrase unless it is a part of some abbreviation, then use a full phrase instead.

