import PropTypes from 'prop-types';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import ClockIcon from '@heroicons/react/24/solid/ClockIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Avatar, Box, Card, CardContent, Divider, Stack, SvgIcon, Typography,Input ,Button} from '@mui/material';

export const CreateConversationCard = (props) => {
  const { createconversationcard } = props;

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            pb: 3
          }}
        >
          {/* <Avatar
            // src={company.logo}
            variant="square"
          /> */}
          <Input defaultValue="" inputProps={{ 'aria-label': 'description' }}  placeholder="conversation name"/>
         </Box>
      
      </CardContent>
      <Box sx={{ flexGrow: 1 }} />
      <Divider />
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{ p: 2 }}
      >
        <Stack
          alignItems="center"
          direction="row"
          spacing={1}
        >
          {/* <SvgIcon
            color="action"
            fontSize="small"
          >
            <ClockIcon />
          </SvgIcon>
          <Typography
            color="text.secondary"
            display="inline"
            variant="body2"
          >
            Updated 2hr ago
          </Typography> */}
        </Stack>
        <Stack
          alignItems="center"
          direction="row"
          spacing={1}
        >
          {/*  <SvgIcon
            color="action"
            fontSize="small"
          >
            <ArrowDownOnSquareIcon />
         </SvgIcon>
          <Typography
            color="text.secondary"
            display="inline"
            variant="body2"
          >
            {company.downloads} Downloads
          </Typography> */}
        </Stack>
        <div>
              <Button
                startIcon={(
                  <SvgIcon fontSize="small">
                    <PlusIcon />
                  </SvgIcon>
                )}
                variant="contained"
              >
                Craete Conversation
              </Button>
            </div>
      </Stack>
    </Card>
  );
};

CreateConversationCard.propTypes = {
    createconversation: PropTypes.object.isRequired
};
