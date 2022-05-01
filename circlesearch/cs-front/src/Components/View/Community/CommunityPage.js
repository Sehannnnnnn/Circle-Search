import React from 'react'
import CommunityModal from '../Home/CommunityModal'
import {Divider, Fab, Button} from '@mui/material'
import CreateIcon from '@mui/icons-material/Create';
import { Navigate, useNavigate } from 'react-router-dom';

function CommunityPage() {
    const navigate = useNavigate();
    const onWriteHandler = () => {
        navigate("/community/write", {replace: true})
    }

  return (
    <div>
        <h2>실시간 HOT 게시물</h2>
        <CommunityModal />
        <center>
            <Button color="success" sx={{mt: 3, mb: 3}} onClick={onWriteHandler}>
            <Fab color="success" size='medium'>
                <CreateIcon/>
            </Fab>&nbsp;&nbsp;&nbsp;게시글 작성
            </Button>
        </center>
        <Divider></Divider>
        <h2>동아리 후기</h2>
        <CommunityModal />
    </div>
  )
}

export default CommunityPage