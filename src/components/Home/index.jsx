import './Home.sass'

const Home = () => {
    function typeScript (elemento) {
        const textoArray = elemento.innerHTML.split('');
        elemento.innerHTML = ''

        textoArray.forEach((letra, i) => {
            setTimeout(function() {
                elemento.innerHTML += letra;
            }, 75 * i)
        });
    }
    
    return (
        <section className='home'>
            <div>
                <img src="https://images.unsplash.com/photo-1593982624332-9c7a6ac54341?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0YWRvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
            <div className='information'>
                <p>console.log(Hello World)</p>
                <p>Meu nome é Ana Nazario</p>
                <h1 onLoad={typeScript}>Desenvolvedora Front-End</h1>
                <a classname='contact' href="">Contato</a>
            </div>
        </section>
    )
}

export default Home