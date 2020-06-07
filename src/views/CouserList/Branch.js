import { makeStyles } from '@material-ui/core/styles';
import MaterialTable from 'material-table';
import React, { useState } from 'react';

import Card from '../../components/Card/Card';
import CardBody from '../../components/Card/CardBody';
import CardHeader from '../../components/Card/CardHeader';
import GridItem from '../../components/Grid/GridItem';
import { callAPI } from '../../src-Auth/utils/CallAPI';

const styles = {
  cardCategoryWhite: {
    '&,& a,& a:hover,& a:focus': {
      color: `rgba(255,255,255,.62)`,
      margin: `0`,
      fontSize: `14px`,
      marginTop: `0`,
      marginBottom: `0`,
    },
    '& a,& a:hover,& a:focus': {
      color: `#FFFFFF`,
    },
  },
  cardTitleWhite: {
    color: `#FFFFFF`,
    marginTop: `0px`,
    minHeight: `auto`,
    fontWeight: `300`,
    fontFamily: `'Roboto', 'Helvetica', 'Arial', sans-serif`,
    marginBottom: `3px`,
    textDecoration: `none`,
    '& small': {
      color: `#777`,
      fontSize: `65%`,
      fontWeight: `400`,
      lineHeight: `1`,
    },
  },
  root: {
    color: `#ef4056`,
  },
};

const useStyles = makeStyles(styles);

export default function Branch() {
  const [state, setState] = useState({
    columns: [
      { title: `Tài khoản`, field: `taiKhoan` },
      { title: `Họ tên`, field: `name` },
      { title: `Email`, field: `address` },
      // { title: `Age`, field: `age`, type: `numeric` },
      { title: `SĐT`, field: `gender` },
    ],
    data: [],
  });

  const getGV = () => {
    callAPI(
      `QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP08`,
      `GET`,
      null,
      null,
    )
      .then(result => {
        if (result?.data) {
          console.log(result);
          result.data.map(r => {
            console.log(r);
            if (r.maLoaiNguoiDung === `HV`) {
              setState(prevState => {
                const data = [...prevState.data];
                data.push({
                  taiKhoan: r.taiKhoan,
                  name: r.hoTen,
                  address: r.email,
                  age: r.sdt,
                  gender: r.soDt,
                });
                return { ...prevState, data };
              });
            }
            return null;
          });
        }
        return null;
      })
      .catch(err => {
        console.log(err.response.data);
      });
  };

  const delteGV = data => {
    console.log(data.name);
    callAPI(`QuanLyNguoiDung/XoaNguoiDung`, `POST`, null, null)
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err.response.data);
      });
  };

  React.useEffect(getGV, []);

  const classes = useStyles();
  return (
    <GridItem md={12} sm={12} xs={12}>
      <Card>
        <CardHeader color="info">
          <h4 className={classes.cardTitleWhite}>Danh sách học viên</h4>
        </CardHeader>
        <CardBody>
          <MaterialTable
            className={classes.root}
            columns={state.columns}
            data={state.data}
            editable={{
              onRowAdd: newData =>
                new Promise(resolve => {
                  setTimeout(() => {
                    resolve();
                    setState(prevState => {
                      const data = [...prevState.data];
                      data.push({
                        email: newData?.email,
                        emailVerified: Boolean(newData?.emailVerified),
                        status: newData?.status,
                        phoneNumber: newData?.phoneNumber,
                        address: newData?.address,
                        restaurantName: newData?.restaurantName,
                      });
                      return { ...prevState, data };
                    });
                  }, 600);
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise(resolve => {
                  setTimeout(() => {
                    resolve();
                    if (oldData) {
                      setState(prevState => {
                        const data = [...prevState.data];
                        data[data.indexOf(oldData)] = newData;
                        return { ...prevState, data };
                      });
                    }
                  }, 600);
                }),
              onRowDelete: oldData =>
                new Promise(resolve => {
                  delteGV(oldData);
                  setTimeout(() => {
                    resolve();
                    setState(prevState => {
                      const data = [...prevState.data];
                      data.splice(data.indexOf(oldData), 1);
                      return { ...prevState, data };
                    });
                  }, 600);
                }),
            }}
            options={{
              rowStyle: {
                color: `#26c6da`,
              },
              actionsCellStyle: {
                color: `#26c6da`,
              },
              actionsColumnIndex: -1,
              headerStyle: {
                backgroundColor: `#F5F5F5`,
                fontSize: `16px`,
              },
              searchFieldStyle: {
                color: `#26c6da`,
              },
            }}
            title={null}
          />
        </CardBody>
      </Card>
    </GridItem>
  );
}
