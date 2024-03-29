import React, { useCallback, useState } from "react";
import {
  makeStyles,
  createStyles,
  Theme,
  Container,
  Typography,
  Button
} from "@material-ui/core";
import img from "./assets/4.jpg";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { Animated } from "react-animated-css";
import ShopImages from "./components/ShopImages";
import SimpleModal from "components/Modal";
import LeadForm from "./components/LeadForm";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundImage: `url(${img})`,
      height: "100vh",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "left center"
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular
    },
    h2: {
      color: "#fff",
      marginTop: 50
    },
    h3: {
      color: "#fff",
      marginTop: 30
    },
    btn: {
      width: 200,
      textAlign: "center",
      marginTop: 50
    },
    wrap: {
      display: "flex",
      justifyContent: "center"
    },
    line: {
      width: 100,
      height: 7,
      backgroundColor: "#f40057"
    },
    icon: {
      color: "#fff",
      marginTop: 30
    }
  })
);

const Home: React.FC = () => {
  const classes = useStyles();
  const [modalVisible, setModalVisible] = useState(false);
  const handleOpen = useCallback(() => setModalVisible(true), []);
  const handleClose = useCallback(() => setModalVisible(false), []);

  return (
    <div>
      <div className={classes.root}>
        <Container style={{ paddingTop: "30px", paddingBottom: "50px" }}>
          <Animated
            animationIn="fadeInRight"
            animationOut="fadeOut"
            isVisible={true}
            animationInDuration={2500}
          >
            <Typography variant="h2" align="center" className={classes.h2}>
              Добро пожаловать
            </Typography>
          </Animated>

          <div className={classes.wrap}>
            <div className={classes.line}></div>
          </div>
          <Animated
            animationIn="fadeInLeft"
            animationOut="fadeOut"
            isVisible={true}
            animationInDuration={2500}
            animationInDelay={1000}
          >
            <Typography variant="h3" align="center" className={classes.h3}>
              Создайте магазин в пару кликов
            </Typography>
          </Animated>
          <div className={classes.wrap}>
            <Animated
              animationIn="flipInY"
              animationOut="fadeOut"
              isVisible={true}
              animationInDuration={2500}
            >
              <Button
                variant="contained"
                color="secondary"
                size="large"
                className={classes.btn}
                onClick={handleOpen}
              >
                Создать заявку
              </Button>
              <SimpleModal title={'Подать заявку'} open={modalVisible} close={handleClose}>
              
              <LeadForm />
              </SimpleModal>
            </Animated>
          </div>

          <div className={classes.wrap}>
            <ArrowDownwardIcon fontSize="large" className={classes.icon} />
          </div>
        </Container>
      </div>
      <ShopImages />
    </div>
  );
};
export default Home;
