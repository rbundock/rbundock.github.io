---
layout: story
title:  "NHS PS Customer Portal"
image: /assets/img/NHS-PS-620x201-1.png
date:   2023-01-21
categories: Manufacturing
---

# Our client

![{{ page.title }}]({{ page.image }})


We worked on delivering a system that would support NHS Property Services with handling their processes and communication with customers. By providing the Customer Portal we aimed to improve NHSPS customer services, give unlimited access to all required information, save time on automating processes and ensure direct contact with the customer centre team when it’s needed. 

The goal was to implement a robust solution that integrates with several external systems and presents up-to-date information without any delay so the user can track queries and statuses online instead of calling the contact centre. As a result, the customer services team would avoid getting bogged down with simple repetitive tasks and could increase their availability for more complex cases and direct contact with the customers.


## Our role
Our role in this project was to support NHSPS with the full process of analysis, development, testing and project management. 

One of the most important steps was to run initial functional and nonfunctional requirements gathering, aiming to define the project scope and create the product backlog. To achieve this, we reviewed the substantial requirements documentation that had already been prepared and ran a series of discovery workshops with the Product Owner to understand the business needs and define project goals. Having the project overview and draft processes description, we started detailed analysis sessions with the goal to validate the process flow described by NHSPS. In the next step a gap analysis helped us to identify use cases that had been missed or not covered fully. We also worked on improving the initial functional mockups prepared by NHSPS, satisfying all the requirements of (WCAG) 2.0 standards, recommending UX/UI adjustments or completely new views and designing the look and feel of the system on both web and mobile. 


## Architecture
While the processes and requirements were being discussed, we designed and documented the architecture that would meet NHSPS’ business, technical and security requirements.

We proposed to deliver a system using the ABP.io framework and host it in Azure. The ABP.io framework, with its infrastructure based on ASP.NET Core provides many of the features planned in the project scope, such as authentication and authorisation, transaction management for data synchronisation and audit logging. 

It also allows for a modular architecture, so we decided to use it to build a modular monolith architecture with flexibility to adapt the system by adding new features without affecting other modules. In the future, due to the ABP.io framework modularity and modular monolith architecture, we would be able to separate selected modules and use them as independent services without having to rebuild other parts of the system. In addition, by building the application elements as independent and integrated modules, we could control cost efficiency by boosting the performance of the selected system modules.

An ASP.Net Core web API was chosen to connect the system to the web interface accessible by system users and customers, utilising Angular to provide a rich, interactive user experience, across both desktop and mobile devices. 

Simultaneously, we designed and agreed on the list of endpoints and contracts to pull all required data stored in 3rd party systems in real-time without impacting system performance significantly.

We planned to incorporate a Redis cache to decrease data access latency and increase throughput and SignalR to handle messaging and push notifications within the portal. Login and authentication were designed using Azure AD/Azure AD B2C and Identity Server 4 to manage access security.   


## Environment configuration
In order to meet NHSPS requirements, we were obliged to set a specific environment configuration, define targets for code coverage, security vulnerabilities, static code analysis issues, agree on branch policies, code analysis tools and unit tests.

We created a pull requests policy based on reviewers hierarchy. It was defined who can push changes to the selected repository and who had to approve those changes once the pull request was raised. 

We prepared a CI pipeline that, apart from building the code, was also running a statistical code analysis using selected tools, such as NPM Audit, WhiteSource Bolt, Code Coverage SonarCloud and xUnit.

We built a CD pipeline that published artefacts from the CI step on the selected environments once approved. The release process was configured in a way to give NHSPS exclusive privilege to manage releases on certain environments in order to meet internal security policies. As a result, publishing changes required a selected team member’s approval. Also, at this stage, we ran API stress tests using Jmeter and functional tests using Selenium.


## Testing
Within the quality assurance area, we agreed a testing policy so that all test cases prepared for the project were stored in separate test plans divided into three groups. First of all, we had test plans per functionality or module to cover all user stories for this area. We also started creating test plans per sprint to ensure quality for the scope implemented during a sprint. And finally, we prepared core flow test plans – the set of test cases that cover the main business flow. The last group was split into core flow ‘must haves’ (test cases covering the paths necessary to work) and core flow ‘extended’ (test cases covering paths that are used more rarely, but also important). 

## Project facts
- **Team** – Developers 8 (Team Leader 1, Solution Architect 1, Backend dev 2, Frontend dev 2, DevOps 2), UX/UI Designer 1, QA 2, BA 2, PM 1.
- **Project management** – Scrum for production.

## Technology
**Technologies used**

ABP.io framework – .NET 5, Angular 10, Jasmine, Karma, Entity Framework Core, MS SQL, Azure Cloud, Azure AD/B2C, Azure KeyVault, XUnit, Azure DevOps, SonarCloud,

**Technologies planned**

Azure Redis Cache, Azure Service Bus, Azure Functions, Azure Logic Apps
