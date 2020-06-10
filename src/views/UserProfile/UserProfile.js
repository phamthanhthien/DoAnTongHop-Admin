import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

import avatar from '../../assets/img/faces/marc.jpg';
import Card from '../../components/Card/Card';
import CardAvatar from '../../components/Card/CardAvatar';
import CardBody from '../../components/Card/CardBody';
import CardFooter from '../../components/Card/CardFooter';
import CardHeader from '../../components/Card/CardHeader';
import Button from '../../components/CustomButtons/Button';
import CustomInput from '../../components/CustomInput/CustomInput';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';

const styles = {
  cardCategoryWhite: {
    color: `rgba(255,255,255,.62)`,
    margin: `0`,
    fontSize: `14px`,
    marginTop: `0`,
    marginBottom: `0`,
  },
  cardTitleWhite: {
    color: `#FFFFFF`,
    marginTop: `0px`,
    minHeight: `auto`,
    fontWeight: `300`,
    fontFamily: `'Roboto', 'Helvetica', 'Arial', sans-serif`,
    marginBottom: `3px`,
    textDecoration: `none`,
  },
};

const useStyles = makeStyles(styles);

export default function UserDataProfile() {
  const classes = useStyles();

  return (
    <div>
      <GridContainer>
        <GridItem md={8} sm={12} xs={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Thông tin</h4>
              <p className={classes.cardCategoryWhite}>
                Cập nhật thông tin tài khoản
              </p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem md={5} sm={12} xs={12}>
                  <CustomInput
                    formControlProps={{
                      fullWidth: true,
                    }}
                    id="branch"
                    inputProps={{
                      disabled: true,
                      value: `Hello world`,
                    }}
                    labelText="Chi nhánh"
                  />
                </GridItem>
                <GridItem md={3} sm={12} xs={12}>
                  <CustomInput
                    formControlProps={{
                      fullWidth: true,
                    }}
                    id="office"
                    inputProps={{
                      disabled: true,
                      value: `HelloHello`,
                    }}
                    labelText="office"
                  />
                </GridItem>
                <GridItem md={4} sm={12} xs={12}>
                  <CustomInput
                    formControlProps={{
                      fullWidth: true,
                    }}
                    id="email-address"
                    inputProps={{
                      disabled: true,
                      value: `userData?.email`,
                    }}
                    labelText="Email"
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem md={6} sm={12} xs={12}>
                  <CustomInput
                    formControlProps={{
                      fullWidth: true,
                    }}
                    id="first-name"
                    inputProps={{
                      value: `userData?.firstName`,
                      onChange: v => console.log(v),
                    }}
                    labelText="Họ"
                  />
                </GridItem>
                <GridItem md={6} sm={12} xs={12}>
                  <CustomInput
                    formControlProps={{
                      fullWidth: true,
                    }}
                    id="last-name"
                    inputProps={{
                      value: `userData?.lastName`,
                    }}
                    labelText="Tên"
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem md={4} sm={12} xs={12}>
                  <CustomInput
                    disabled
                    formControlProps={{
                      fullWidth: true,
                    }}
                    id="identityCard"
                    inputProps={{
                      value: `userData?.identityCard`,
                      onChange: v => console.log(v),
                    }}
                    labelText="Chứng minh thư"
                  />
                </GridItem>
                <GridItem md={4} sm={12} xs={12}>
                  <CustomInput
                    formControlProps={{
                      fullWidth: true,
                    }}
                    id="number"
                    inputProps={{
                      value: `userData?.phoneNumber`,
                      onChange: v => console.log(v),
                    }}
                    labelText="Số điện thoại"
                  />
                </GridItem>
                <GridItem md={4} sm={12} xs={12}>
                  <CustomInput
                    formControlProps={{
                      fullWidth: true,
                    }}
                    id="country"
                    labelText="Quốc gia"
                    value={`Việt Nam`}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem md={12} sm={12} xs={12}>
                  <CustomInput
                    formControlProps={{
                      fullWidth: true,
                    }}
                    id="about-me"
                    inputProps={{
                      multiline: true,
                      rows: 5,
                    }}
                    labelText="Thông tin kèm theo"
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary">Cập nhật thông tin</Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem md={4} sm={12} xs={12}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img
                  alt="..."
                  src={`https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png`}
                />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>{`hello`}</h6>
              <h4 className={classes.cardTitle}>{`hello` || avatar}</h4>
              <p className={classes.description}></p>
              <Button color="primary" round>
                Theo dõi
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
