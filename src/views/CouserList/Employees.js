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
};

const useStyles = makeStyles(styles);

const ImageComponent = ({ imagrUrl }) => {
  return (
    <img alt="..." src={imagrUrl} style={{ width: `100px`, height: `100ox` }} />
  );
};

export default function List() {
  const [state, setState] = useState({
    columns: [
      { title: `Mã khóa học`, field: `maKhoaHoc` },
      { title: `Tên khóa học`, field: `tenKhoaHoc` },
      { title: `Mô tả`, field: `moTa` },
      { title: `Ngày tạo`, field: `ngayTao` },
      { title: `Số lượng học viên`, field: `soLuongHocVien` },
      { title: `Người tạo`, field: `nguoiTao` },
      { title: `Danh mục khóa học`, field: `danhMucKhoaHoc` },
      { title: `Hình ảnh`, field: `hinhAnh` },
    ],
    data: [],
  });

  const getGV = () => {
    callAPI(`QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP08`, `GET`, null, null)
      .then(result => {
        if (result?.data) {
          console.log(result.data);
          result.data.map(r => {
            // console.log(r);
            setState(prevState => {
              const data = [...prevState.data];
              data.push({
                maKhoaHoc: (
                  <a href="https://www.youtube.com/watch?v=Lm3UG2GXLHk">
                    {r.maKhoaHoc}
                  </a>
                ),
                tenKhoaHoc: r.tenKhoaHoc,
                moTa: r.moTa,
                soLuongHocVien: r.soLuongHocVien,
                ngayTao: r.ngayTao,
                nguoiTao: r.nguoiTao.taiKhoan,
                danhMucKhoaHoc: r.danhMucKhoaHoc.maDanhMucKhoahoc,
                hinhAnh: <ImageComponent imagrUrl={r.hinhAnh} />,
              });
              return { ...prevState, data };
            });

            return null;
          });
        }
        return null;
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
        <CardHeader color="success">
          <h4 className={classes.cardTitleWhite}>Danh sách khóa học</h4>
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
                    setState(prevState => {
                      const data = [...prevState.data];
                      data.push({
                        email: newData?.email,
                        emailVerified: Boolean(newData?.emailVerified),
                        phoneNumber: newData?.phoneNumber,
                        identityCard: newData?.identityCard,
                        firstName: newData?.firstName,
                        lastName: newData?.lastName,
                        office: newData?.office,
                        branch: newData?.branch,
                      });
                      return { ...prevState, data };
                    });
                    resolve();
                  }, 600);
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise(resolve => {
                  setTimeout(() => {
                    resolve();
                    if (oldData?.branch === `6` && newData === `6`) {
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
                color: `#000`,
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
                color: `#000`,
              },
            }}
            title={null}
          />
        </CardBody>
      </Card>
    </GridItem>
  );
}
