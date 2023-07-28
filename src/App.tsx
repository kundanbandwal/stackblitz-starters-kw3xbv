import { Button, Grid, TextField, Typography } from '@mui/material';
import * as React from 'react';
import DropdownCard from './DropDownCard';
import './style.css';

export default function App() {
  return (
    <div>
      <DropdownCard title="Service & Event">
        <Grid item xs={6}>
          <TextField
            required
            id="outlined-required"
            label="Service"
            defaultValue="Hello World"
            size="small"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="outlined-required"
            label="Service"
            defaultValue="Hello World"
            size="small"
          />
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained">Contained</Button>
        </Grid>
      </DropdownCard>
      <DropdownCard title="Account">
        <Grid item xs={9}>
          <Typography
            sx={{
              color: '#201C43',
              fontSize: '12px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '18px',
            }}
          >
            Connect your united state Postal service Account
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Button variant="Text">Sign in</Button>
        </Grid>
      </DropdownCard>
    </div>
  );
}
