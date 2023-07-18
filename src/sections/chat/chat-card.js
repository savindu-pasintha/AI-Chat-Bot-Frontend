import PropTypes from "prop-types";
import ArrowDownOnSquareIcon from "@heroicons/react/24/solid/ArrowDownOnSquareIcon";
import ClockIcon from "@heroicons/react/24/solid/ClockIcon";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Stack,
  SvgIcon,
  Typography,
  Input,
  Button,
} from "@mui/material";

export const ChatCard = (props) => {
  const { chatcard,kb_id } = props;

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            height:400,
            pb: 3,
          }}
        >
          <iframe
            src={`https://chat.dante-ai.com/embed?kb_id=${kb_id}&modeltype=gpt-4&logo=ZmFsc2U=&mode=false`}
            allow="clipboard-write; microphone"
            width="100%"
            height="400"
            frameborder="0"
          ></iframe>
          {/* <Avatar
            // src={company.logo}
            variant="square"
          /> */}
          {/* <Input defaultValue="" inputProps={{ 'aria-label': 'description' }}  placeholder="conversation name"/> */}
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
        <Stack alignItems="center" direction="row" spacing={1}>
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
        <Stack alignItems="center" direction="row" spacing={1}>
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
            // startIcon={(
            //   <SvgIcon fontSize="small">
            //     <PlusIcon />
            //   </SvgIcon>
            // )}
            variant="contained"
          >
            Copy i-frame
          </Button>
        </div>
      </Stack>
    </Card>
  );
};

ChatCard.propTypes = {
  chatcard: PropTypes.object.isRequired,
};
