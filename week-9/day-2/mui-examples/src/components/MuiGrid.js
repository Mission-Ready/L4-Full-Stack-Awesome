import React from 'react'
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden'

export default function MuiGrid() {
  return (
    <div>
      <Hidden lgUp>
        <Grid container spacing={3}>
          <Grid item lg={3} md={6} xs={12}>
            <div style={{height: "100px", background: "red"}}></div>
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <div style={{height: "100px", background: "green"}}></div>
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <div style={{height: "100px", background: "blue"}}></div>
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <div style={{height: "100px", background: "yellow"}}></div>
          </Grid>
        </Grid>
      </Hidden>
    </div>
  )
}
