import { Drawer } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

export const StyledDrawer = withStyles({
    paper: {
      width:'40%'
    },
})(Drawer);