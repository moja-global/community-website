---
id: powering-deforestation-prediction-using-artificial-intelligence
title: Powering Deforestation prediction using Artificial Intelligence
slug: /powering-deforestation-prediction-using-artificial-intelligence.md
---

Today, Agriculture, forestry, and other land use account for 23% of the global greenhouse gas emissions. Moja global’s mission is to support ambitious climate action by developing open-source software and helping remove greenhouse gases (GHG) from the land sector. One of the primary sources of greenhouse gas emissions from the land sector stems from deforestation. With nearly 6-17% of the global carbon dioxide emissions stemming from deforestation, we might reach the level of current afforestation (about 0.13%) a few years after 2030.

Moja global develops and maintains FLINT, a tool to estimate emissions and sinks of greenhouse gasses from forestry and agriculture. FLINT is ideal for projecting the carbon impact of baseline scenarios that differ by locality and between countries. The project involves a novel development of a machine-learning algorithm to predict the likelihood of a particular pixel in the landscape being deforested over the projection period. The results retrieved are compatible with emissions monitoring, reporting and validation software conforming with the UNFCCC and IPCC guidelines.

## Approach

Myanmar and the Philippines were chosen as the pilot areas for this project. There is a timeline of 1986 - 2019 (for Myanmar) and 1990 - 2019 (for the Philippines) because of the latest, sufficient, and high-quality data. The situation of both these countries is quite similar as well. The forest cover has been reduced, and accurate predictions of future deforestation can help identify high-risk areas. It would allow the concerned authorities with taking appropriate preventive measures.

The overall project was broken down in the following phases:

1. **Data pre-processing and feature engineering**: The data was collected from various sources and processed to mitigate null values, class imbalance and scale differences. It was followed by incorporating 14 features, which include spectral bands, topographical features and geographical factors.

2. **Baseline model implementation**: We implemented standard machine learning algorithms like Logistic Regression, Random Forest, SGD Classifier (Stochastic Gradient Descent) and Hierarchical Bayesian framework. The Random Forest algorithm outperformed other algorithms with an F1 score of 0.6.

3. **Deep learning model implementation**: We implemented different architectures of CNN-LSTM (Convolutional Neural Networks - Long Short Term Memory) with the best-case AUC (Area under the Receiver Operating Curve) score of 0.87 (on a scale of 0-1, with a higher score implying better results) for test data (for predicting 1-year into the future) in the case of Myanmar and 0.83 for the Philippines.

## Data Pre-Processing & Feature extraction

The primary dataset for Myanmar has been retrieved from the forest cover change data (gain/loss of forest cover at pixel level). The data present in the Tagged Image File Format covers the forest cover information for that year. The images retrieved from Terrapulse were compiled and processed to match the LandSAT imagery standards. Apart from this, the Google Earth Spectral Dataset was utilized.

The primary dataset for the Philippines has been retrieved from Terrapulse, which contains forest cover data from 1990 to 2019. We used the Google Earth Spectral Dataset to augment the Terrapulse dataset and sent it for further processing.

The extracted data from the Google Earth Landsat consisted of bands that allowed us to analyze forest cover changes over time. By the end of the pre-processing and feature extraction step, we capitalized on some of the features as per the available literature on forestry:

- SRTM elevation of the landscape.
- Proximity of a location from the nearest road.
- Proximity of a location from the nearest waterway.

## Baseline model implementation

After data collection, pre-processing, and feature extraction, we paved the path forward to utilize standard machine learning algorithms. The base model implementation will further pave the way forward for use with deep learning algorithms and architecture. The results obtained after implementing a standard machine learning pipeline are showcased below:

| Without resampling | Logistic Regression | Random Forest | SGD   |
| ------------------ | ------------------- | ------------- | ----- |
| Accuracy           | 0.95                | 0.97          | 0.95  |
| Precision          | 1                   | 0.993         | 0.998 |
| F1                 | 0.947               | 0.97          | 0.947 |
| Recall             | 0                   | 0.6           | 0.008 |

> Results obtained without resampling the data to account for class imbalance.

