import {
  Avatar,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { callAPI } from './utils/CallAPI';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: `flex`,
    flexDirection: `column`,
    alignItems: `center`,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: `100%`,
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const MySwal = withReactContent(Swal);

export default function Login() {
  const classes = useStyles();
  let history = useHistory();
  const actLoginAdmin = () => {
    let user = {
      taiKhoan: document.getElementById(`email`).value.toString(),
      matKhau: document.getElementById(`password`).value.toString(),
    };
    callAPI(`QuanLyNguoiDung/DangNhap`, `POST`, user, null)
      .then(result => {
        console.log(result.data);
        if (result.data.maLoaiNguoiDung === `GV`) {
          localStorage.setItem(`userAdmin`, JSON.stringify(result.data));
          //Chuyển sang trang Dashboard Admin
          history.push(`/admin/dashboard`);
        } else {
          alert(`Bạn không có quyền truy cập`);
        }
      })
      .catch(err => {
        MySwal.fire({
          title: <p></p>,
          footer: `EduLine Admin`,
          onOpen: () => {
            // `MySwal` is a subclass of `Swal`
            //   with all the same instance & static methods
            MySwal.clickConfirm();
          },
        }).then(() => {
          return MySwal.fire(<p>{err.response.data}</p>);
        });
        // alert(err.response.data);
        // console.log(err.response.data);
      });
  };

  React.useEffect(() => {
    if (localStorage.getItem(`userAdmin`)) {
      history.push(`/admin/dashboard`);
    }
  }, [history]);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Đăng nhập
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            autoComplete="email"
            autoFocus
            fullWidth
            id="email"
            label="Email"
            margin="normal"
            name="email"
            required
            variant="outlined"
          />
          <TextField
            autoComplete="current-password"
            fullWidth
            id="password"
            label="Mật khẩu"
            margin="normal"
            name="password"
            required
            type="password"
            variant="outlined"
          />
          <FormControlLabel
            control={<Checkbox color="primary" value="remember" />}
            label="Lưu tài khoản"
          />
          <Button
            className={classes.submit}
            color="primary"
            fullWidth
            onClick={actLoginAdmin}
            variant="contained"
          >
            Đăng nhập
          </Button>
          <Grid container>
            <Grid item xs></Grid>
            <Grid item>
              <Link href="#" variant="body2">
                Quên mật khẩu?
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
