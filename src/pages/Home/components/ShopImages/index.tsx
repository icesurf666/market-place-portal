import React, { useEffect, useCallback } from "react";
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import fetchShops from "api/fetchShops";
import useFetch from "hooks/useFetch";
import { IShop } from "react-app-env";
import { Container } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      minWidth: 300,
      width: "100%"
    },
    image: {
      position: "relative",
      height: 200,
      [theme.breakpoints.down("xs")]: {
        width: "100% !important", // Overrides inline-style
        height: 100
      },
      "&:hover, &$focusVisible": {
        zIndex: 1,
        "& $imageBackdrop": {
          opacity: 0.15
        },
        "& $imageMarked": {
          opacity: 0
        },
        "& $imageTitle": {
          border: "4px solid currentColor"
        }
      }
    },
    focusVisible: {},
    imageButton: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: theme.palette.common.white
    },
    imageSrc: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: "cover",
      backgroundPosition: "center 40%"
    },
    imageBackdrop: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.4,
      transition: theme.transitions.create("opacity")
    },
    imageTitle: {
      position: "relative",
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) +
        6}px`
    },
    imageMarked: {
      height: 3,
      width: 18,
      backgroundColor: theme.palette.common.white,
      position: "absolute",
      bottom: -2,
      left: "calc(50% - 9px)",
      transition: theme.transitions.create("opacity")
    },
    title: {
      marginTop: 30,
      marginBottom: 10
    },
    wrap: {
      display: "flex",
      justifyContent: "center",
      marginBottom: 30
    },
    line: {
      width: 100,
      height: 7,
      backgroundColor: "#f40057"
    }
  })
);

export default function ShopImages() {
  const classes = useStyles()
  let history = useHistory()
  const { data, fetch } = useFetch(fetchShops);
  const handleClick = useCallback((id: number) => {
    history.push(`shop/${id}`)
  }, [])
  useEffect(() => {
    fetch();
  }, []);

  if (!data) return null;
 
  return (
    <Container>
      <Typography className={classes.title} align="center" variant="h3">
        Магазины
      </Typography>
      <div className={classes.wrap}>
        <div className={classes.line}></div>
      </div>
      <div className={classes.root}>
        {data.data.map((shop: IShop) => (
          <ButtonBase
            focusRipple
            key={shop.id}
            className={classes.image}
            onClick={() => handleClick(shop.id)}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: "33%"
            }}
          >
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${shop.logo?.src})`
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
                {shop.name}
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </ButtonBase>
        ))}
      </div>
    </Container>
  );
}
