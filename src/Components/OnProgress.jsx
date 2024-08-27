import { Container, Grid, Divider, Typography, Box } from '@mui/material';

export default function InProgress({ tasks = [] }) {

  const task = tasks[0] || {};

 
  const { deadline, priority, taskDescription, taskName, taskStatus } = task;

  return (
    <Container className="background-container" sx={{     backgroundColor: '#3F4041',
      borderRadius: '12px',
      margin: '12px',
      padding: '16px', }}>
      <Grid container className="container-main-con" sx={{ marginTop: '12px' }}>
        <Typography variant="h4" className="taskName" sx={{ color: '#ffffff', fontFamily: 'Inter', marginLeft: '42px', fontSize: "18px", marginBottom: '8px' }}>
          <Box component="span" className="dot2" sx={{ color: '#FFA500', marginRight: '6px' }}>
            &bull;
          </Box>
          OnProgress
          <Box component="span" className="span" sx={{ backgroundColor: 'aliceblue', borderRadius: '18px', height: '20px', width: '20px', padding: '4px', color: '#000000', marginLeft: '8px' }}>
            {tasks.length}
          </Box>
        </Typography>
        <Grid item xs={12}>
          <Divider sx={{ width: '100%', padding: '1px', backgroundColor: '#FFA500' }} />
          {tasks.map((task, index) => (
            <Grid item xs={12} key={index} sx={{ marginBottom: '16px',  margin:'12px' }}>
              <Box sx={{ color: '#D58D49', backgroundColor: '#DFA874', width: '30px', borderRadius: '6px', padding: '4px', display: 'inline-block' }}>
                {task.priority}
              </Box>
              <Typography variant="h6" sx={{ display: 'inline-block', marginLeft: '12px', color: '#ffffff' }}>
                {task.taskName}
              </Typography>
              <Typography variant="body1" sx={{ color: '#ffffff', marginTop: '4px' }}>
                {task.taskDescription}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}
