import SearchIcon from '@mui/icons-material/Search';
import { Box, Grid, IconButton, InputBase, Paper } from '@mui/material';
import React from 'react';

export function SearchBox() {
  return (
    <Box>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ borderStyle: 'dotted', borderColor: 'red' }}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          item
          xs={12}
        >
          <Paper
            component="form"
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              width: 400,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search"
              inputProps={{ 'aria-label': 'search' }}
            />
            <IconButton type="button" sx={{ p: '15px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
