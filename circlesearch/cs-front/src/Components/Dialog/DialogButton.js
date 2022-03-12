import React, {useState} from 'react'
import Button from '@mui/material/Button';

function DialogButton(props) {
    const idValidate = props.idValidate;
    if (idValidate) {
        return (
            <div>
                <Button onClick={handleDisagree}>다시 입력하기</Button>
                <Button onClick={handleConfirm} autoFocus>사용하기</Button>
            </div>
        )
    } return (
        <Button onClick={handleDisagree}>다시 입력하기</Button>
  )
}

export default DialogButton