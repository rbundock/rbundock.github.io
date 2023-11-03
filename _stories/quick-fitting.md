---
layout: story
title: "Teeside University"
image: /assets/img/inaki-del-olmo-NIJuEQw0RKg-unsplash.jpg    
logo: /assets/img/teesside-uniwersytet-logo-300x159-1.png
logo_alt: Teesside University
categories:
  - Education
summary: Innovative collaboration enhances prosthetics with cutting-edge technology and software integration. 
---

## Our team
Our brilliant team provided expertise from the fields of healthcare, education and business to transform a great idea into a world-leading reality. 

Lusstech provided their knowledge and experience of developing cutting-edge, environmentally friendly Quantum Technology Super Sensors. These form an important part of the new generation of smart materials, which lead the way for more flexible and sustainable product creation. 

The Healthcare Innovation Centre (HIC) of Teesside University provided their expert knowledge, resources, and skillset to lead the biomedical engineering dimension of our project. 

South Tees Hospital NHS Foundation Trust provided a diverse and skilled interdisciplinary workforce. As a major trauma centre and a tertiary referral centre for vascular surgery, this Trust provided a workforce of healthcare professionals with an extensive range of experience in amputation surgery. 

Three business SMEs provided the practical business experience and knowledge of each stage of the prosthetics supply chain; the sensor, system integration, software and clinics involved in prosthetic design. 

Lastly, we offered our expertise in software development to provide a reliable, valuable and practical software solution to ensure the smooth integration and implementation of the QuickFit technique.

We are proud to be co-funded by ‘Innovate UK’; a non-departmental public body which aims to support creativity within business, and the development of new ideas.

## Our challenge
In 2015, the World Health Organization estimated that around 40 million individuals globally were living with amputations. This figure was expected to grow in line with increased life expectancies, and an increasing prevalence of the types of chronic diseases that often lead to amputation. Prosthetics are invaluable resources which support the independence and quality of life of individuals living with amputations. Currently, the major challenge within the prosthetics field is the problem of ill fitting prosthetic sockets. Sockets must be designed to provide stability, control, comfort and enable appropriate weight bearing responsibilities. They are crucial components of the overall effectiveness and utility of any form of prosthetic.

The drawbacks of a poorly designed socket can lead amputees to reject the prosthetics they are offered. They can cause weight bearing pressure, and reduced limb function and control. If sockets fit too tightly, blood-flow might become restricted and cause swelling and skin lesions in the limbs. Research has identified the widespread nature of this problem; skin lesions have been identified in 63-82% of lower limb amputees. 

In addition to the discomfort and pain caused by ill-fitting prosthetics, the process of fitting a prosthetic socket is often inconvenient and time-consuming for patients and prosthetists. The step-by-step method of fitting sockets often takes multiple trips to a prosthetic clinic over a period of weeks instead of days.


## Our mission
Our mission was to develop a Control Software Package (CSP) that integrates each component of the prosthetic socket-fitting process. This included the integration of 3D reconstruction, sensor data collection, socket design, and the output of a 3D solid model for 3D printing.

We aimed to collect sensor data from QTSS™ flex PCB strips provided by Lusstech Ltd using the microcontroller board developed by Teesside University. 

Following this stage, QuickFit would send the collected data to the biomechanical algorithm prepared by Teesside University so that the final socket could be generated.

Our team at HeadChannel have been responsible for preparing the software that integrates the appropriate hardware elements and MATLAB method. We have also recommended the best UI solutions to support the testing phase in the lab and the socket amendments phase.

The CSP (Control Software Package) integrates the following modules in a unified package: soft tissue assessment, sensor data collection and analysis, interactive 3D morphologic adjustment of a check socket based on the biomechanical analytical model, and the generation of a final definitive socket 3D solid model.

## Our journey
To achieve our goals, we used a Commercial Software Development platform to build a software package with a user-friendly interface, which collects sensor data and allows users to visualise results.

We identified this platform based on our research into the requirements of all partners of the QuickFit team. We decided that QuickFit will use a system that is desktop-based, and has the ability to produce and present grid-based 3D layouts. A MATLAB add-on was also integrated to facilitate the implementation of algorithms provided by Teeside University.

The user interface was designed to meet the needs of prosthetists; it was clear, easy to navigate, and facilitated the management of patient data and 3D bio-model reconstruction. It also supported the collection, visualisation and export of data for statistical analysis and socket generation.

The CSP was integrated with the hardware of the QuickFit project. This meant that optimised prosthetic sockets and the output of 3D models was integrated with 3D reconstruction processes, as well as sensor data collection, calibration and mapping.


## Our project
Our CSP has been successfully designed for prosthetists to guide the creation of sockets for amputees.

The following includes the primary features of our software: 

- Creates patient records

The CSP allows users to create patient records. These records include information regarding personal details, medical histories and stump characteristics. Once patient records are created, users have the option of reviewing and comparing groups of patients, and accessing generated STL files.

- Generating the test socket in STL file

