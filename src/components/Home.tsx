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
                    <div className="hero">
                        <h1>Patrick LeDew</h1>
                        <h2 className='text-muted'>A computer science student studying at UNF</h2>
                    </div>
                <div className='section'>
                    <h1>Projects</h1>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
}
 
export default Home;