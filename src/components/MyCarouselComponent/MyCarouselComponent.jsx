import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class MyCarouselComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  render() {
    return (
      <Carousel cols={2} rows={1} gap={10} loop style={this.props.style}>
            {
              this.props.images.map((item, i) => {
                return <Carousel.Item key={i}>
                  <img style={item.style} className="d-block w-100" alt={item.alt} src={item.image} />
                </Carousel.Item>
              })
            }
          </Carousel>
    );
  }
}


export default MyCarouselComponent;
