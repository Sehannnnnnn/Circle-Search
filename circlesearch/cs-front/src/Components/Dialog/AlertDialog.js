import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';


export default function AlertDialog(props) {
  const userID = props.userID;
  const [open, setOpen] = useState(false);
  const [idValidate, setidValidate] = useState(false)
  const [dialogMessage, setdialogMessage] = useState("");
  

  const handleClickOpen = () => {
    axios.get('/user/register1/checkID', {params : {userID: userID}}).then((response) => {
      if (response.data === 1) {
        setidValidate(1)
        setdialogMessage("동일한 아이디가 존재합니다. 아이디를 다시 입력하세요.")
        console.log(idValidate, dialogMessage)
      } else {setdialogMessage("사용 가능한 아이디입니다!")}
      setOpen(true)
  })};

  const handleDisagree = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    setOpen(false);
  }

  if (idValidate) {
      return (
        <div>
      <Button variant="outlined" color='success' onClick={handleClickOpen}>
      아이디 중복체크</Button>
        <Dialog
          open={open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"아이디 중복체크"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              동일한 아이디가 존재합니다. 아이디를 다시 입력하세요.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDisagree}>다시 입력하기</Button>
            <Button onClick={handleConfirm} autoFocus>
              사용하기
            </Button>
      </DialogActions>
    </Dialog>
    </div>
      )
  } return (
    <div>
    <Button variant="outlined" color='success' onClick={handleClickOpen}>
    아이디 중복체크
      </Button>
      <Dialog
        open={open}
        onClose={handleDisagree}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"아이디 중복체크"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            동일한 아이디가 존재합니다. 아이디를 다시 입력하세요.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDisagree}>다시 입력하기</Button>
          <Button onClick={handleConfirm} autoFocus>
            사용하기
          </Button>
    </DialogActions>
    </Dialog>
  </div>
)
}
