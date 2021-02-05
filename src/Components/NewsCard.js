import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';

const NewsCard = props => {

    return(
    <Card className="news-card" variant='outlined'>
        <CardHeader
        title={props.header}
        subheader={props.date}
        />
        <CardMedia 
        style={{height: "150px"}}
        image={props.img}
        title={props.title}
        />
        <CardContent>
        {props.content}
        </CardContent>
    </Card>
    )
}

export default NewsCard;