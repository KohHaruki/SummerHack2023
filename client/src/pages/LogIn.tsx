import Hero from '../components/Hero'
import Article from '../components/Article'

const content = "Log In Page Content"

const LogIn = () => {
    return (
        <div>
            <Hero title="Log In" subtitle="subtitle"/>
            <Article title="" content={content}/>
        </div>
    )
}

export default LogIn