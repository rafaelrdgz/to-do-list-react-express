import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import { CircularProgress } from "@mui/material";


export default function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const [editing, setEditing] = useState(false);

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const params = useParams();

  const loadTask = async (id) => {
    await axios.get(`http://localhost:3000/tasks/${id}`).then((res) => {
      setTask(res.data);
      setEditing(true);
    });
  }

  useEffect(() => {
    if (params.id) {
      loadTask(params.id);
    }
  }, [params.id]);  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)

    if (editing) {
      await axios.put(`http://localhost:3000/tasks/${params.id}`, task)
      navigate("/");
      return;
    }

    await axios.post("http://localhost:3000/tasks", task)
    setLoading(false)
    navigate("/");
  };

  const handleChange = (e) =>{
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };  

  return (
    <div>
      <Grid
        container
        direction="column"
        alignContent="center"
        justifyContent="center"
      >
        <Grid item xs={3}>
          <Card
            sx={{ mt: 5 }}
            style={{ backgroundColor: "#1e272e", padding: "1rem" }}
          >
            <Typography variant="h5" color="white" textAlign="center">
              {editing ? "Edit" : "Create"} Task
            </Typography>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <TextField
                  value={task.title}
                  label="Write your title"
                  variant="filled"
                  name="title"
                  onChange={handleChange}
                  sx={{ display: "block", margin: ".5rem 0" }}
                  inputProps={{ style: { color: "white" } }}
                  InputLabelProps={{ style: { color: "white" } }}
                />
                <TextField
                  value={task.description}
                  label="Write your description"
                  variant="filled"
                  multiline
                  rows={4}
                  name="description"
                  onChange={handleChange}
                  sx={{ display: "block", margin: ".5rem 0" }}
                  inputProps={{ style: { color: "white" } }}
                  InputLabelProps={{ style: { color: "white" } }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  onClick={handleSubmit}
                  disabled={!task.title || !task.description}
                >
                  {loading ? (<CircularProgress color="inherit" size={24}/>) : "Save"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
