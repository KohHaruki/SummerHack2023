import Hero from '../components/Hero'
import DragDropFileUploader from '../components/DragDropFileUploader'
import Article from '../components/Article'

const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a tortor sed diam elementum iaculis. Etiam pretium diam eu tortor suscipit sodales. Curabitur id odio a mauris aliquam rutrum ut a purus. Maecenas sollicitudin interdum facilisis. Suspendisse vulputate arcu lacus, id fermentum diam imperdiet ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a tortor sed diam elementum iaculis. Etiam pretium diam eu tortor suscipit sodales. Curabitur id odio a mauris aliquam rutrum ut a purus. Maecenas sollicitudin interdum facilisis. Suspendisse vulputate arcu lacus, id fermentum diam imperdiet ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a tortor sed diam elementum iaculis. Etiam pretium diam eu tortor suscipit sodales. Curabitur id odio a mauris aliquam rutrum ut a purus. Maecenas sollicitudin interdum facilisis. Suspendisse vulputate arcu lacus, id fermentum diam imperdiet ut."

const Home = () => {
    return (
        <>
            <Hero title={"Online Image Scanner"} subtitle={"Easily extract tabular data from PNG, JPG, and PDF"}/>
            <DragDropFileUploader />
            <Article title="Some additional content" content={content} />
        </>
    )
}

export default Home