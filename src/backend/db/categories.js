import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "BEST SELLERS",
    description:
      "Here, Is our well Known collections of travellers which they prefer alot",
      image: "https://th.bing.com/th/id/OIP.jtc6ZhZ-yUXp9NDUgZwNYwHaEK?w=327&h=184&c=7&r=0&o=5&dpr=1.5&pid=1.7"
  },
  {
    _id: uuid(),
    categoryName: "OUR COLLECTION",
    description:
      "Explore more collections and products of us",
      image:"https://upgradedpoints.com/wp-content/uploads/2019/04/Travel-Accessories-And-Products.jpg"
  },
  {
    _id: uuid(),
    categoryName:"CATEGORIES",
    description:"Explore by Category",
    image:"https://th.bing.com/th/id/OIP.ZYOrfJxOLJoifsD9QIBlJgHaFj?w=237&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
  }
];