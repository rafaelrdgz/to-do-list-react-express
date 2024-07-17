import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, CardContent, Typography } from "@mui/material";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    axios.get("http://localhost:3000/tasks").then((res) => {
      setTasks(res.data);
    });
  };

  useEffect(() => {
    loadTasks();
  }, []);

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
            <div style={{color: 'white'}}>
              <Typography>{task.title}</Typography>
              <Typography>{task.description}</Typography>
            </div>
            <div>
              <Button
                variant="contained"
                color="inherit"
                onClick={() => console.log("Edit")}
              >
                Edit
              </Button>
              <Button
                style={{ marginLeft: ".5rem" }}
                variant="contained"
                color="warning"
                onClick={() => console.log("Delete")}
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
