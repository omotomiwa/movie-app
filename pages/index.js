import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import _ from "lodash";
import "bootstrap/dist/css/bootstrap.css";

import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import axios from "axios";

export default function Home() {
  const Wrapper = styled.div`
    .contain {
      width: 100%;
      height: 140px;
      background: #292929;
      padding-left: 50px;
      padding-top: 42px;
    }

    h1 {
      color: #ffffff;
      font-size: 29px;
    }
    h2 {
      color: #ffffff;
      font-size: 75px;
      font-weight: 700;
      line-height: 80px;
    }
    p {
      font-weight: 400;
      font-size: 24px;
      line-height: 31.25px;
      color: #000000;
    }
    .logo-container {
      background: transparent;
      border: 1px solid #ffffff;
      box-sizing: border-box;
      width: 180px;
      height: 60px;
      text-align: center;
      padding-top: 10px;
    }
    /* Media Query for Mobile Devices */
    @media (max-width: 480px) {
      h2 {
        text-align: center;
        font-size: 40px;
      }

      .logo-container {
        background: transparent;
        border: 1px solid #ffffff;
        width: 180px;
        height: 60px;
        text-align: center;
        padding-top: 12px;
        margin: 0 auto;
        position: relative;
        right: 24px;
      }
    }

    //media querry for Tabs
    @media (min-width: 768px) and (max-width: 1024px) {
      h2 {
        text-align: center;
      }
      .logo-container {
        background: transparent;
        border: 1px solid #ffffff;
        width: 180px;
        height: 60px;
        text-align: center;
        padding-top: 12px;
        margin: 0 auto;
        position: relative;
        right: 24px;
      }
    }
    .image-section {
      width: 100%;
      height: 550px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      background-image: url("https://res.cloudinary.com/dl7eouhxf/image/upload/v1670762748/Rectangle_5.svg");
      padding-left: 47px;
      padding-top: 109px;
    }

    .main {
      padding-left: 47px;
      padding-right: 77px;
      padding-top: 77px;
    }

    .search {
      font-weight: 400;
      font-size: 24px;
      color: #000000;
      line-height: 31.25px;
    }
    .form-control {
      height: 44px !important;
    }
    .grid-container {
      padding-top: 20px;
      padding-bottom: 20px;
    }
    .images {
      background-size: 150px;
      width: 300px;
      height: 300px;

      border-radius: 5px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
    }
  `;

  //Logic goes here

  const products = [
    {
      id: 1,
      name: "Guardians of the Galaxy",
      category: "Action",
      image:
        "https://res.cloudinary.com/dl7eouhxf/image/upload/v1670838147/movie-poster/guardian_galaxy.jpg",
    },
    {
      id: 2,
      name: "Avengers End Game",
      category: "Action",
      image:
        "https://res.cloudinary.com/dl7eouhxf/image/upload/v1670838388/movie-poster/avengers.jpg",
    },
    {
      id: 3,
      name: "John Wick",
      category: "Action",
      image:
        "https://res.cloudinary.com/dl7eouhxf/image/upload/v1670838476/movie-poster/John_wick.jpg",
    },
    {
      id: 4,
      name: "Spectre",
      category: "Action",
      image:
        "https://res.cloudinary.com/dl7eouhxf/image/upload/v1670838577/movie-poster/spectre.jpg",
    },
    {
      id: 5,
      name: "Fast and Furious 8",
      category: "Action",
      image:
        "https://res.cloudinary.com/dl7eouhxf/image/upload/v1670838688/movie-poster/fast_and_furious.jpg",
    },
    {
      id: 6,
      name: "Ant Man",
      category: "Action",
      image:
        "https://res.cloudinary.com/dl7eouhxf/image/upload/v1670838829/movie-poster/ant_man.jpg",
    },
    {
      id: 7,
      name: "Venom",
      category: "Action",
      image:
        "https://res.cloudinary.com/dl7eouhxf/image/upload/v1670838933/movie-poster/venom.jpg",
    },
    {
      id: 8,
      name: "Deadpool",
      category: "Action",
      image:
        "https://res.cloudinary.com/dl7eouhxf/image/upload/v1670839070/movie-poster/deadpool.jpg",
    },
    {
      id: 9,
      name: "Black Adam",
      category: "Action",
      image:
        "https://res.cloudinary.com/dl7eouhxf/image/upload/v1670839189/movie-poster/black-adam-poster.jpg",
    },
    {
      id: 10,
      name: "Wakanda",
      category: "Action",
      image:
        "https://res.cloudinary.com/dl7eouhxf/image/upload/v1670839345/movie-poster/wakanda.jpg",
    },
    {
      id: 11,
      name: "Free Guy",
      category: "Action",
      image:
        "https://res.cloudinary.com/dl7eouhxf/image/upload/v1670839477/movie-poster/free_guy.jpg",
    },
  ];
  items: [];

  const [post, setPost] = React.useState([]);

  const listing = () => {
    axios
      .get("https://www.omdbapi.com/?i=tt3896198&apikey=695093b9")
      .then((response) => {
        const myData = response.data.Ratings;
        setPost(myData);
        //return response.data = array;
      });
  };
  React.useEffect(() => {
    listing();
  }, []);

  const [searchValue, setSearchValue] = React.useState("");
  const [filteredUsers, setFilteredUsers] = React.useState(products);
  const ref = React.useRef(null);

  const handleSearchFilter = (e) => {
    setSearchValue(e.target.value);
  };
  React.useEffect(() => {
    // const timeout = setTimeout(() => {
    //   const filter = products.filter((user) => {
    //     return user.name.match(
    //       // searchValue

    //       _.lowerCase(JSON.stringify(_.values(user))),
    //       _.lowerCase(searchValue)
    //     );
    //   });
    //   setFilteredUsers(filter);
    // }, 500);
    // return () => clearTimeout(timeout);
    const timeout = setTimeout(() => {
      const filter = _.filter(products, (user) => {
        return _.includes(
          _.lowerCase(JSON.stringify(_.values(user))),
          _.lowerCase(searchValue)
        );
      });
      setFilteredUsers(filter);
    }, 500);
    return () => clearTimeout(timeout);
  }, [searchValue]);
  return (
    <Wrapper>
      <div className="contain">
        <div className="logo-container">
          <h1>MyTestApp</h1>
        </div>
      </div>
      <div className="header">
        <div className="image-section">
          <h2>Watch</h2>
          <h2>something</h2>
          <h2>incredible.</h2>
        </div>
      </div>
      <div className="main">
        <div className="search-wrapper">
          <p className="search">Search</p>

          <input
            type="search"
            className="form-control h-75"
            placeholder="Search for movies..."
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={searchValue}
            onChange={handleSearchFilter}
            ref={(input) => {
              input && input.focus();
            }}
          />
        </div>
        <div className="grid-container">
          <div className="row gx-5 gy-5">
            {_.map(filteredUsers, (user) => (
              <div className="movies col-xs-12 col-lg-3 col-md-6" key={user.id}>
                <p>{user.name}</p>

                <img
                  className=" images"
                  src={user.image}
                  alt="https://res.cloudinary.com/dl7eouhxf/image/upload/v1670832088/image-grid.svg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
