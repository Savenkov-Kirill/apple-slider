import "./style.css";
import slides from "./slides";
import iconPlus from "./icons/plus.svg";
import Image from "next/image"

const SlideItem = ({data}) => {
    return (
        <li className="slide-list__item">
            <button className="button">
                <Image src={iconPlus} width="28" height="28" alt=""></Image>
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
