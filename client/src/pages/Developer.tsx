import Hero from '../components/Hero'

const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum turpis leo, id imperdiet tortor mattis non. Vestibulum placerat venenatis tellus sagittis interdum. Mauris lorem tellus, egestas a vehicula at, finibus id diam. Nam nec egestas mauris. Donec cursus luctus odio, a bibendum nulla porttitor sollicitudin. Nunc suscipit auctor varius. Quisque et quam malesuada risus volutpat viverra egestas in mauris. Donec pulvinar rhoncus arcu id tempor. Vivamus ut odio feugiat nunc ullamcorper commodo. Quisque ante odio, condimentum quis semper posuere, molestie eget nisl. In fermentum non mi ut semper. In sed elementum quam, at semper felis. Sed a arcu nunc. Fusce aliquam nulla ante, porttitor feugiat eros aliquet sed. Phasellus vel tellus ante. Etiam urna diam, dictum eget ultricies nec, ultrices in ex. Maecenas a sollicitudin diam, sit amet congue arcu. Vivamus dignissim pulvinar euismod. Vestibulum libero sapien, mollis sed vestibulum ac, faucibus a augue. Vestibulum eros sem, tempus mollis lobortis a, commodo sed elit. Aliquam erat volutpat. Nunc aliquet tincidunt augue ut iaculis. Donec semper, orci facilisis interdum pharetra, nunc mauris consequat quam, ac lobortis lectus sem et sapien. Fusce lobortis mi ac scelerisque viverra. Aliquam rutrum posuere consequat. Mauris dolor turpis, euismod eget mauris ac, vehicula bibendum ex. Donec ut orci non risus cursus congue. Donec molestie commodo sapien ac ullamcorper. Donec faucibus mollis efficitur. Cras ac venenatis massa. Curabitur semper fringilla urna, at dapibus augue mollis dignissim. Quisque tristique, risus et tincidunt consectetur, urna libero fringilla dui, sit amet eleifend augue augue a arcu. Curabitur tellus libero, suscipit vehicula neque at, varius lobortis enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer ornare aliquam luctus. Aenean varius dui vel purus tristique scelerisque eu id nunc. Nam sed aliquet massa. In felis massa, faucibus quis tempus sodales, molestie nec ante. Pellentesque ultricies, nunc non pellentesque euismod, nulla purus dictum lorem, sit amet ullamcorper dolor libero laoreet arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam egestas viverra nunc id porttitor. Suspendisse finibus lorem orci, at rhoncus tortor consectetur ut."

const Developer = (props: any) => {
    return (
        <div className="container developer">
            <Hero title="For Developers" subtitle="The Techs We Used"/>
            <h2>Tesseract OCR</h2>
            <p>Tesseract OCR is an open-source optical character recognition (OCR) engine developed by Google. In our web application, we utilized Tesseract OCR for the purpose of recognizing text in images. This technology is useful for our application because it allows us to extract meaningful data from images of text and convert it into a machine-readable format.</p>

            <h2>OpenCV</h2>
            <p>OpenCV is an open-source computer vision library that provides numerous functions for image and video processing. In our web application, we utilized OpenCV for several purposes, including contour detection, image preprocessing, and image editing. By using contour detection, we can identify and extract specific regions of an image that are relevant to our application. Image preprocessing helps us to prepare the image for OCR processing by removing noise and improving the image quality. Finally, image editing allows us to perform transformations on the image that enhance its suitability for OCR processing.</p>

            <h2>NumPy</h2>
            <p>NumPy is a Python library for scientific computing that provides support for large, multi-dimensional arrays and matrices. In our web application, we used NumPy for applying sampling methods for binarizing and upscaling images. Binarizing an image means converting it into a black and white format, which can help improve the performance of OCR processing. Upscaling an image means increasing its resolution, which can improve its visual quality and the accuracy of OCR processing. By using NumPy, we can efficiently and effectively perform these image processing tasks and improve the overall performance of our application.</p>

        </div>
    )
}

export default Developer