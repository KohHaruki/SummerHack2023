interface HeroProps {
    title: string;
    subtitle?: string;
}

const Hero = (props: HeroProps) => {
    return (
        <div className="hero" id={props.id}>
            <h2 className="hero-title">{props.title}</h2>
            <h3 className="hero-subtitle">{props.subtitle}</h3>
        </div>
    )
}

export default Hero