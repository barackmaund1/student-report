import React from 'react';
import './Header.css';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  CardActionArea,
  CardActions,
  CardMedia,
  Button,
} from "@material-ui/core";
import CountUp from "react-countup";

const Header = ({data}) => {
    console.log('data',data)
    return (
      //  BEM
      <div className="header">
        <Grid container spacing={3} justify="center">
          <Grid item component={Card} xs={12} md={5} className="app__infected ">
            <CardMedia
              className="header__image"
              image={data.student_photo}
              title="student_photo"
            />

            <CardContent className="header__content">
              <h3>
                Student Name:{" "}
                <span className="header__student">{data.student_name}</span>
              </h3>
              <Typography>
                {" "}
                Student Admission number:{" "}
                <span className="header__student">
                  {data.student_admission_number}
                </span>
              </Typography>
              <Typography>
                Exam name:{" "}
                <span className="header__student">{data.exam_name}</span>
              </Typography>
              <Typography>
                Class name:{" "}
                <span className="header__student">{data.class_name}</span>
              </Typography>
              <Typography>
                Date: <span className="header__student">{data.date_time}</span>
              </Typography>
              <Typography>
                Today date:
                <span className="header__student">
                  {new Date().toDateString()}
                </span>
              </Typography>
            </CardContent>
          </Grid>
          <Grid item component={Card} xs={12} md={5} className="app__infected">
            <CardContent>
              <h3>Remarks</h3>
              <Typography>
                Principals remarks:{" "}
                <span className="header__student">
                  {data.principals_remarks}
                </span>
              </Typography>
              <Typography color="textSecondary">
                Class teachers remarks:
                <span className="header__student">
                  {data.class_teachers_remarks}
                </span>
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </div>
    );
}

export default Header
















