
import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './card.css'

const Cards = ({data}) => {

  return (
      <Card sx={{ maxWidth: 345 }} className="card_main" >
          <div>
          <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {data?.userId}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="React Js Developer"
        
      />
          <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {data?.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="body_text" >
         {data?.body}
        </Typography>
      </CardContent>
          </div>
    
      <CardActions disableSpacing >
        <IconButton aria-label="add to favorites">
          <FavoriteIcon sx={{ color: red[500] }}/>
              </IconButton >
              <p>{data?.reactions }</p>
              <div className='tags'>
                  {data?.tags?.map((item, index) => {
                      return (
                          <p className='tag_p' key={ index}>{item}</p>
                     )
                 })}
              </div>
      </CardActions>
     
    </Card>
  );
}

export default Cards