import hat from "../Assets/images/hats.jpeg"
import sneakers from "../Assets/images/sneakers.jpeg"
import men from "../Assets/images/mens.jpeg"
import women from "../Assets/images/womens.jpeg"
import jackets from "../Assets/images/jackets.jpeg"

const categories = [
  {
    title: "hats",
    imageUrl: hat,
    id: 1,
    linkUrl: "shop/hats",
  },
  {
    title: "jackets",
    imageUrl: jackets,
    id: 2,
    linkUrl: "shop/jackets",
  },
  {
    title: "sneakers",
    imageUrl: sneakers,
    id: 3,
    linkUrl: "shop/sneakers",
  },
  {
    title: "women",
    imageUrl: women,
    size: "large",
    id: 4,
    linkUrl: "shop/women",
  },
  {
    title: "men",
    imageUrl: men,
    size: "large",
    id: 5,
    linkUrl: "shop/men",
  },
]
export default categories