import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


export default function TaskList() {
  const [tasks, setTasks] = useState([]);
	const navigate = useNavigate();

  const loadTasks = async () => {
    await axios.get("http://localhost:3000/tasks").then((res) => {
      setTasks(res.data);
    });
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/tasks/${id}`).then((res) => {
      setTasks(tasks.filter((task) => task.id !== id));
    });
  };

  return (
    <div>
      <h1>Task List</h1>
      {tasks.map((task) => (
        <Card
          key={task.id}
          style={{ marginBottom: ".7rem", backgroundColor: "#1e272e" }}
        >
          <CardContent
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div style={{ color: "white" }}>
              <Typography>{task.title}</Typography>
              <Typography>{task.description}</Typography>
            </div>
            <div>
              <Button
                variant="contained"
                color="inherit"
                onClick={() => navigate(`/tasks/${task.id}/edit`)}
              >
                Edit
              </Button>
              <Button
                style={{ marginLeft: ".5rem" }}
                variant="contained"
                color="warning"
                onClick={() => handleDelete(task.id)}
              >
                Delete
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
