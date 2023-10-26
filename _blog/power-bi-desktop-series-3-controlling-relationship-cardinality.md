---
layout: post
title:  "Controlling relationship cardinality. Power BI desktop series"
image: /assets/img/power-bi-desktop-series-3-controlling-relationship-cardinality.jpg
---

![{{ page.title }}]({{ page.image }})

## A short article on how to manage relationship cardinality. Power BI Desktop series.
Power BI Desktop is the primary tool for building models that back visualisations and other analyses on top of user-defined data sets. Some defaults and conventions used during import and connecting the data might not be as obvious as expected from a visual tool.

This article presents a way to evaluate relationship cardinality. This post gives insight on how to validate relationships between tables and reason about the relationships and data to use in the model.

## Problem
Once Power BI Desktop chooses the key columns for relationships, it is required to know the cardinality of the predicted relationships. Here, the data is scanned and matched against two tables, and when duplicates are found in either of the tables, the cardinality is raised. Note that it happens regardless of what relationships are created in the data store.

![Table](/assets/img/pbi2_1.png)

A one-to-many relationship is the most common, and Power BI handles it quite well if enough data stored in the tables proves it is the case. It is also the default cardinality.

![Table2](/assets/img/pbi2_2.png)

In the case where all the key columns in the table contain exactly the same data without duplicates, Power BI comes up with a one-to-one relationship.

![Table3](/assets/img/pbi2_3.png)

This might be exactly what we want, but the data in the table often might not necessarily reflect a real-world relationship. From the company and contact data, we can reason about a single company having a single contact; however, it would be very reasonable to establish a one-to-many relationship instead. The default behaviour considerably complicates verifying the model after loading sample data and might cause unforeseeable relationship changes when new data is loaded.

The most serious issue, however, is that reloading the data doesn’t fix the relationship. It prohibits further data loads. The tables would need to be removed from the model and added again. A one-to-one relationship has also defaulted for tables that have foreign keys in the data source and are empty. For those without a relationship in the database, Power BI won’t establish a relationship, and further loads with valid data won’t create the relationship.

![Table4](/assets/img/pbi2_4.png)

## Solution
Considering the whole mechanism of detecting relationships and their cardinality, the best advice would be to prepare sample data that reflects desired relationships and use them every time a change to the model is introduced.

It is also safe to avoid one-to-one relationships as they don’t play well in the relational model. They usually are either an extension of an already existing table or they duplicate data from some other table and can be connected in some different location in the graph. In some cases, these tables only temporarily express a one-to-one relationship, and further development will extend this relationship. If it is safe to interpret the data as related to many, it would be advisable to do so.

Power BI Desktop provides an overview of a model that can easily be used to verify if all relationships are intact. When opening the relationship management windows, there is also a way to re-run the automation for detecting relationships without re-adding the affected tables.
