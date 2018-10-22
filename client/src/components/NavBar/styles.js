const styles = theme => ({
  AppBar: {
    background: '#f9a825',
    display: 'flex',
    position: 'relative',
    height: '60px'
  },
  Toolbar: {
    margin: '10px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  Logo: {
    height: '40px',
    width: 'auto',
    position: 'relative',
    bottom: '10px',
    right: '10px'
  },
  Link: {
    position: 'relative',
    bottom: '10px'
  },
  Icon: {
    margin: '10px'
  },
  Dots: {
    opacity: '0.7'
  }
});

export default styles;
