import slides from "./slides";
import "./style.css";

const SlideItem = ({data}) => {
    return (
        <li className="slide-list__item">
            <button className="button">{data.title}</button>
        </li>
    )
}

const Slider = () => {
    return (<div className="slider">
        <div className="controls">
            <ul className="slide-list">
                {slides.map((slide, index)=> <SlideItem data={slide} key={index} />)}
            </ul>
        </div>
    </div>);
}

export default Slider;
