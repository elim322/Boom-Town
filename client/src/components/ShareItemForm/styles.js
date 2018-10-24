const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '500px',
    height: '500px'
  },
  title: {
    fontWeight: 900,
    marginTop: '50px',
    marginBottom: '50px',
    width: '260px',
    paddingLeft: '10px',
    fontSize: '50px',
    minWidth: '110%'
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
    padding: '30px 0',
    width: '400px'
  },
  itemDescription: {
    width: '400px'
  },
  tags: {
    width: '400px',
    paddingBottom: '10px',
    marginTop: '10px'
  },
  tagLabel: {
    paddingTop: '30px'
  },
  share: {
    border: 'none'
  },
  shareButton: {
    marginTop: '10px'
  },
  select: {
    width: '400px'
  }
});

export default styles;
