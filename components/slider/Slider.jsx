import "./style.css";
import slides from "./slides";
import IconPlus from "./icons/IconPlus.jsx";

const SlideItem = ({data}) => {
    return (
        <li className="slide-list__item">
            <button className="button">
                <IconPlus />
                {data.title}
            </button>
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
