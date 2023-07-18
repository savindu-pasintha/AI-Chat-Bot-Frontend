import { useCallback } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControlLabel,
  Stack,
  Typography,Input,
  Unstable_Grid2 as Grid
} from '@mui/material';

export const CustomizationsCard = () => {
  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
    },
    []
  );

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        {/* <CardHeader
          subheader="Manage the notifications"
          title="Notifications"
        /> */}
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={6}
            wrap="wrap"
          >
            <Grid
              xs={12}
              sm={6}
              md={4}
            >
              {
                /*
                "kb_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "kb_name": "string",
  "base_system_prompt": "You must act as the documents in the knowledge base. Never refer to anything outside of the documents you are trained on.",
  "initial_messages": [
    "👋 Hi, how can I help you?"
  ],
  "prompt_suggestions": [
    "Give me a summary of this knowledge base",
    "Write a poem about this knowledge base",
    "Tell me five key points about this knowledge base"
  ],
  "display_name": "string",
  "visitor_chat_color": "string",
  "dante_chat_color": "string",
  "embed_logo_url": "string",
  "embed_page_url": "string",
  "chatbot_profile_pic": "string",
  "prompts_color": "string",
  "custom_url": "string",
  "show_tooltips": true,
  "remove_dante_logo": false,
  "custom_url_favicon": "string",
  "custom_url_title": "string",
  "custom_url_meta": "string",
  "font_name": "string",
  "font_size": 0,
  "dante_font_color": "string",
  "visitor_font_color": "string",
  "chat_background_color": "string",
  "custom_css": "string",
  "hide_microphone_icon": false,
  "password": "string",
  "public": true,
  "enabled": true,
  "max_number_of_credits": 0,
  "prompts_font_color": "string",
  "input_background": "string",
  "scrollbar_color": "string",
  "input_placeholder_text": "string",
  "show_prompt_messages": true,
  "is_bubble_opened": false,
  "disclaimer_text": "string"
                */
              }
              <Stack spacing={1}>

                <Typography variant="h6">
                  
                </Typography>
                <Stack>
                <Input defaultValue="" inputProps={{ 'aria-label': 'description' }}  placeholder="kb id"/>
                <Input defaultValue="" inputProps={{ 'aria-label': 'description' }}  placeholder="base_system_prompt"/>
                <Input defaultValue="" inputProps={{ 'aria-label': 'description' }}  placeholder="initial_messages"/>
                <Input defaultValue="" inputProps={{ 'aria-label': 'description' }}  placeholder="prompt_suggestions"/>
                <Input defaultValue="" inputProps={{ 'aria-label': 'description' }}  placeholder="prompt_suggestions"/>
                <Input defaultValue="" inputProps={{ 'aria-label': 'description' }}  placeholder="prompt_suggestions"/>
                <Input defaultValue="" inputProps={{ 'aria-label': 'description' }}  placeholder="display_name"/>
                <Input defaultValue="" inputProps={{ 'aria-label': 'description' }}  placeholder="input_placeholder_text"/>
                <Input defaultValue="" inputProps={{ 'aria-label': 'description' }}  placeholder="disclaimer_text"/>
                <Input defaultValue="" inputProps={{ 'aria-label': 'description' }}  placeholder="scrollbar_color" type="color"/>
                <Input defaultValue="" inputProps={{ 'aria-label': 'description' }}  placeholder="custom_css"/>
                <Input defaultValue="" inputProps={{ 'aria-label': 'description' }}  placeholder="custom_url_title"/>
                <Input defaultValue="" inputProps={{ 'aria-label': 'description' }}  placeholder="font_name"/>
               
            
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Email"
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Push Notifications"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Text Messages"
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Phone calls"
                  />
                </Stack>
              </Stack>
            </Grid>
            <Grid
              item
              md={4}
              sm={6}
              xs={12}
            >
              <Stack spacing={1}>
                <Typography variant="h6">
                  
                </Typography>
                <Stack>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Email"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Push Notifications"
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Phone calls"
                  />
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button variant="contained">
            Save
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};
