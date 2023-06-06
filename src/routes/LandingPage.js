import styled from "styled-components";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Chip from "@mui/material/Chip";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";
import EmailIcon from "@mui/icons-material/Email";
import Badge from "@mui/material/Badge";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import WorkIcon from "@mui/icons-material/Work";
import DataObjectOutlinedIcon from "@mui/icons-material/DataObjectOutlined";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import Masonry from "@mui/lab/Masonry";
import Rating from "@mui/material/Rating";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import IconButton from "@mui/material/IconButton";
import SentimentVerySatisfiedOutlinedIcon from "@mui/icons-material/SentimentVerySatisfiedOutlined";
import Switch from "@mui/material/Switch";
import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./styles.css";

// import required modules
import { EffectCards } from "swiper";
import { Computer } from "@mui/icons-material";

const LandingPage = () => {
  const [value, setValue] = React.useState("projects");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [checked, setChecked] = React.useState(true);

  const handleChange2 = (event) => {
    setChecked(event.target.checked);
  };
  const [count, setCount] = React.useState(1);
  const [rate, setRate] = React.useState(4.5);
  const handleChange3 = (event, newValue) => {
    setRate(newValue);
  };

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Background>
      <Switch
        checked={checked}
        onChange={handleChange2}
        inputProps={{ "aria-label": "controlled" }}
      />
      {checked && <p>darkmode?</p>}
      <br></br>
      <br></br>
      <br></br>
      <Badge badgeContent={count} color="secondary" size="large" max={1004}>
        <IconButton>
          <Avatar
            src="/img/myavatar2.jpg"
            sx={{ width: 70, height: 70 }}
            onClick={() => {
              setCount(count + 1);
            }}
          />
        </IconButton>
      </Badge>
      <TitleText>
        <span style={{ color: "black" }}>I'm Spring,</span> a front-end
        developer at <span style={{ color: "gray" }}>Korea University</span>.
        I'm interested in making web pages look attractive to people. I studied
        <span style={{ color: "gray" }}>
          {" "}
          computer science, UI, and user experience
        </span>
        . I'm mainly focused on building a personal blog. Usually with tools
        like React, Material UI and Framer Motion!
      </TitleText>
      <img height="450" src="/img/phone.png" />
      <br></br>
      <Box sx={{ width: "100%" }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="PROJECTS" value={"projects"} />
          <Tab label="EDUCATION" value={"education"} />
          <Tab label="LIKE" value={"like"} />
          <Tab label="CONTACT" value={"contact"} />
          <Tab label="ABOUT" value={"about"} />
        </Tabs>
      </Box>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="projects" hidden={value !== "projects"}>
        <Stack direction="row">
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <div>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
              onRealIndexChange={(element) =>
                setActiveIndex(element.activeIndex)
              }
            >
              <SwiperSlide>
                2023 spring
                <Card sx={{ maxWidth: 600 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="350"
                      image="/img/baekjoon.jpg"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Team Building Gamification Problem Solving Web by React
                        : baekjoon-bomb
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        PM & designer & front-end developer
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                2018 winter
                <Card sx={{ maxWidth: 600 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="350"
                      image="/img/myyummylunch.jpg"
                    />

                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Restaurant Recommendation Application by Android : My
                        Yummy Lunch
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        PM & designer & Android developer
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                2022 autumn
                <Card sx={{ maxWidth: 700 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="350"
                      image="/img/mbti.jpg"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        MBTI Test page by React : MBTI with my Avatar
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        designer & front-end developer
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                2020 winter
                <Card sx={{ minWidth: 420 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="380"
                      image="/img/licenseplate.jpg"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        license plate detecting program
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        backend-developer & AI
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                now!
                <Card sx={{ minWidth: 400 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="350"
                      image="/img/blog.jpg"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        personal blog web page by React : welcome to my blog!
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        PM & designer & front-end developer
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </SwiperSlide>
            </Swiper>
          </div>
          <div>
            <div classname="project1" hidden={activeIndex !== 0}>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <ProjectText>The Baekjoon-bomb</ProjectText>{" "}
              <ExplainText>
                front-end : ReactJS with Material-UI, framer-motion <br></br>
                back-end : InteliJ h2 database spring boot erdcloud <br></br>
                design : kakao-oven<br></br>
                <br></br>It is a project that started with the thought of how to
                solve algorithm problem solving site Baekjoon problem in a fun
                way with friends. Friends choose the level of the problem and
                choose the time to spin the bomb. You can check your ranking in
                the created team page. Until the bomb explodes, you have to
                solve the problem given to you and throw the bomb at the next
                person. What if the bomb goes off...? Your ranking will go down!
              </ExplainText>
            </div>
            <div classname="project2" hidden={activeIndex !== 1}>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <ProjectText>
                Restaurant Recommendation Application by Android : My Yummy
                Lunch
              </ProjectText>
              <ExplainText>
                front-end : android-studio <br></br>
                back-end : android-studio excel <br></br>design : android-studio
                <br></br>
                <br></br>Didn't you ever wonder what to eat for lunch at school
                every day from Monday to Friday? It's an application to solve
                the problem! We recommend the list of restaurants near Korea
                University by classifying them according to food type, location,
                and price. If you choose the conditions you want, you can show a
                list of restaurants that fit it, and share the recommended lists
                in the Kakao Talk chat room to choose between your friends!
              </ExplainText>
            </div>
            <div classname="project3" hidden={activeIndex !== 2}>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <ProjectText>MBTI with my avatar</ProjectText>
              <ExplainText>
                front-end : ReactJS <br></br>
                design : kakao-oven
                <br></br>
                <br></br>No more boring MBTI tests with the same question! This
                is a new concept ultra-realistic MBTI test web page that makes
                you laugh just by looking at the question. If you answer
                questions one by one that you can relate to, the results of my
                mbti test and the avatar that matches my mbti will be presented
                together! Don't you think it'll be fun just thinking about it?
              </ExplainText>
            </div>
            <div classname="project4" hidden={activeIndex !== 3}>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <ProjectText>license plate detecting program</ProjectText>
              <ExplainText>
                C++ Pytorch OpenCV yolov3 <br></br>
                <br></br>It is a program that automatically reads the license
                plate of the car captured on CCTV. I developed it while doing an
                internship at National Forensic Service.
              </ExplainText>
            </div>
            <div classname="project5" hidden={activeIndex !== 4}>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <ProjectText>This is the blog you're looking at!</ProjectText>
              <ExplainText>
                ReactJS with Material-UI, framer-motion, kakao-oven
              </ExplainText>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>
        </Stack>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
      <div className="education" hidden={value !== "education"}>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              ~2018.02
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />

              <CreateOutlinedIcon sx={{ fontSize: 70 }} />

              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                HighSchool
              </Typography>
              <Typography>
                Hanyoung Foreign Language HighSchool <br></br>department of
                Chinese 26th
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="body2"
              color="text.secondary"
            >
              2018.03~
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />

              <SchoolRoundedIcon sx={{ fontSize: 70 }} />

              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                University
              </Typography>
              <Typography>
                Computer Science & Psychology at Korea University
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="body2"
              color="text.secondary"
            >
              2020.07~12
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <WorkIcon sx={{ fontSize: 70 }} />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Internship
              </Typography>
              <Typography>
                National Forensic Service<br></br>Digital department
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <DataObjectOutlinedIcon sx={{ fontSize: 100 }} />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                Now!
              </Typography>
              <Typography>
                Python C Java Javascript HTML/CSS <br></br> React Express
                Node.js Android
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
      <div className="like" hidden={value !== "like"}>
        <Box sx={{ width: 800, minHeight: 829 }}>
          <Masonry columns={3} spacing={2}>
            {itemData.map((item, index) => (
              <div key={index}>
                <img
                  src={`${item.img}?w=162&auto=format`}
                  srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    borderBottomLeftRadius: 4,
                    borderBottomRightRadius: 4,
                    display: "block",
                    width: "100%",
                  }}
                />
              </div>
            ))}
          </Masonry>
        </Box>
      </div>
      <div className="contact" hidden={value !== "contact"}>
        <Box>
          <Stack
            spacing={4}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <InstagramIcon sx={{ fontSize: 100 }} />
            instagram.5pr1.n9
            <GitHubIcon sx={{ fontSize: 100 }} />
            github.bomi1490
            <CodeIcon sx={{ fontSize: 100 }} />
            baekjoon.bomi1490
            <EmailIcon sx={{ fontSize: 100 }} />
            bomi1490@gmail.com
          </Stack>
        </Box>
      </div>
      <div className="about" hidden={value !== "about"}>
        <Stack
          spacing={4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Tap to evaluate
          <Rating
            name="half-rating"
            defaultValue={4.5}
            precision={0.5}
            value={rate}
            size="large"
            onChange={handleChange3}
          />
          <div hidden={rate !== 5}>
            <Stack
              spacing={4}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Thanks!
              <SentimentVerySatisfiedOutlinedIcon sx={{ fontSize: 100 }} />
            </Stack>
          </div>
          <br></br>
          <br></br>
          <VolunteerActivismOutlinedIcon sx={{ fontSize: 100 }} />
          <br></br>Thanks for coming!!!!!!!!!!!!
        </Stack>
      </div>
      <br></br> <br></br> <br></br> <br></br>
      <br></br> <br></br> <br></br> <br></br>
      <br></br> <br></br> <br></br> <br></br>
    </Background>
  );
};
const itemData = [
  {
    img: "/img/1.jpg",
    title: "Fern",
  },
  {
    img: "/img/2.jpg",
    title: "Snacks",
  },
  {
    img: "/img/3.jpg",
    title: "Mushrooms",
  },
  {
    img: "/img/4.jpg",
    title: "Tower",
  },
  {
    img: "/img/5.jpg",
    title: "Sea star",
  },
  {
    img: "/img/6.jpg",
    title: "Honey",
  },
  {
    img: "/img/7.jpg",
    title: "Basketball",
  },
  {
    img: "/img/8.jpg",
    title: "Breakfast",
  },
  {
    img: "/img/9.jpg",
    title: "Tree",
  },
  {
    img: "/img/10.jpg",
    title: "Burger",
  },
  {
    img: "/img/11.jpg",
    title: "Camera",
  },
  {
    img: "/img/12.jpg",
    title: "Camera",
  },
  {
    img: "/img/13.jpg",
    title: "Camera",
  },
  {
    img: "/img/14.jpg",
    title: "Camera",
  },
  {
    img: "/img/15.jpg",
    title: "Camera",
  },
  {
    img: "/img/16.jpg",
    title: "Camera",
  },
  {
    img: "/img/17.jpg",
    title: "Camera",
  },
];

const Background = styled.div`
  background: linear-gradient(45deg, blueviolet, aquamarine);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TitleText = styled.p`
  max-width: 850px;
  color: white;
  font-size: 25px;
  font-weight: 600;
  line-height: 1cm;
  font-family: Arial, Helvetica, sans-serif;
  display: center;
`;
const ProjectText = styled.p`
  margin-left: 200px;
  margin-right: 100px;
  max-width: 850px;
  color: #413c69;
  font-size: 35px;
  font-weight: 800;
  line-height: 1cm;
  font-family: Arial, Helvetica, sans-serif;
  display: center;
`;
const ExplainText = styled.p`
  margin-left: 150px;
  margin-right: 100px;
  max-width: 700px;
  color: #4a47a3;
  font-size: 20px;
  font-weight: 100;
  line-height: 0.8cm;
  font-family: verdana;
  display: center;
`;
export default LandingPage;
