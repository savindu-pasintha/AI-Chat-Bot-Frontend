import Head from 'next/head';
import { Box, Container, Stack, Typography } from '@mui/material';
import { SettingsNotifications } from 'src/sections/settings/settings-notifications';
import { SettingsPassword } from 'src/sections/settings/settings-password';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { CustomizationsCard } from 'src/sections/customizations/CustomizationsCard';

const Customizations = () => (
  <>
    <Head>
      <title>
      Customizations | chat ui
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3}>
          <Typography variant="h4">
            Customizations
          </Typography>
           <CustomizationsCard />
           <SettingsPassword />
        </Stack>
      </Container>
    </Box>
  </>
);

Customizations.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Customizations;
