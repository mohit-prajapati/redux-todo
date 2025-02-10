import { useDispatch, useSelector } from "react-redux";
import {List, ListItem, ListItemButton, ListItemIcon, ListItemText, Checkbox, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteTodo, marksAsDone } from "../features/todo/todoSlice";

export default function TodoList() {
    /** The useSelector hook allows you to extract data or the state from the redux store using a selector fuction. (return the data) */
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    // const handleOpenAddForm = (id) => {
    //     // Add your dispatch logic here to add the task
    //     dispatch(deleteTodo(id));
    // }

    console.log(todos);
    if (todos.length === 0) {
        return (
            <Typography 
                color="text.white" 
                sx={{ mt: 2 }}
            >
                No todos yet. Add some tasks!
            </Typography>
        )
    }
    
    return (
        <>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {todos && todos.map((todo) => {
                    return (
                        <ListItem
                            key={todo.id}
                            secondaryAction={
                                <IconButton edge="end" aria-label="delete" // onClick={() => handleOpenAddForm(todo.id)}
                                onClick={() => dispatch(deleteTodo(todo.id))}>
                                    <DeleteIcon />
                                </IconButton>
                            }
                            disablePadding
                        >
                            <ListItemButton>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={todo.isDone || false}
                                        tabIndex={todo.id}
                                        disableRipple
                                        inputProps={{ 'aria-labelledby': todo.id }}
                                        onChange={() => dispatch(marksAsDone(todo.id))}
                                    />
                                </ListItemIcon>
                                <ListItemText id={todo.id} primary={todo.task} sx={{ color: "black", fontSize: "2rem" }} />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </>
    )
}