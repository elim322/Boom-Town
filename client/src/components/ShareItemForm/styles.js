const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  Typography: {
    fontWeight: 900
  },
  shareButton: {
    border: 'none'
  },
  form: {
    border: 'none',
    display: 'flex',
    flexDirection: 'column'
  },
  button: {
    display: 'block',
    marginTop: theme.spacing.unit * 2
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: '120px'
  },
  itemName: {
    padding: '30px 0'
  }
});

export default styles;
