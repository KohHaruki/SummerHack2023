import Hero from '../components/Hero'

const content = "Our web application is designed to extract tabular data from PNG, JPG, and PDF files submitted by users. With the power of computer vision and cutting-edge technology, we have built a platform that streamlines the process of gathering data from these types of files and presents it in a clean and organized manner.\nThe frontend of our application is built using React JS, a popular JavaScript library for building user interfaces. This provides a user-friendly interface for users to upload their files and view the extracted data. The backend, on the other hand, is powered by express.js and python, two highly efficient technologies for handling the processing of data and ensuring that it is presented in the most accurate and efficient manner.\nThe scanning mechanism used in our application is based on computer vision, which allows us to accurately and quickly extract data from a wide range of file types. Whether it's a simple PNG image or a complex PDF document, our technology is able to process it efficiently and present the data in a manner that is easy to understand.\nIn conclusion, our web application is the perfect solution for anyone looking to extract data from PNG, JPG, or PDF files. With its user-friendly interface, cutting-edge technology, and efficient data processing, it's a must-have tool for anyone looking to streamline their data extraction process."

const About = (props: any) => {

    return (
        <div className="container about">
            <Hero title="About Our Product" subtitle=""/>
            <h2>Introduction</h2>
                <p>The web application is designed to extract tabular data from PNG, JPG, or PDF files.</p>

                <h2>Technology Stack</h2>
                <ul>
                <li>Frontend: React JS</li>
                <li>Backend: Express.js and Python</li>
                <li>Scanning mechanism: powered by computer vision</li>
                </ul>

                <h2>Key Features</h2>
                <ul>
                <li>Ability to extract data from various file formats</li>
                <li>Use of computer vision for accurate data extraction</li>
                <li>User-friendly interface built with React JS</li>
                <li>Robust backend built with Express.js and Python</li>
                </ul>

                <h2>Benefits</h2>
                <ul>
                <li>Automated data extraction saves time and effort</li>
                <li>Accurate results with the use of computer vision technology</li>
                <li>Convenient and efficient data extraction process</li>
                <li>Improved productivity and data organization</li>
                </ul>

                <h2>Conclusion</h2>
                <p>The web application provides an innovative solution for extracting tabular data from various file formats, leveraging the power of computer vision technology and a user-friendly interface built with React JS, Express.js and Python.</p>

        </div>
    )
}

export default About