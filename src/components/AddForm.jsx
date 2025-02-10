import { useState } from 'react';
import { 
    Modal, 
    Box, 
    TextField, 
    Button, 
    Typography 
} from '@mui/material';
import { useDispatch } from 'react-redux'; /** The useDispatch hook allows you to send or dispatch an action to the redux store by giving the action as an argument to the dispatch variable */
import { addTodo } from '../features/todo/todoSlice';

const AddForm = ({ open, handleClose }) => {
    const [task, setTask] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validation
        if (!task.trim()) {
            setError('Task cannot be empty');
            return;
        }
        if (task.length < 3) {
            setError('Task must be at least 3 characters long');
            return;
        }

        // Add your dispatch logic here to add the task
        dispatch(addTodo(task));

        // Reset form
        setTask('');
        setError('');
        handleClose();
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="add-task-modal"
        >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
                borderRadius: 2,
            }}>
                <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
                    Add New Task
                </Typography>

                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Task"
                        variant="outlined"
                        value={task}
                        onChange={(e) => {
                            setTask(e.target.value);
                            setError('');
                        }}
                        error={!!error}
                        helperText={error}
                        autoFocus
                        sx={{ mb: 2 }}
                    />

                    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                        <Button 
                            variant="outlined" 
                            onClick={handleClose}
                        >
                            Cancel
                        </Button>
                        <Button 
                            variant="contained" 
                            type="submit"
                        >
                            Add Task
                        </Button>
                    </Box>
                </form>
            </Box>
        </Modal>
    );
};

export default AddForm;