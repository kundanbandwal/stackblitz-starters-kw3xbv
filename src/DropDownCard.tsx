import * as React from 'react';
import {
  Box,
  Collapse,
  Grid,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useState } from 'react';
import { DropdowmCardProps } from './DropDownCard.types';

const DropdownCard: React.FC<DropdowmCardProps> = ({
  auditor,
  children,
  progress,
  title,
  setSelectedSection,
}) => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <ListItemButton
        onClick={() => {
          setOpen(!open);
          if (
            typeof title !== 'undefined' &&
            typeof setSelectedSection !== 'undefined'
          )
            setSelectedSection(`${title} ${open ? 'opened' : 'closed'}`);
        }}
        sx={{
          backgroundColor: 'rgba(15, 212, 216, 0.1)',
          borderRadius: '2px',
          columnGap: '25px',
        }}
      >
        <ListItemText
          primary={
            <Typography
              sx={{
                color: '#201C43',
                fontSize: '12px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '18px',
              }}
            >{`${title}`}</Typography>
          }
        />
        {open ? (
          <ExpandLessIcon sx={{ color: '#1C2D47' }} />
        ) : (
          <ExpandMoreIcon sx={{ color: '#1C2D47' }} />
        )}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <Paper
          elevation={0}
          sx={{
            backgroundColor: 'rgba(15, 212, 216, 0.03)',
            borderRadius: '2px',
          }}
        >
          <Grid
            container
            rowSpacing={auditor ? 5 : 2}
            columnSpacing={2}
            sx={{
              marginTop: '3px',
              padding: '0px 20px 20px 20px',
            }}
          >
            {children}
          </Grid>
        </Paper>
      </Collapse>
    </>
  );
};

export default DropdownCard;
