**Land Use Land Cover (LULC) Classification – Warangal
Project Overview
**
This project performs Land Use Land Cover (LULC) classification for the Warangal region using Landsat 9 satellite imagery and Support Vector Machine (SVM) classification in Google Earth Engine.

The objective of this project is to classify major land cover types such as water bodies, vegetation, built-up areas, cropland, and barren land using remote sensing techniques.

Study Area

The study area is Warangal, an important urban and agricultural region in Telangana.

**Data Source**

Satellite imagery used in this project:

Landsat 9

Collection: LANDSAT/LC09/C02/T1_L2

Year: 2022

Cloud Cover: < 5%

Spectral Bands Used
Band	Description
SR_B1	Coastal
SR_B2	Blue
SR_B3	Green
SR_B4	Red
SR_B5	Near Infrared (NIR)
SR_B6	Shortwave Infrared 1
SR_B7	Shortwave Infrared 2


**Methodology**

**1. Data Preprocessing**

Filter Landsat 9 imagery by date and cloud cover

Clip imagery to the Warangal boundary

Generate mean composite image

**2. Training Data Preparation**

Training samples were created for the following classes:

Class	Land Cover Type
0	Water Bodies
1	Vegetation
2	Built-up
3	Cropland
4	Barren Land

**3. Classification**

The classification was performed using Support Vector Machine (SVM) implemented in Google Earth Engine.

Steps involved:

Extract spectral values from training points

Split dataset into training and testing samples

Train the SVM classifier

Generate the LULC classification map

**4. Accuracy Assessment**

Accuracy evaluation was performed using:

Confusion Matrix

Overall Accuracy

Kappa Coefficient

Producer Accuracy

Consumer Accuracy

**Output**

The final LULC classification map was exported as GeoTIFF.

Class Visualization
Class	Land Cover	Color
0	Water	Blue
1	Vegetation	Dark Green
2	Built-up	Red
3	Cropland	Brown
4	Barren Land	Yellow
