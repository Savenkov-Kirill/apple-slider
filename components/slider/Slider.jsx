import "./style.css";
import slides from "./slides";

const Slider = () => {
    console.log(slides);

    return (<div className="slider">
        <div className="controls">
            <ul className="slide-list">
                <li className="slide-list__item">Colors</li>
                <li className="slide-list__item">Aluminum unibody</li>
            </ul>
        </div>
        <h1>Slider</h1>
    </div>);
}

export default Slider;
