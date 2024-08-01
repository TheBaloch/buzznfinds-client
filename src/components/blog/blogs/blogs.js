import Blog from "../blog/blog";
import MainBlog from "../../mainblog/mainblog";

const callout = [
  {
    name: "Technology",
    description:
      "Architectural Engineering Wonders of the modern era for your Inspiration",
    imageSrc:
      "https://img.freepik.com/free-vector/gradient-network-connection-background_23-2148865393.jpg?t=st=1721308493~exp=1721312093~hmac=37fa12e59e374d8fb4641209a1691af0388faf1d7e30dc1385fd47539be337f8&w=740",
    imageAlt: "Technology",
    href: "#",
    profileImage:
      "https://img.freepik.com/free-photo/confused-young-man-green-shirt_23-2148205497.jpg?ga=GA1.1.1637836046.1721308676&semt=ais_user",
    profileName: "Mario Sanchez",
    date: "October 21, 2022",
  },
  {
    name: "Health&Care",
    description:
      "5 Effective Brain Recharging Activities No One is Talking About",
    imageSrc:
      "https://img.freepik.com/free-photo/funny-girl-dances-field-with-rye-sunset_669006-181.jpg?t=st=1721308940~exp=1721312540~hmac=35d39a421815008d249464923edf9449eacdfe95c195489570c317f64deca26a&w=740",
    imageAlt: "health&care",
    profileImage:
      "https://img.freepik.com/free-photo/confused-young-man-green-shirt_23-2148205497.jpg?ga=GA1.1.1637836046.1721308676&semt=ais_user",
    profileName: "Joshua Wood",
    date: "October 21, 2022",
  },
  {
    name: "E-Commerce",
    description:
      "10 Top E-commerse ideas that make your mind to dive in to the business",
    imageSrc:
      "https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg?t=st=1721309057~exp=1721312657~hmac=be6fd62a3aea26c2c531ff64878f6fd4066410107c136cba8f9bb6252e9a98ad&w=740",
    imageAlt: "e-commerce",
    href: "#",
    profileImage:
      "https://img.freepik.com/free-photo/confused-young-man-green-shirt_23-2148205497.jpg?ga=GA1.1.1637836046.1721308676&semt=ais_user",
    profileName: "Joshua Wood",
    date: "October 21, 2022",
  },
];
export default function Blogs() {
  return (
    <>
      <Blog blog={callout} />
    </>
  );
}
