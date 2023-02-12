# SummerHack2023 - Tabular Data Extractor 
## Overview 
This project, submitted by Team Cabbage for SummerHack2023 by CISSA, is a web application that simplifies the process of data collection for data scientists. The app extracts tabular data from PNG, JPG, or PDF files uploaded by the user and converts it into a downloadable CSV file. A majority of data scientists' time and effort is spent on collecting, cleaning, and preparing of data for analysis. Our project hopes to minimise such overhead.

Access the video @ https://youtu.be/hb62_uenFzI

## Key Features
- Extracts tabular data from multiple image files (PNG, JPG, PDF)
- Outputs data as a CSV file that is easily accessible and compatible with most data analysis tools
- Minimizes the time and effort spent on data collection and preparation for analysis
## Technologies Used
The web application was built with React JS for the front-end, and express.js and Python for the back-end. The image scanning feature were implemented in Python with the following technologies:
### Tesseract OCR
Tesseract OCR is an open-source optical character recognition (OCR) engine developed by Google. In our web application, we utilized Tesseract OCR for the purpose of recognizing text in images. This technology is useful for our application because it allows us to extract meaningful data from images of text and convert it into a machine-readable format.
### OpenCV
OpenCV is an open-source computer vision library that provides numerous functions for image and video processing. In our web application, we utilized OpenCV for several purposes, including contour detection, image preprocessing, and image editing. By using contour detection, we can identify and extract specific regions of an image that are relevant to our application. Image preprocessing helps us to prepare the image for OCR processing by removing noise and improving the image quality. Finally, image editing allows us to perform transformations on the image that enhance its suitability for OCR processing.
### NumPy
NumPy is a Python library for scientific computing that provides support for large, multi-dimensional arrays and matrices. In our web application, we used NumPy for applying sampling methods for binarizing and upscaling images. Binarizing an image means converting it into a black and white format, which can help improve the performance of OCR processing. Upscaling an image means increasing its resolution, which can improve its visual quality and the accuracy of OCR processing. By using NumPy, we can efficiently and effectively perform these image processing tasks and improve the overall performance of our application.
## How to Install and Run the Project
1. Download the github code to local machine.
2. Go to the code directory.
3. run `pip install -r requirements.txt` at directory `/SummerHack2023`.
4. Change directory into `/SummerHack2023/client` and run `npm install`.
5. Change directory into `/SummerHack2023/server` and run `npm install`.
    1. If you are a macOS user, change directory into `/SummerHack2023/scanner` and comment out line 152 of `img_plumber.py`.
6. Run `npm run start` in client and server folders to start the front-end and back-end, respectively.
7. Visit `http://localhost:5173/` and upload images you want to extract data out of.

## Limitations
- Data extraction may take a long time, depending on the size and number of images.
- Although user inputted images are upscaled, the application may have issues extracting data from images with lower resolutions.

## Future Plans
- Making the data extraction API available.
- Implementing a log-in system with authentication and databases.

## Credits
- Haruki Koh ([GitHub](https://github.com/KohHaruki)): Front-end implementation with React JS and TypeScript
- Euan Lim ([GitHub](https://github.com/GrassyAirplane)): Back-end implementation with Express.js (server) and Python (scanner)
- Zoe Tay ([GitHub](https://github.com/NiftyCoffee)): CSS styling and website design
- Jensen Kau ([GitHub](https://github.com/JensenKau)): Debugging and technology research
