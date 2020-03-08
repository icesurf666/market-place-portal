import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Header from "./components/Header";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    paper: {
      width: 400,
      backgroundColor: "white",
      border: "2px solid #000",
      boxShadow: theme.shadows[5]
    },
    content: {
      backgroundColor: "white",
      padding: 4
    }
  })
);

const SimpleModal = ({ open, close, title, children }: any) => {
  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={close}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <Header onClose={close} title={title} />
          <div className={classes.content}>{children}</div>
        </div>
      </Fade>
    </Modal>
  );
};

export default SimpleModal;