Prosthetists can upload scanned 3D reconstructions of patients’ stumps in an STL format to the CSP. This allows stumps to be displayed, analysed and processed in the software. 

An algorithm developed by Teeside University, and used in the Software Control Package, can generate the 3D test socket model. This model can then be used for 3D printing. 

- Sensor data

The successful integration of the CSP with QuickFit’s hardware allows prosthetists to identify and monitor high-pressure points on 3D-printed test sockets using QTSS™ sensors.

To achieve this, QTSS™ flex PCB strips are placed in the printed test socket model, and connected to the computer where the application is installed. These sophisticated sensors then detect the pressure applied on the test socket, and those results are presented in real-time in the 3D model.

The microcontroller board is an important feature that reads data from QTSS™ sensors and sends them to QuickFit software. It integrates with the CSP to collect and process data from QTSS™ flex PCB strips, and presents pressure results. The system allows the user to decide when the connection should start and stop by initiating and pausing data processing. This is facilitated even when the microcontroller board is plugged in and using a USB port. 

Our system enables the simultaneous recording of 7 strips and 20 sensels of data, each at a constant rate of 10 Hz. This allows the user to determine how many data cycles they would like to capture. The system also enables sensor calibration, as different strip types and versions can be used.

The accuracy of the test socket can be validated during the whole gait cycle by the prosthetist’s ability to collect data, identify high-pressure points and store results for every selected gait phase. These functions allow the prosthetist to design the socket to perfectly fit an amputee when they are walking as well as standing. Within the CSP, the data that is gathered can be displayed as a video, or as an average of the results within the gait cycle.

- Presenting sensor results on the 3D model of the socket

To more accurately display the pressure points on a stump, we added a corresponding point on the outer surface of the 3D model for each sensel located inside the stump. This means that whatever is presented inside the 3D model is also portrayed on the 3D model surface.

- Sending data from the sensors to the algorithm

The prosthetist determines when data collection is completed by triggering the mechanism responsible for generating the adjusted socket. When this happens, the CSP processes data that has been gathered during the testing phase, and sends a table of results to the dedicated biomechanics algorithm.

The process of generating the adjusted socket uses data based on the test socket generated from the stump model. It also uses data from sensor results, which has been collected while stimulating gait phases. 

Once the adjusted socket has been developed, the QTSS™ sensor can be placed in the 3D printed model, and is tested in subsequent trials. 

- Data export for statistical analysis

In the last phase of the project, we developed report generation in the CSP. The sensor data gathered during different test scenarios was intended to be exported for statistical analysis. This function provides a transformative impact on the quality of the finished product, and has significant potential for further use in the prosthetics field.

## The outcome
1. **New QTSS sensors**

These new sensors are anisotropic; they deliver a ‘true’ pressure or force reading, based on the area of the pressure or force applied. They are compatible with open source software, like Arduino. The QTSS materials will be developed into new sensors specifically designed to fit the purposes of the QuickFit project.

2. **New biomechanical analytical models**
   
These will be developed using laboratory testing of mock-up stumps. Mock-up stumps will be placed into the socket, and a simulated gait loading will be applied. Data processing algorithms will be developed based on an analysis of the dynamic date of the embedded QTSS sensor data, against known biomechanical properties of a stump.

3. **Software development**
   
Our software will integrate the following modules into a unified system: soft tissue assessment, sensor data collection and analysis, interactive 3D morphologic adjustment of a check socket based on the biomechanical analytical model, and the generation of a final definitive socket 3D solid model.
This software is likely to gain increasing value in a world where labour intensive jobs are becoming progressively automated.

## The future of QuickFit
In the next phase of our QuickFit project, we aim to focus on enhancing and maximising the practical application of QuickFit in the medical environment.

We aim to fulfil standards like (WCAG) 2.0 or ISO 9241-210:2010. We also aim to ensure that our project abides by the Data Protection Act, and the NHS Digital Health Technology Standard so that the software can be tested with patients in real-world contexts. This will allow patients to play an active role in validating the process and method of generating and adjusting the patient socket.

In the work we have achieved so far, it has emerged that the QuickFit project might support multiple strip types. This could mean that the algorithm of placing sensors on the model can be adjusted so that flex PCB and textile strips can be fitted, whilst retaining their necessary parameters between them such as length, width and distance.

If tests in real-world contexts succeed in validating the QuickFit project, it will become available for use in UK Hospitals. It might even be sold for use in other areas of Europe.

The machine learning feature within our software system means that the more it is used, the better it will become at producing accurate and precise test sockets. This system will continue to grow in value therefore to enhance the lives of patients, the work of prosthetists, and the potential of the prosthetics field as a whole.

## Project facts
- **Team** – Developers 3, QA 2, BA 2, PM 1
- **Project management** – Scrum
- **Technology** – Windows Presentation Foundation (WPF), C#, Material design for grid-based layouts for 3D, 3D object presentation is ensured by Eyeshot, a CAD control based on .NET Framework 
