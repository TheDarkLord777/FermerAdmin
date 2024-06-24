import { HomeStyled } from "@pages/Dashboard/Dashboard.styled.ts";
import Cards from "@components/Cards/Cards.jsx";
import {
  DocumentText,
  Element4,
  MainComponent,
  Profile2User,
  Rank,
  UserTag,
} from "iconsax-react";
import React from "react";
import { CardList } from "../../types/data.ts";
// import { useEffect,useState } from "react";
// import axios from "axios";

const Home: React.FC = () => {
  // const [posts, setPosts] = useState<>([]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://dev-edu.fermermaktab.uz/api/admin/v1/dashboard/certified-users-count",
  //       {
  //         headers: {
  //           "Access-Control-Allow-Origin": "http://localhost:5173",
  //         },
  //       },
  //     )
  //     .then((response) => {
  //       console.log(response.data);
  //       setPosts(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  const CardsList: CardList[] = [
    {
      title: "Foydalanuvchilar",
      count: 120632,
      info: "Все юзеры в системе",
      icon: <Profile2User size="20" variant={"Bold"} />,
      baseColor: "#3C4BDC",
      secondary: "#8089E7",
      bgcolor: "#E3E6FF",
    },
    {
      title: "Sertifikatlar soni",
      count: 93070,
      info: "Юзеры которые активно ",
      icon: <Rank size="20" variant={"Bold"} />,
      baseColor: "#FE9A38",
      secondary: "#D27F2D",
      bgcolor: "#FFEBD7",
    },
    {
      title: "Kurslar soni",
      count: 60,
      info: "Все курсы в системе",
      icon: <MainComponent size="20" variant={"Bold"} />,
      baseColor: "#993DE0",
      secondary: "#672998",
      bgcolor: "#F3E3FF",
    },
    {
      title: "Materiallar soni",
      count: 93070,
      info: "Книги, видео контент на сайте",
      icon: <DocumentText size="20" variant={"Bold"} />,
      baseColor: "#078649",
      secondary: "#55C790",
      bgcolor: "#E7F7EF",
    },
    {
      title: "Bitiruvchilar",
      count: 120,
      info: "Юзеры которые активно ",
      icon: <UserTag size="20" variant={"Bold"} />,
      baseColor: "#FA4C4C",
      secondary: "#6D1A1A",
      bgcolor: "#FFD7D7",
    },
    {
      title: "Yo’nalishlar",
      count: 10,
      info: "Все курсы в системе",
      icon: <Element4 size="20" variant={"Bold"} />,
      baseColor: "#2689C0",
      secondary: "#6396B3",
      bgcolor: "#E3F5FF",
    },
  ];
  return (
    <HomeStyled>
      {CardsList.map((value, index) => (
        <Cards value={value} key={index} />
      ))}
    </HomeStyled>
  );
};
export default Home;
