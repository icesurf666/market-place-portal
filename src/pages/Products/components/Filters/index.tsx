import React, { useEffect } from "react";
import { Grid, Typography, Paper, Container } from "@material-ui/core";
import fetchProducts from "api/fetchProducts";
import useFetch from "hooks/useFetch";
import { IProduct } from "react-app-env";
import ProductCard from "components/ProductCard";
import Rating from "@material-ui/lab/Rating";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import StarRating from "./components/StarRating";
import PriceFilter from "./components/PriceFilter";
import SearchFilter from "./components/SearchFilter";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      marginTop: 20
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: "100%",
      flexShrink: 0
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary
    },
    price: {
      marginBottom: 20
    }
  })
);

interface IProps {
  onChange?: any;
  value: number[];
  products: any;
  page?: number;
  onSubmit: any;
  onSubmitStars: any;
  onSubmitPrice: any;
  defaultValues: any;
}
const Filters = ({
  products,
  value,
  onChange,
  page,
  onSubmit,
  onSubmitStars,
  onSubmitPrice,
  defaultValues
}: IProps) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container>
      <div className={classes.root}>
        <Grid container className={classes.price}>
          <SearchFilter onSubmit={onSubmit} page={page} />
        </Grid>
        <ExpansionPanel
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}>Звезды</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <StarRating onSubmit={onSubmitStars} products={products} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography className={classes.heading}>Цена</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <PriceFilter
              onSubmit={onSubmitPrice}
              defaultValues={defaultValues}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    </Container>
  );
};

export default Filters;
