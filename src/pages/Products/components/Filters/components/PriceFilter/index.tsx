import React, { useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { IProduct } from 'react-app-env';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value: number) {
  return `${value}°C`;
}

interface IProps {
  onChange?: any,
  value: number[],
  products: IProduct[],
}


const PriceFilter = ({onChange, products}: IProps) => {
  const classes = useStyles();
  const [value, setValue] = React.useState<number[]>([1, 3000]);


  // const handleChange = useCallback((event: any, newValue: number | number[]) => {
  //   setValue(newValue as number[]);
  //   return products.filter((product: IProduct) => product.price >= value[0] && product.price <= value[1])
  // }, [products]);
  
  return (
    <div className={classes.root}>
      <Slider
        min={1}
        max={9999}
        value={value}
        onChange={onChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}
export default PriceFilter