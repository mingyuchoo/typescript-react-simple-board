import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Fab, Grid } from '@mui/material';
import React from 'react';

export function ActionBox() {
  return (
    <Box>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="space-around"
      >
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          item
          xs={12}
          md={4}
        >
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Grid>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          item
          xs={12}
          md={4}
        >
          <Fab color="default" aria-label="edit">
            <EditIcon />
          </Fab>
        </Grid>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          item
          xs={12}
          md={4}
        >
          <Fab color="default" aria-label="remove">
            <DeleteIcon />
          </Fab>
        </Grid>
      </Grid>
    </Box>
  );
}
