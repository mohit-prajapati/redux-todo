import { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import AddForm from './AddForm';

export default function AddTodo() {
    const [openAddForm, setOpenAddForm] = useState(false); // Add this state

    const handleOpenAddForm = () => setOpenAddForm(true);
    const handleCloseAddForm = () => setOpenAddForm(false);

    return (
        <>
            {/* Update the Button to open the form */}
            <Button 
                variant="contained" 
                startIcon={<AddIcon />}
                onClick={handleOpenAddForm}
                sx={{ 
                    mb: 2,
                    backgroundColor: '#1976d2',
                    '&:hover': {
                        backgroundColor: '#1565c0'
                    }
                }}
            >
                Add Task
            </Button>

            {/* Add the form component */}
            <AddForm 
                open={openAddForm} 
                handleClose={handleCloseAddForm} 
            />
        </>
    );
}