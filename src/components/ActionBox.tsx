import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Fab, Grid } from '@mui/material';
import React from 'react';

export function ActionBox() {
  return (
    <Box>
      <Grid container direction="row" justifyContent="flex-end" alignItems="center" marginLeft={4} marginRight={4}>
        <Grid item xs={12} md={4} container direction="row" justifyContent="center" alignItems="center">
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Grid>
        <Grid item xs={12} md={4} container direction="row" justifyContent="center" alignItems="center">
          <Fab color="default" aria-label="edit">
            <EditIcon />
          </Fab>
        </Grid>
        <Grid item xs={12} md={4} container direction="row" justifyContent="center" alignItems="center">
          <Fab color="default" aria-label="remove">
            <DeleteIcon />
          </Fab>
        </Grid>
      </Grid>
    </Box>
  );
}
