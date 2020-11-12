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
import PersonIcon from "@material-ui/icons/Person";
import DescriptionIcon from "@material-ui/icons/Description";
import WatchIcon from "@material-ui/icons/Watch";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

const Header = ({data}) => {
    console.log('data',data)
    return (
      //  BEM
      <div className="header">
        <Grid container spacing={3} justify="center" className='header__container'>
          <Grid item component={Card} xs={12} md={5} className="app__infected">
            <CardMedia
              className="header__image"
              image={data.student_photo}
              title="student_photo"
            />

            <CardContent className="header__content">
              <h3>
                <PersonIcon />
                Student Name:{" "}
                <span className="header__student">{data.student_name}</span>
              </h3>
              <Typography color="textSecondary">
                {" "}
                Student Admission number:{" "}
                <span className="header__student">
                  {data.student_admission_number}
                </span>
              </Typography>
              <Typography color="textSecondary">
                Exam name:{" "}
                <span className="header__student">{data.exam_name}</span>
              </Typography>
              <Typography color="textSecondary">
                Class name:{" "}
                <span className="header__student">{data.class_name}</span>
              </Typography>
              <Typography color="textSecondary">
                Mean grade:
                <span className="header__student">{data.mean_grade}</span>
              </Typography>
              <Typography color="textSecondary">
                <AccessTimeIcon /> Date:{" "}
                <span className="header__student">{data.date_time}</span>
              </Typography>
              <Typography color="textSecondary">
                <WatchIcon /> Today date:
                <span className="header__student">
                  {new Date().toDateString()}
                </span>
              </Typography>
            </CardContent>
          </Grid>
          <Grid item component={Card} xs={12} md={5} className="app__infected">
            <CardContent>
              <h3>
                <DescriptionIcon />
                Remarks
              </h3>
              <Typography color="textSecondary">
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
















