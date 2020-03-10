import { createMuiTheme } from "@material-ui/core";

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
  overrides: {
    MuiButton: {
      textPrimary: {
        color: '#ffffff'
      },
      outlinedPrimary: {
        color: '#ffffff',
        borderColor: '#ffffff',
      }
    },
   
    // MuiTab: {
    //   textColorPrimary: {
    //     color: '#ffffff',
    //   },
    //   selected: {
    //     color: '#ffffff',
    //   },
    // }
  }
});

export const lightTheme = createMuiTheme({
  palette: {
     type: 'light',
  },
});
