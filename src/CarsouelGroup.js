import {Carousel} from "react-bootstrap"


function CarouselGroup (props) {
  return (
    <Carousel>
    <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
   
   </Carousel.Item>

   </Carousel>
)
}
export default CarouselGroup ;