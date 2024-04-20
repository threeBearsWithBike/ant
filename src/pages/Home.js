import '../css/home.css';
import { dataAnts } from '../assets/articles/dataAnts';
import { langtonsAnt } from '../assets/articles/langtonsAnt'; 

const Home = () => {
    return (
        <>
            <h2>Home</h2>
            <section className='Home'>
                <article>
                    <h3>Факты о муравьях</h3>
                    <ul>
                        {dataAnts.map((elem, idx) => {
                            return <li key={idx}>{elem}</li>
                        })}
                    </ul>
                </article>
                <article>
                    <h3>Муравей Лэнгтона</h3>
                    {langtonsAnt.map((elem, idx) => {
                        return <p key={idx}>{elem}</p>
                    })}
                </article>
            </section>
        </>
    )
}

export default Home;