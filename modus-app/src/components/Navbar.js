import React from "react";
import { useEffect, useState, useRef } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link, useHistory } from "react-router-dom";
import { handleLogout } from "../firebase";
import { useHistory, useLocation } from "react-router";
import {
        Typography, Drawer, 
        List, ListItem, ListItemText, 
        ListItemIcon
      } from "@mui/material/";
import { makeStyles } from "@mui/styles/";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CreateIcon from '@mui/icons-material/Create';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AssessmentIcon from '@mui/icons-material/Assessment';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import LogoutIcon from '@mui/icons-material/Logout';


const drawerWidth = '12rem';

const useStyles = makeStyles({
  root: {
    display: 'flex'
  },
  drawer: {
    width: drawerWidth,
  },
  active: {
    background: '#5d88e3',
    color: '#FFFFFF'
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#7699e4'
  },
  title: {
    fontSize: 28,
    color: '#FFFFFF',
    paddingLeft: '1rem',
    paddingTop: '1rem'
  },
  link: {
    color: '#FFFFFF',
    paddingTop: '1rem'
  },
  linkText: {
    color: '#FFFFFF',
  }
})

function NavBar() {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const menuItems = [
    {
      text: 'Dashboard',
      icon: <DashboardIcon color="#FFFFFF"/>,
      path: '/'
    },
    {
      text: 'Profile',
      icon: <AccountCircleIcon color="#FFFFFF"/>,
      path: '/profile'
    },
    {
      text: 'New Entry',
      icon: <CreateIcon color="#FFFFFF"/>,
      path: '/write'
    },
    {
      text: 'Library',
      icon: <LibraryBooksIcon color="#FFFFFF"/>,
      path: '/library'
    },
    {
      text: 'Analysis',
      icon: <AssessmentIcon color="#FFFFFF"/>,
      path: '/analysis'
    },
    {
      text: 'FAQ',
      icon: <QuestionAnswerIcon color="#FFFFFF"/>,
      path: '/faq'
    },
  ]

  return (
    <div className={classes.root}>  
      <Drawer 
        variant="permanent"
        anchor="left"
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
      >
        <Typography className={classes.title}>Modus.ai</Typography>
        {/* list / links */}
        <List>      
          {menuItems.map(item => (
            <ListItem
              key={item.text}
              button
              onClick={() => history.push(item.path)}
              className={location.pathname == item.path ? classes.active : classes.linkText}
            >
                <ListItemIcon className={classes.linkText}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
            </ListItem>
          ))}
          <ListItem
            button
            onClick={() => {history.push('/'); handlelogout}}
            className={classes.linkText}
          >
            <ListItemIcon className={classes.linkText}><LogoutIcon color='#FFFFFF'/></ListItemIcon>
            <ListItemText primary='Logout' />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
export default NavBar;
