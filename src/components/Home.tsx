import * as React from 'react';

import "./Home.scss"

interface HomeProps {
    
}
 
const Home: React.FC<HomeProps> = () => {
    let [text, setText] = React.useState("");
    React.useEffect(() => {

        const fetchAndSet = async () => {setText(await (await fetch("https://baconipsum.com/api/?type=meat-and-filler&paras=5&format=text")).text());}

        fetchAndSet();
    }, []); 
    return (
        <div className="page home">
            <div className="content">
                <div className='section intro'>
                    <div className="hero">
                        <h1>Patrick LeDew</h1>
                        <h2 className='text-muted'>A computer science student studying at UNF</h2>
                    </div>
                    <div className="icons">
                        <div><a href="https://www.linkedin.com/in/patrick-ledew/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-5x fa-linkedin"></i></a></div>
                        <div><a href="https://github.com/patrickledew" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-5x fa-github-square"></i></a></div>
                    </div>
                </div>
                <div className='section move about'>
                    <div className='section-content'>
                        <h1>About Me</h1>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Home;