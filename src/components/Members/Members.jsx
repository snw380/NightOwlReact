import React from 'react';
import "./style.css";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: 25,
  },

  
  card: {
    maxheight: 375,
  },

  media: {
    maxheight: 325,
    paddingTop: '56.25%', // 16:9
  },
  
}));

export default function Members() {
  const classes = useStyles();
 

  return (
    
      <Grid container spacing={6}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        {/* KD Ratio */}
        <Card className={classes.root} variant="elevated">
          <CardHeader
            title="KD RATIO"
          />
          <CardMedia
            className={classes.media}
            image="../assets/closerange.png"
            title="Close Range"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              #
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* WIN/LOSS RATIO */}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className={classes.root} variant="elevated">
          <CardHeader
            title="WIN TO LOSS RATIO"
          
          />
          <CardMedia
            className={classes.media}
            image="../assets/squat.png"
            title="WL Ratio"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
             #
            </Typography>
          </CardContent>
        </Card>
        </Grid>


        {/* Accuracy */}
    
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className={classes.root} variant="elevated">
          <CardHeader
            title="ACCURACY"
          
          />
          <CardMedia
            className={classes.media}
            image="../assets/maskOn.png"
            title="Accuracy"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              #
            </Typography>
          </CardContent>
        </Card>
        </Grid>


        {/* Headshots */}
    
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className={classes.root} variant="elevated">
          <CardHeader
            title="HEADSHOTS"
          
          />
          <CardMedia
            className={classes.media}
            image="../assets/Roze.png"
            title="headshots"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              #
            </Typography>
          </CardContent>
        </Card>
        </Grid>

      {/* Total Games Played */}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className={classes.root} variant="elevated">
          <CardHeader
            title="TOTAL GAMES PLAYED"
          />
          <CardMedia
            className={classes.media}
            image="../assets/shooters.png"
            title="shooters"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              #
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Games Played */}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className={classes.root} variant="elevated">
          <CardHeader
            title="TOTAL TIME PLAYED"
          
          />
          <CardMedia
            className={classes.media}
            image="../assets/3guys.png"
            title="time played"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
             #
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* TOTAL KILLS */}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className={classes.root} variant="elevated">
          <CardHeader
            title="TOTAL KILLS"
          
          />
          <CardMedia
            className={classes.media}
            image="../assets/gun.png"
            title="KILLS"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
             #
            </Typography>
          </CardContent>
        </Card>
        </Grid>

        {/* LONGEST KILLSTREAK */}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className={classes.root} variant="elevated">
          <CardHeader
            title="LONGEST KILLSTREAK"
          
          />
          <CardMedia
            className={classes.media}
            image="../assets/backpic.png"
            title="KILLSTREAK"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              #
            </Typography>
          </CardContent>
        </Card>
        </Grid>
        
  </Grid>





    
  );
}
