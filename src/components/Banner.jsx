import {Carousel} from 'react-bootstrap';
import {useState} from 'react';

function Banner(){
    const [everyBanner] = useState([
        {
            h3: "This is the first text.",
            p: "Im the first p, im big and also the first one. You can be me or envy me."
        },
        {
            h3: "Seccond label right here.",
            p: "Im the seccond P, the seccond was made to be better than the first one."
        },
        {
            h3: "Third label 4ever!",
            p: 'You can think: "yea, maybe it can get better", then me, the third P was made.'
        }
    ])

    return (
        <div>
        <Carousel className="reflect" variant="dark">
            {everyBanner.map((item, index)=>{
                return (
                <Carousel.Item key={index}>
                  <img className="d-block slideImg" src={"./elswordMainLogo" + ++index + ".jpg"} 
                  alt={index + "_slide"} />
                <Carousel.Caption>
                  <div className="carouselText">
                  <h3>{item.h3}</h3>
                  <p>{item.p}</p>
                  </div>
                </Carousel.Caption>
                </Carousel.Item>
                )
            })}
        </Carousel>
        </div>
    )
}
export default Banner;