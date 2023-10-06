
---
layout: post
title:  "Controlling relationship cardinality. Power BI desktop series"
---

## A short article on how to manage relationship cardinality. Power BI Desktop series.
Power BI Desktop is the primary tool for building models that back visualisations and other analysis on top of user-defined data sets. Some defaults and conventions used during import and connecting the data might not be as obvious as expected from a visual tool.

This article presents a way to evaluate relationship cardinality. This post gives insight on how to validate relationships between tables and reason about the relationships and data to use in the model.

## Problem
Once Power BI Desktop chooses the key columns for relationships it is required to know the cardinality of the predicted relationships. Here the data is scanned and matched against two tables and when duplicates are found in either of the tables the cardinality is raised. Note that it is happening regardless of what relationships are actually created in the data store.

A one-to-many relationship is the most common and Power BI handles it quite well if enough data stored in the tables provide proof that it is the case. It is also the default cardinality.

In the case where all the key columns in the table contain exactly the same data without duplicates Power BI comes up with a one-to-one relationship.

This might be exactly what we want but quite often the data in the table might not necessarily reflect a real-world relationship. From the company and contact data we can reason about a single company having a single contact however it would be very reasonable to establish a one-to-many relationship instead. The default behaviour considerably complicates verifying the model after loading sample data and might cause unforeseeable changes to the relationships when new data is loaded.

The most serious issue, however, is that reloading the data doesn’t fix the relationship. It prohibits further data loads. The tables would need to then be removed from the model and added again. A one-to-one relationship has also defaulted for tables that have foreign keys in the data source and are empty. For those without a relationship in the database Power BI won’t establish a relationship and further loads with valid data won’t create the relationship.

## Solution
Having considered the whole mechanism of detecting relationships and their cardinality, the best advice would be to prepare sample data that reflects desired relationships and use them every time a change to the model is introduced.

It is also safe to avoid one-to-one relationships as they don’t play well in the relational model. They usually are either an extension of an already existing table or they duplicate data from some other table and can be connected in some other location in the graph. There are cases where these tables actually only temporarily express a one-to-one relationship and further development will extend this relationship. If it is safe to interpret the data as related to many it would be advisable to do so.

Power BI Desktop provides an overview of a model that can easily be used to verify if all relationships are intact. When opening the relationship management windows there is also a way to re-run the automation for detecting relationships without re-adding the affected tables.
