import Article from '../components/Article'
import Hero from '../components/Hero'

const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum turpis leo, id imperdiet tortor mattis non. Vestibulum placerat venenatis tellus sagittis interdum. Mauris lorem tellus, egestas a vehicula at, finibus id diam. Nam nec egestas mauris. Donec cursus luctus odio, a bibendum nulla porttitor sollicitudin. Nunc suscipit auctor varius. Quisque et quam malesuada risus volutpat viverra egestas in mauris. Donec pulvinar rhoncus arcu id tempor. Vivamus ut odio feugiat nunc ullamcorper commodo. Quisque ante odio, condimentum quis semper posuere, molestie eget nisl. In fermentum non mi ut semper. In sed elementum quam, at semper felis. Sed a arcu nunc. Fusce aliquam nulla ante, porttitor feugiat eros aliquet sed. Phasellus vel tellus ante. Etiam urna diam, dictum eget ultricies nec, ultrices in ex. Maecenas a sollicitudin diam, sit amet congue arcu. Vivamus dignissim pulvinar euismod. Vestibulum libero sapien, mollis sed vestibulum ac, faucibus a augue. Vestibulum eros sem, tempus mollis lobortis a, commodo sed elit. Aliquam erat volutpat. Nunc aliquet tincidunt augue ut iaculis. Donec semper, orci facilisis interdum pharetra, nunc mauris consequat quam, ac lobortis lectus sem et sapien. Fusce lobortis mi ac scelerisque viverra. Aliquam rutrum posuere consequat. Mauris dolor turpis, euismod eget mauris ac, vehicula bibendum ex. Donec ut orci non risus cursus congue. Donec molestie commodo sapien ac ullamcorper. Donec faucibus mollis efficitur. Cras ac venenatis massa. Curabitur semper fringilla urna, at dapibus augue mollis dignissim. Quisque tristique, risus et tincidunt consectetur, urna libero fringilla dui, sit amet eleifend augue augue a arcu. Curabitur tellus libero, suscipit vehicula neque at, varius lobortis enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer ornare aliquam luctus. Aenean varius dui vel purus tristique scelerisque eu id nunc. Nam sed aliquet massa. In felis massa, faucibus quis tempus sodales, molestie nec ante. Pellentesque ultricies, nunc non pellentesque euismod, nulla purus dictum lorem, sit amet ullamcorper dolor libero laoreet arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam egestas viverra nunc id porttitor. Suspendisse finibus lorem orci, at rhoncus tortor consectetur ut."

const Developer = (props: any) => {
    return (
        <div>
            <Hero title="For Developers" subtitle="API documentation" id={props.id}/>
            <Article title="" content={content}/>
        </div>
    )
}

export default Developer