| With downsampling | Logistic Regression | Random Forest | SGD   |
| ----------------- | ------------------- | ------------- | ----- |
| Accuracy          | 0.63                | 0.86          | 0.53  |
| Precision         | 0.63                | 0.86          | 0.53  |
| F1                | 0.96                | 0.99          | 0.97  |
| Recall            | 0.136               | 0.42          | 0.132 |

> Results obtained after downsampling the data to account for class imbalance.

Random Forest was discovered as the one algorithm that constantly outperformed other models. It included the fact that Random forest can better predict on a class imbalanced set than linear models. Random Forest can also learn class imbalance on unsampled data, giving the best performance amongst the three baseline models.

A Hierarchical Bayesian Framework model was also implemented, which achieved an overall accuracy of 84%. The results obtained for Myanmar by implementing Hierarchical Bayesian Framework are:

| Overall accuracy | Figure of merit | Sensitivity | Specificity | True skill statistic | Cohen's kappa |
| ---------------- | --------------- | ----------- | ----------- | -------------------- | ------------- |
| 0.84             | 0.1             | 0.17        | 0.92        | 0.09                 | 0.1           |

> Results obtained for Myanmar by implementing Hierarchical Bayesian Framework.

## Deep learning model implementation

### Myanmar

We implemented the model architecture after signifying an Area of Interest (AoI) selection, accounting for the class imbalance and dimensionality reduction using PCA. A Convolutional Neural Network processed the time-series data to capture the spatial relations in the dataset. It is followed by parallel implementation of Long Short Term Memory and Auto-Regressive Integrated Moving Average to capture the time-series component of the data. We did the hyperparameter tuning along with a lot of hit-and-trials, and we measured the performance accordingly.

The shortlisted model had the following architecture in place:

```sh
Layer (type) Output Shape Param #
=========================================================
conv_lst_m2d_4 (ConvLSTM2D) (None, 5, 20, 32, 32) 16640
_________________________________________________________________
batch_normalization_2 (None, 5, 20, 32, 32) 128
_________________________________________________________________
conv_lst_m2d_5 (ConvLSTM2D) (None, 5, 15, 32, 32) 18960
_________________________________________________________________
batch_normalization_3 (None, 5, 15, 32, 32) 128
_________________________________________________________________
conv_lst_m2d_6 (ConvLSTM2D) (None, 5, 12, 32, 32) 11712
_________________________________________________________________
batch_normalization_4 (None, 5, 12, 32, 32) 128
_________________________________________________________________
conv_lst_m2d_7 (ConvLSTM2D) (None, 5, 10, 32, 32) 7960
_________________________________________________________________
batch_normalization_5 (None, 5, 10, 32, 32) 128
_________________________________________________________________
conv_lst_m2d_8 (ConvLSTM2D) (None, 5, 8, 32, 32) 5216
_________________________________________________________________
batch_normalization_6 (None, 5, 8, 32, 32) 128
_________________________________________________________________
conv_lst_m2d_9 (ConvLSTM2D) (None, 5, 6, 32, 32) 3048
_________________________________________________________________
batch_normalization_7 (None, 5, 6, 32, 32) 128
_________________________________________________________________
conv_lst_m2d_10 (ConvLSTM2D) (None, 5, 4, 32, 32) 1456
_________________________________________________________________
batch_normalization_8 (None, 5, 4, 32, 32) 128
_________________________________________________________________
conv_lst_m2d_11 (ConvLSTM2D) (None, 5, 3, 32, 32) 768
_________________________________________________________________
batch_normalization_9 (None, 5, 3, 32, 32) 128
_________________________________________________________________
conv_lst_m2d_12 (ConvLSTM2D) (None, 5, 2, 32, 32) 368
_________________________________________________________________
batch_normalization_10 (None, 5, 2, 32, 32) 128
_________________________________________________________________
conv_lst_m2d_13 (ConvLSTM2D) (None, 1, 32, 32) 112
_________________________________________________________________
batch_normalization_11 (None, 1, 32, 32) 128
_________________________________________________________________
conv2d (Conv2D) (None, 1, 32, 32) 10
```

It included some 67,530 parameters, out of which 66,890 were trainable and 640 were non-trainable.

### Philippines

Similarly, for the Philippines, the dataset pre-processing involved removing null patches, resampling, and applying principal component analysis for creating shards.

