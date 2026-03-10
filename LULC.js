Map.addLayer(warangal);
Map.centerObject(warangal);
var L9 = ee.ImageCollection("LANDSAT/LC09/C02/T1_L2");

var image = L9.filterBounds(warangal)
            .filterDate('2022-01-01','2022-12-31')
            .filterMetadata('CLOUD_COVER',"less_than",5)
            .mean()
            .clip(warangal);
            print(image);
            Map.addLayer(image,{},'LANDSAT_9');

var Training = WaterBodies.merge(Vegitation).merge(builtup).merge((CropLand).merge(Bareenland))
print(Training);
var bands = ['SR_B1','SR_B2','SR_B3','SR_B4','SR_B5','SR_B6','SR_B7'];
var input = image.select(bands);
var Training_image = input.sampleRegions({
  collection: Training,
  properties:['class'],
  scale:60,
  
});
print(Training_image);
var traindata = Training_image.randomColumn();
var trainset = traindata.filter(ee.Filter.gte('random',0.7));
var testset = traindata.filter(ee.Filter.lte('random',0.3));
var classifier = ee.Classifier.libsvm().train({
  features: trainset,
  classProperty: 'class',
  inputProperties: bands});
  
var Classified = image.classify(classifier);
Map.addLayer(Classified,{min:0,max:4,palette: ['blue','darkgreen','red','brown','yellow']});

Export.image.toDrive({
  image: Classified,
  description: 'LULC_Warangal',
  folder: 'Google earth engine',
  region: warangal,
  maxPixels: 1e13,
  scale: 30,
  fileFormat : 'GeoTIFF'
});
var classified_Valid = testset.classify(classifier)
var error_matrix = classified_Valid.errorMatrix({
  actual: 'class',
  predicted:'classification'
});

print('Error Matrix:', error_matrix);

var accuracy = error_matrix.accuracy();
var kappa = error_matrix.kappa();
var producerAccuracy = error_matrix.producersAccuracy();
var consumersAccuracy = error_matrix.consumersAccuracy();
print("Overall Accuracy: ", accuracy)
print('kappa Accuracy: ', kappa);
