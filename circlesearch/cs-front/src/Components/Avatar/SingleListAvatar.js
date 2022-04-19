import React, {useState, useEffect} from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import { IconButton } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import {Link} from 'react-router-dom';

function SingleListAvatar(props) {
    //추가개발 요구사항 : userID 가 가입되 있는 동아리에 대한 list 필요
    // useEffect(() => {
    //   setlist(props.list)
    // }, [props])
    const [list, setlist] = useState([
        {name : '소리사랑',
        icon : 'src주소값'},
        {name : '큐시즘',
        icon : 'src주소값'}, 
        {name : 'SSC',
        icon : 'src주소값'},
    ])
    //FolderICON 말고 각각의 동아리들의 icon이 필요

    //동아리들의 새소식이 있을 경우 notificationActiveicon 활성화
  return (
    <div>
        <Grid item xs={12} sx={{mt: 2}}>
            <List dense={false}>
              {list.map((item) => (
                <ListItem secondaryAction ={<IconButton edge="end" aria-label="notice">
                <NotificationsActiveIcon />
              </IconButton>}>
                  <ListItemAvatar>
                    <Avatar>
                        <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.name}
                  />
                </ListItem>
              ))}
            </List>
        </Grid>    
    </div>
  )
}

export default SingleListAvatar