We utilized continuous probabilistic target variables since the loss (RMSE) converged quickly around Epoch 9, which we quickly discovered to be an issue with the architecture. The shortlisted model had the following architecture in place, with the total number of parameters were 67,530, out of which 66,890 were trainable and 640 non-trainable:

```sh
Layer (type) Output Shape Param #
=================================================================
conv_lst_m2d_20 (ConvLSTM2D) (None, 5, 20, 32, 32) 16640
_________________________________________________________________
batch_normalization_20 (Batc (None, 5, 20, 32, 32) 128
_________________________________________________________________
conv_lst_m2d_21 (ConvLSTM2D) (None, 5, 15, 32, 32) 18960
_________________________________________________________________
batch_normalization_21 (Batc (None, 5, 15, 32, 32) 128
_________________________________________________________________
conv_lst_m2d_22 (ConvLSTM2D) (None, 5, 12, 32, 32) 11712
_________________________________________________________________
batch_normalization_22 (Batc (None, 5, 12, 32, 32) 128
_________________________________________________________________
conv_lst_m2d_23 (ConvLSTM2D) (None, 5, 10, 32, 32) 7960
_________________________________________________________________
batch_normalization_23 (Batc (None, 5, 10, 32, 32) 128
_________________________________________________________________
conv_lst_m2d_24 (ConvLSTM2D) (None, 5, 8, 32, 32) 5216
_________________________________________________________________
batch_normalization_24 (Batc (None, 5, 8, 32, 32) 128
_________________________________________________________________
conv_lst_m2d_25 (ConvLSTM2D) (None, 5, 6, 32, 32) 3048
_________________________________________________________________
batch_normalization_25 (Batc (None, 5, 6, 32, 32) 128
_________________________________________________________________
conv_lst_m2d_26 (ConvLSTM2D) (None, 5, 4, 32, 32) 1456
_________________________________________________________________
batch_normalization_26 (Batc (None, 5, 4, 32, 32) 128
_________________________________________________________________
conv_lst_m2d_27 (ConvLSTM2D) (None, 5, 3, 32, 32) 768
_________________________________________________________________
batch_normalization_27 (Batc (None, 5, 3, 32, 32) 128
_________________________________________________________________
conv_lst_m2d_28 (ConvLSTM2D) (None, 5, 2, 32, 32) 368
_________________________________________________________________
batch_normalization_28 (Batc (None, 5, 2, 32, 32) 128
_________________________________________________________________
conv_lst_m2d_29 (ConvLSTM2D) (None, 1, 32, 32) 112
_________________________________________________________________
batch_normalization_29 (Batc (None, 1, 32, 32) 128
_________________________________________________________________
permute_4 (Permute) (None, 32, 32, 1) 0
_________________________________________________________________
conv2d_2 (Conv2D) (None, 32, 32, 1) 10
_________________________________________________________________
permute_5 (Permute) (None, 1, 32, 32) 0
```

## Reports

The visualisation of CNN Predictions as well as the Ground Truth can be seen below, for Myanmar:

| ![Ground Truth (left) vs Model prediction (right) for Myanmar from 1995-2015](../static/img/moja.gif) |
|:--:|
| Ground Truth (left) vs Model prediction (right) for Myanmar from 1995-2015 |


For the Philippines, we obtained a best-case train AUC of 0.8316 and a test AUC of 0.7706. It was made possible after normalizing the dataset with global min-max values of the band values in the Philippines and including a Conv2D layer via permute.

## Conclusion

The current scope of work successfully demonstrates the effectiveness of Conv-LSTM for accurately predicting forest cover change for Myanmar and the Philippines. The model aims at improving the performance of GHG estimation models, which rely on accurate deforestation prediction to estimate the GHG emissions from the land sector. International organizations like IPCC and local governments can utilize the results to estimate GHG emissions from the land-use sector.

In the future, the project can include Spatio-temporal models, which might give good results, such as GAN-LSTMs. It also includes universal models that are trained for one country and can be extended to another country. We also have an added scope of working with an on-ground team in the region. We have sufficient satellite and forest-cover change data and combine ground reports with the satellite image data for better predictions.
