---
layout: post
title:  "Establishing relationships. Power BI desktop series"
image: /assets/img/power-bi-desktop-series-establishing-relationships.jpg
---

![{{ page.title }}]({{ page.image }})

## A short article about dealing with default relationships – Power BI
Power BI Desktop is the primary tool for building models that back visualisations and other analyses on top of user-defined data sets. Some defaults and conventions used during import and connecting the data might not be as apparent as expected from a visual tool.

This article presents common pitfalls when defining fields that directly affect the relationships in the model. Following the recommendations below ensures correct relationships between tables, predictable model changes and uninterrupted model development.

## Problem
Power BI Desktop can and will detect relationships between tables loaded with the model automatically. If you want to rely on that to make updates to the model run smoothly without repeating the changes made manually, it is necessary to know the defaults.

The relationship between tables is made with columns of the same name. The name of the column doesn’t have to be precisely the same. It is enough for the column to start with the name of the other. This, however, leads to a situation where you can easily name a column with some common name, like ‘ID’ or ‘Name’ and get tables misconnected. Moreover, already configured relationships might be broken due to the fact that some other unrelated tables are connected.

In the presented example, we can see three tables, but only two are connected correctly. Note that Power BI not only uses column names to establish relationships. During the second stage of detecting relationships, Power BI checks the contents of the columns it found matching by name. Nevertheless, it doesn’t prevent all failures, as we will see below.

![Table1](/assets/img/pbi_1_1.png)

When displaying the relationships, it is clear that although the first relationship is correct, the second one is doubtful. In the case of a contact–company relationship, we have demonstrated that adding suffixes (here enclosed with braces) to a column name does not break correct relationships. It can sometimes be useful.

![Table2](/assets/img/pbi_1_2.png)

The employee–contact relationship is entirely wrong. We cannot really assume that when we store people’s names, that one won’t appear in some other set of data we intend to use. Here, the appearance of ‘Satya Nadella’ incurred a relationship between employees and contacts using the ‘Name’ column, which is highly unreliable if not completely undesirable.

![Table3](/assets/img/pbi_1_3.png)


## Solution
It is best to use unique column names in all tables. Use suffixes for key columns to control which relationships should be automatically established.

If necessary, you can even duplicate the key column if multiple relationships are using the same key column, and for each relationship, provide a unique suffix. This will provide an extra precaution preventing the formation of relationships with unrelated tables. This is successful partly because there may be only one relationship between two tables.

Always provide real identity fields so there will be no chance for non-key fields to establish relationships. The relationships should express real dependency, as creating only one per pair of the related tables was possible.

Introduce complex identity fields built from key columns that describe the relationship by concatenating the contents to establish a single relationship between two tables and prevent unnecessary use of intermediary tables that can contain some common key column names.
