import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    padding: "0px",
    margin: "10px",
    marginTop: "50px",
  },
  media: {
    height: 140,
  },
});

const CoffeeCard = props => {

    const classes = useStyles();

    return(
    <Card className={classes.root} variant="outlined">
        <CardActionArea>
            <CardMedia
                style={{height: "150px"}}
                image={props.imgSrc}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.description}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
    );
}
export default CoffeeCard;