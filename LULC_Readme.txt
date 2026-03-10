How to Use

Follow these steps to run the LULC classification code.

1. Open Google Earth Engine

Go to the Google Earth Engine Code Editor and sign in with your Google account.

2. Create a New Script

Click Scripts in the left panel.

Click New → Repository → Script.

Give the script a name, for example:

LULC_Warangal
3. Copy the Code

Open the JavaScript file from this repository.

Copy the entire code.

Paste it into the script editor.

4. Import Training Data

Before running the script, upload or draw the training samples for the following classes:

WaterBodies

Vegetation

Built-up

CropLand

BarrenLand

These training polygons should contain a class property corresponding to the class label.

Example:

0 = Water
1 = Vegetation
2 = Built-up
3 = Cropland
4 = Barren Land
5. Run the Script

Click the Run button in the Earth Engine editor.

The script will:

Load Landsat 9 imagery

Filter images by date and cloud cover

Clip imagery to the Warangal boundary

Train the SVM classifier

Generate the LULC classification map

6. Export the Result

The script exports the classified image to Google Drive as a GeoTIFF file.

You can download and open it in:

QGIS

ArcGIS

Any GIS software

7. Check Accuracy

The script automatically calculates:

Confusion Matrix

Overall Accuracy

Kappa Coefficient

Producer Accuracy

Consumer Accuracy

These values will appear in the Console panel.

Barren Land	Yellow
