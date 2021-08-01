import { Drawer } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

export const StyledDrawer = withStyles({
    paper: {
      width:'40%',
      padding: '20px',
      ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
        width: '100%',
        padding:'0'
      }
    },
})(Drawer);