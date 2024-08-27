import React, { useState } from 'react';
import { 
  Container, Grid, Box, IconButton, Typography, Button, Dialog, DialogContent, TextareaAutosize, 
  MenuItem, Select, InputLabel, FormControl, TextField 
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers';
import CoffeeMakerOutlinedIcon from '@mui/icons-material/CoffeeMakerOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import DonePage from './Done';
import OnProgress from "./OnProgress";
import Todo from "./Todo";

export default function SideBar() {
  const [dialogBox, setDialogBox] = useState(false);
  const [deadline, setDeadline] = useState(null);
  const [priority, setPriority] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [handleAssignedTo, setHandleAssignedTo] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [handleTask, setHandleTask] = useState(false);
  const [taskStatus, setTaskStatus] = useState('');
  const [dataList, setDataList] = useState([]);

  const handleDialogOpen = () => setDialogBox(true);
  const handleDialogClose = () => {
    setDialogBox(false);
    setShowDatePicker(false);
    setHandleAssignedTo(false);
    setHandleTask(false);
  };

  const handleDeadlineClick = () => setShowDatePicker(true);
  const handleAssignedToClick = () => setHandleAssignedTo(true);
  const handleTaskControl = () => setHandleTask(true);

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };

  const handleStatusChange = (event) => {
    setTaskStatus(event.target.value);
  };

  const handleSaveTask = () => {
    const newTask = {
      taskName,
      taskDescription,
      deadline,
      priority,
      taskStatus,
    };
    setDataList([...dataList, newTask]);
    handleDialogClose();
    setTaskName('');
    setTaskDescription('');
    setDeadline(null);
    setPriority('');
    setTaskStatus('');
  };

  console.log(dataList);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Container>
        <Box className="side-container" sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#2e2f2f', padding: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Box sx={{ backgroundColor: '#292929', padding: 2, borderRadius: 2, boxShadow: '2px 4px #1c1d1d', textAlign: 'center' }}>
                <IconButton sx={{ backgroundColor: '#f42d20', borderRadius: 2, height: 70, width: 70, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <CoffeeMakerOutlinedIcon sx={{ color: '#ffffff' }} />
                </IconButton>
                <Typography variant="h4" sx={{ color: 'aliceblue', fontFamily: 'Poppins', fontSize: '18px', marginTop: 1 }}>
                  Expired Tasks
                </Typography>
                <Typography variant="h1" sx={{ color: 'aliceblue', fontFamily: 'Poppins', fontSize: '28px' }}>
                  0
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ backgroundColor: '#292929', padding: 2, borderRadius: 2, boxShadow: '2px 4px #1c1d1d', textAlign: 'center' }}>
                <IconButton sx={{ backgroundColor: '#e89271', borderRadius: 2, height: 70, width: 70, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <AccessTimeIcon sx={{ color: '#ffffff' }} />
                </IconButton>
                <Typography variant="h4" sx={{ color: 'aliceblue', fontFamily: 'Poppins', fontSize: '18px', marginTop: 1 }}>
                  All Active Tasks
                </Typography>
                <Typography variant="h1" sx={{ color: 'aliceblue', fontFamily: 'Poppins', fontSize: '28px' }}>
                  0
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ backgroundColor: '#292929', padding: 2, borderRadius: 2, boxShadow: '2px 4px #1c1d1d', textAlign: 'center' }}>
                <IconButton sx={{ backgroundColor: '#70a1e5', borderRadius: 2, height: 70, width: 70, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ShoppingCartIcon sx={{ color: '#ffffff' }} />
                </IconButton>
                <Typography variant="h4" sx={{ color: 'aliceblue', fontFamily: 'Poppins', fontSize: '18px', marginTop: 1 }}>
                  Completed Tasks
                </Typography>
                <Typography variant="h1" sx={{ color: 'aliceblue', fontFamily: 'Poppins', fontSize: '28px' }}>
                  0
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Button
            variant="contained"
            color="primary"
           
            onClick={handleDialogOpen}
            sx={{ marginTop: 3, backgroundColor: '#8976e4', color: '#ffffff', width: '250px', margin: '30px auto', display: 'flex' }}
          >
           + Add Task
          </Button>

          <Dialog open={dialogBox} onClose={handleDialogClose} maxWidth="xs" fullWidth sx={{ borderRadius: '12px' }}>
            <DialogContent sx={{ backgroundColor: '#3e3e3e', padding: 3 }}>
              <Typography variant="h5">
                <TextField
                  id="outlined-basic"
                  label="ADD TASK"
                  variant="outlined"
                  value={taskName}
                  onChange={(e) => setTaskName(e.target.value)}
                  sx={{ color: '#000000', background: '#ffffff', borderRadius: '12px' }}
                  fullWidth
                />
              </Typography>

              <TextareaAutosize
                minRows={10}
                placeholder="Enter Your Task"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                style={{ width: '100%', marginTop: 16, padding: 10, borderRadius: '8px', borderColor: '#8BC48A', outline: 'none' }}
              />

              <Button onClick={handleDeadlineClick} sx={{ color: '#ffffff', marginTop: 2 }}>
                Set Deadline
              </Button>

              {showDatePicker && (
                <Box sx={{ marginTop: 2 }}>
                  <DatePicker
                    label="Deadline"
                    value={deadline}
                    onChange={(newDate) => setDeadline(newDate)}
                    renderInput={(params) => <TextField {...params} fullWidth sx={{ backgroundColor: '#8976E4', borderRadius: 1 }} />}
                  />
                </Box>
              )}

              <Button onClick={handleAssignedToClick} sx={{ color: '#ffffff', marginTop: 2 }}>
                Assign To
              </Button>

              {handleAssignedTo && (
                <Box sx={{ marginTop: 2 }}>
                  <FormControl fullWidth>
                    <InputLabel sx={{ color: '#ffffff' }}>Assigned To</InputLabel>
                    <Select
                      value={priority}
                      onChange={handlePriorityChange}
                      label="Assigned To"
                      sx={{ backgroundColor: '#2e2f2f', color: '#ffffff', borderRadius: 1 }}
                    >
                      <MenuItem value="High">High</MenuItem>
                      <MenuItem value="Medium">Medium</MenuItem>
                      <MenuItem value="Low">Low</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              )}

              <Button onClick={handleTaskControl} sx={{ color: '#ffffff', marginTop: 2 }}>
                Add Task Control
              </Button>

              {handleTask && (
                <Box sx={{ marginTop: 2 }}>
                  <FormControl fullWidth>
                    <InputLabel sx={{ color: '#ffffff' }}>Task Status</InputLabel>
                    <Select
                      value={taskStatus}
                      onChange={handleStatusChange}
                      label="Task Status"
                      sx={{ backgroundColor: '#2e2f2f', color: '#ffffff', borderRadius: 1 }}
                    >
                      <MenuItem value="To Do">To Do</MenuItem>
                      <MenuItem value="In Progress">In Progress</MenuItem>
                      <MenuItem value="Completed">Completed</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              )}

              <Button
                variant="contained"
                onClick={handleSaveTask}
                sx={{ marginTop: 2, backgroundColor: '#8BC48A', color: '#ffffff' }}
              >
                Save Task
              </Button>
            </DialogContent>
          </Dialog>
          <Box sx = {{ display:'flex', flexDirection: 'row'}}>

          <Todo tasks={dataList.filter(task => task.taskStatus === 'Pending')} />
              <OnProgress tasks={dataList.filter(task => task.taskStatus === 'In Progress')} />
              <DonePage tasks={dataList.filter(task => task.taskStatus === 'Completed')} />
          </Box>
        </Box>
      </Container>
    </LocalizationProvider>
  );
}
