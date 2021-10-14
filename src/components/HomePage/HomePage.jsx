import React, { PureComponent } from 'react';
import ImageView from '../../layouts/MyNavbar/image/ImageViewLayout';
import MyCarouselComponent from '../MyCarouselComponent/MyCarouselComponent';
const carouselData = [
  {
    image: "/img/carousel/0.jpg",
    alt: "shoes"
  },
  {
    image: "/img/carousel/1.webp",
    alt: "shoes"
  },
  {
    image: "/img/carousel/2.jpg",
    alt: "shoes"
  },
  {
    image: "/img/carousel/3.jpg",
    alt: "shoes"
  },
  {
    image: "/img/carousel/4.jpg",
    alt: "shoes"
  },
  {
    image: "/img/carousel/5.jpg",
    alt: "shoes"
  },
  {
    image: "/img/carousel/6.jpg",
    alt: "shoes"
  },
  {
    image: "/img/carousel/7.jpg",
    alt: "shoes"
  },
  {
    image: "/img/carousel/8.jpg",
    alt: "shoes"
  },
  {
    image: "/img/carousel/9.jpeg",
    alt: "shoes"
  },
  {
    image: "/img/carousel/10.jpg",
    alt: "shoes"
  },
]
const hdCarouselImages = [
  {
    image: "/img/carousel-hd/1.jpg",
    alt: "shoes",
    style: { "height": "55rem" }
  },
  {
    image: "/img/carousel-hd/2.jpg",
    alt: "shoes",
    style: { "height": "58rem" }
  },
  {
    image: "/img/carousel-hd/3.jpeg",
    alt: "shoes",
    style: { "height": "50rem" }
  },
  {
    image: "/img/carousel-hd/4.jpg",
    alt: "shoes",
    style: { "height": "50rem" }
  },

  {
    image: "/img/carousel-hd/5.jpg",
    alt: "shoes",
    style: { "height": "52rem" }
  },

]
const imageTshData = [
  {
    image: "/img/t-sh/t-sh1.png",
    alt: "desc",
    title: "White T-shirt",
    content: "Men's Road Running T-shirt",
    price: "32$"
  },
  {
    image: "/img/t-sh/t-sh3.png",
    alt: "desc",
    title: "White T-shirt",
    content: "Men's Road Running T-shirt",
    price: "32$"
  },
  {
    image: "/img/t-sh/t-sh6.png",
    alt: "desc",
    title: "White T-shirt",
    content: "Men's Road Running T-shirt",
    price: "32$"
  },
  {
    image: "/img/t-sh/t-sh7.png",
    alt: "desc",
    title: "White T-shirt",
    content: "Men's Road Running T-shirt",
    price: "32$"
  },
  {
    image: "/img/t-sh/t-sh9.png",
    alt: "desc",
    title: "White T-shirt",
    content: "Men's Road Running T-shirt",
    price: "32$"
  },
  {
    image: "/img/t-sh/t-sh11.png",
    alt: "desc",
    title: "White T-shirt",
    content: "Men's Road Running T-shirt",
    price: "32$"
  },
  {
    image: "/img/t-sh/t-sh16.png",
    alt: "desc",
    title: "White T-shirt",
    content: "Men's Road Running T-shirt",
    price: "32$"
  },
  {
    image: "/img/t-sh/t-sh18.png",
    alt: "desc",
    title: "White T-shirt",
    content: "Men's Road Running T-shirt",
    price: "32$"
  },

  {
    image: "/img/t-sh/t-sh25.png",
    alt: "desc",
    title: "White T-shirt",
    content: "Men's Road Running T-shirt",
    price: "32$"
  },
  {
    image: "/img/t-sh/t-sh28.png",
    alt: "desc",
    title: "White T-shirt",
    content: "Men's Road Running T-shirt",
    price: "32$"
  },

]
const imageMensWear = [
  {
    image: "/img/football/1.webp",
    alt: "desc",
    title: "White T-shirt",
    content: "Men's Road Running T-shirt",
    price: "32$"
  },

  {
    image: "/img/football/4.webp",
    alt: "desc",
    title: "White T-shirt",
    content: "Men's Road Running T-shirt",
    price: "32$"
  },
  {
    image: "/img/football/5.jpg",
    alt: "desc",
    title: "White T-shirt",
    content: "Men's Road Running T-shirt",
    price: "32$"
  },
  {
    image: "/img/football/6.jpeg",
    alt: "desc",
    title: "White T-shirt",
    content: "Men's Road Running T-shirt",
    price: "32$"
  },
  {
    image: "/img/football/7.jpeg",
    alt: "desc",
    title: "White T-shirt",
    content: "Men's Road Running T-shirt",
    price: "32$"
  },
  {
    image: "/img/football/8.jpeg",
    alt: "desc",
    title: "White T-shirt",
    content: "Men's Road Running T-shirt",
    price: "32$"
  },
  {
    image: "/img/football/9.jpeg",
    alt: "desc",
    title: "White T-shirt",
    content: "Men's Road Running T-shirt",
    price: "32$"
  },

  {
    image: "/img/football/11.webp",
    alt: "desc",
    title: "White T-shirt",
    content: "Men's Road Running T-shirt",
    price: "32$"
  },
  {
    image: "/img/football/12.jpeg",
    alt: "desc",
    title: "White T-shirt",
    content: "Men's Road Running T-shirt",
    price: "32$"
  },
  {
    image: "/img/football/13.jpg",
    alt: "desc",
    title: "White T-shirt",
    content: "Men's Road Running T-shirt",
    price: "32$"
  },
  {
    image: "/img/football/14.jpeg",
    alt: "desc",
    title: "White T-shirt",
    content: "Men's Road Running T-shirt",
    price: "32$"
  },
  {
    image: "/img/football/15.jpg",
    alt: "desc",
    title: "White T-shirt",
    content: "Men's Road Running T-shirt",
    price: "32$"
  },
  {
    image: "/img/football/16.jpeg",
    alt: "desc",
    title: "White T-shirt",
    content: "Men's Road Running T-shirt",
    price: "32$"
  },
  {
    image: "/img/football/17.jpg",
    alt: "desc",
    title: "White T-shirt",
    content: "Men's Road Running T-shirt",
    price: "32$"
  },
  {
    image: "/img/football/18.jpg",
    alt: "desc",
    title: "White T-shirt",
    content: "Men's Road Running T-shirt",
    price: "32$"
  },
  {
    image: "/img/football/19.png",
    alt: "desc",
    title: "White T-shirt",
    content: "Men's Road Running T-shirt",
    price: "32$"
  },
]
class HomePage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="container-fluid">
        <MyCarouselComponent images={hdCarouselImages} style={{ "height": "50rem" }} />
        <div className="card" style={{ marginTop: 30 }}>
          <div className="card-body" style={{ margin: 20 }}>
            <div className="row justify-content-md-center ">
              {
                imageTshData.map((item, i) => {
                  return (
                    <div className="col" style={{ padding: 20 }}>
                      <ImageView image={item} key={i} style={{ "width": "20rem" }} />
                    </div>

                  );
                })
              }
            </div>
            <div className="row">
              {
                imageMensWear.map((item, i) => {
                  return (
                    <div className="col" style={{ padding: 20 }}>
                      <ImageView image={item} key={i} style={{ "width": "18rem", "height": "22rem" }} />
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
