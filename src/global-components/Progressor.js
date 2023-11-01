import { styled } from '@mui/material/styles';
import {Box} from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  width:380,
  borderRadius: 5,
  position:'relative',
  left:'4em',
  top:'1em',
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 50 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#FFA500' : '#308fe8',
  },
}));

export default function CustomizedProgressBars() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <BorderLinearProgress variant="determinate" value={20} />
    </Box>
  );
}