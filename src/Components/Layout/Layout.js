import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Categories from '../Categories/Categories';
import Sorting from '../Sorting/Sorting';
import Article from '../Article/Article';
import './Layout.scss';
import { Router } from 'react-router';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <div className="search_log">
            <Typography variant="h6" noWrap>
              <div className="layout_search"> Search </div>
            </Typography>
            <div className="layout_log">
              {' '}
              <img src="img/log.png" style={{ width: '45px', height: '45px' }} />
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className="heldat_img">
          <img src="img/heldat.png" style={{ width: '180px', height: '130px' }}></img>
        </div>

        <div className={classes.toolbar} />

        <Divider />
        <List>
          <div className="image-side">
            <div className="image_actif">
              <img src="img/home.png" />
            </div>
            <div className="text_dash">Dashboard</div>
          </div>
        </List>
        <Divider />
        <div className="logout">
          <div className="logout_image">
            <img src="img/logout.png" />
          </div>
          <div className="text_log">Logout</div>
        </div>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <BrowserRouter>
          <Switch>
            <Route path="/categories" exact component={Categories} />
            <Route path="/sorting" exact component={Sorting} />
            <Route path="/article" exact component={Article} />
          </Switch>
        </BrowserRouter>
      </main>
    </div>
  );
}
