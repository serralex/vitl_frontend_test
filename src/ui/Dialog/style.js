import Dialog from '@material-ui/core/Dialog';
import { withStyles } from '@material-ui/core/styles';

export const StyledDialog = withStyles({
    paper: {
      padding: '80px'
    },
})(Dialog);