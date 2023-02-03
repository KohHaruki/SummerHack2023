import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Components/Header'
import FileUpload from './Components/FileUpload'
import DragDrop from './Components/DragDrop'
import Hero from './Components/Hero'
import Article from './Components/Article'
import Footer from './Components/Footer'

let content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a tortor sed diam elementum iaculis. Etiam pretium diam eu tortor suscipit sodales. Curabitur id odio a mauris aliquam rutrum ut a purus. Maecenas sollicitudin interdum facilisis. Suspendisse vulputate arcu lacus, id fermentum diam imperdiet ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a tortor sed diam elementum iaculis. Etiam pretium diam eu tortor suscipit sodales. Curabitur id odio a mauris aliquam rutrum ut a purus. Maecenas sollicitudin interdum facilisis. Suspendisse vulputate arcu lacus, id fermentum diam imperdiet ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a tortor sed diam elementum iaculis. Etiam pretium diam eu tortor suscipit sodales. Curabitur id odio a mauris aliquam rutrum ut a purus. Maecenas sollicitudin interdum facilisis. Suspendisse vulputate arcu lacus, id fermentum diam imperdiet ut."

function App() {
  return (
    <div className="App">
      <Header />
      {/* <FileUpload /> */}
      {/* <DragDrop /> */}
      <Hero title={"Easily extract tabular data from PNG, JPG, and PDF"}/>
      <Article title="Some additional content" content={content} />
      <Footer />
    </div>
  )
}

export default App
