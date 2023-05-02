import { Stack } from '@mui/material';
import { Box, styled } from '@mui/material';

import SimpleForm from './SimpleForm';
import StepperForm from './StepperForm';
import SimpleCard from '../components/SimpleCard';

const Container = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
  }
}));

const AppForm = () => {
  return (
    <Container>

      <Stack spacing={3}>
        <SimpleCard title="Simple Form">
          <SimpleForm />
        </SimpleCard>

        <SimpleCard title="stepper form">
          <StepperForm />
        </SimpleCard>
      </Stack>
    </Container>
  );
};

export default AppForm;