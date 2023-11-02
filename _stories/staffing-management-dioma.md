---
layout: story
title: "Software integration with DIMONA for an event staffing company"
image: /assets/img/christina-wocintechchat-com-6Dv3pe-JnSg-unsplash.jpg
categories:
  - Human Resources
summary: Automation Streamlines Staff Declarations, Saving European Firm Time and Money.
---

# Software integration with DIMONA for an event staffing company

![Table1](/assets/img/unnamed-3.png)

## European company automates staff declarations and saves a fortune in admin
We are helping a leading European enterprise to save hundreds of hours of valuable time every month — by streamlining and automating the way it complies with employment law.

## Overview
The multinational business had operated successfully for years across Europe. But its operation in Belgium was experiencing an administrative headache.

The government of Belgium insisted that public agencies and private companies register all new employees at the time they joined — and also notify the authorities when they left their jobs. It was an effective way to crack down on the shadow economy and fraud.

Declarations had to be completed electronically and immediately with the country’s National Office for Social Security using the official DIMONA online system.

For small businesses, occasional manual declarations were relatively simple. However, the process could be hugely time-consuming for large enterprises with workforces that have changing hours.

**The European business at the heart of the story was getting bogged down in administration every time an employee’s working hours were changed or shifts were added or removed.  Thousands of such events were happening per month — so staff were spending hundreds of hours, laboriously filling in the same old forms.**

The company was conscious that oversights could be punished severely — and couldn’t risk any human re-keying errors when its staff copied details from their HR system onto DIMONA. In fact, any failures to make declarations or any mistakes could result in prison sentences of up to one year or fines of up to €12,500.

Before long, the company realised it needed a smarter way to fulfil its legal obligations without holding back the business. So they shared the challenge with us at HeadChannel.


## The solution
We were in the right place at the right time to help, as our two companies were already working on a large IT project to refresh corporate systems.

But figuring out a way to link the company’s staff management application with DIMONA and enable automatic declarations would be a major challenge.

“For one thing, the Belgium government hadn’t provided any APIs. For another, DIMONA was highly complex — and there was no proper documentation,” explains Radoslaw Chmielewski, Project Manager within our HeadChannel team.“The only way to solve this was for us to dig deep into the system. So we got to work.”

Having understood the nuances of DIMONA, our team then used technology from our own state-of-the-art recruitment software package, Astrix, to create a bespoke solution.

After evaluating multiple approaches, we used our expertise to find the best way to integrate with DIMONA, map data in multiple formats, process it automatically and ensure consistency and accuracy. The task was immense, with our team handling **11 different data sets and around 700 fields.**

The solution also included signatures and verification, so the company could prove it had made declarations successfully. Importantly, the solution also took care of data privacy.


## Technical success: the inside story

**Design and prototyping:** Having analysed data sets and fields, our team designed how to map data onto the system. This involved:

- Selection of Renci.SshNet library that met technical requirements
- Signature developed using certificate file (PEM file) and password
- Utilisation of PKCS #7 Standard as the digital signature standard

**Secure communication to DIMONA:** This was achieved using a private key file and password. It involved development of data exchange from the SSH File Transfer Protocol as well as communication using SFTP protocol.

**Digital signature:** Development using .NET cryptography tools allowed the signature of documents sent to the DIMONA system. The approach ensured the correct structure and form of digital signature.

**Data integrity:** Our team ensured the accuracy and consistency of data between systems and over the entire life-cycle.

**Fault tolerance:** We found a way to prevent any abrupt disconnection of the SFTP server from blocking the application. Now, all messages are only sent once a secure connection has been restored.

## The results
- With its new solution up and running, the global business is gaining clear benefits:

**Time and money savings:** Making declarations is now effortless. The company has saved hundreds of hours every month because the new solution allows employee details and any changes to their work patterns to be uploaded seamlessly to DIMONA with precision accuracy. Each employee’s personal information is stored securely too.

**Reduced risk:** The company addressed the threat of compliance breaches and severe penalties — with a solution that’s robust and reliable. The gathering and storage of staff data is also compliant with GDPR regulations.

**Expertise on call:** We provide business-grade support, ensuring peace of mind for the company and its staff.

**Looking ahead**

We continue to have a rewarding partnership with the company and are looking to replicate the success by transforming business operations in other important areas.

“This solution helps us to streamline our business, while removing cost and risk. We had a great partnership with HeadChannel already — and this successful project builds on our relationship.”

**– Project director at the global business**

## Project facts
- **Team** – Developers 3, QA 2, BA 2, PM 1
- **Project management** – Scrum
- **Technology** – ASP.NET, ITextSharp, Azure Web Jobs, AngularJS, CSS
