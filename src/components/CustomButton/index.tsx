import React from "react"
import { Button } from "@material-ui/core"

const CustomButton = ({submitting, children}: any) => (
  <Button
    variant="contained"
    color="primary"
    type="submit"
    size='medium'
  >
    {children}
  </Button>
)