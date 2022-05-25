import * as React from 'react';
import "./Reveal.scss";
interface RevealProps {
    scrollY: number,
    children: JSX.Element
}
 
const Reveal: React.FC<RevealProps> = (props: RevealProps) => {
    const [isVisible, setVisible] = React.useState(false);

    React.useEffect(() => {
        document.onscroll = () => {
            console.log(window.scrollY)
            if (window.scrollY > props.scrollY) {
                setVisible(true);
            }
        }
    }, [])
    

    return <span className={"reveal " + (isVisible ? "" : "hidden")}>{props.children}</span>;
}
 
export default Reveal;