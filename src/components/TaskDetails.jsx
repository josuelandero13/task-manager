import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function TaskDetail () {
  const { taskId } = useParams();
  const [task, setTask] = useState(null);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fakeTask = {
      id: taskId,
      title: `Tarea ${taskId}`,
      description: "",
      image: null,
    };
    setTask(fakeTask);
    setDescription(fakeTask.description);
  }, [taskId]);

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    // guardar los cambios en la tarea (descripción e imagen)
  };

  if (!task) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="task-detail">
      <h2>{task.title}</h2>
      <textarea
        value={description}
        onChange={handleDescriptionChange}
        placeholder="Agrega una descripción..."
      />
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {image && <img src={image} alt="Task" className="task-image" />}
      <button onClick={handleSave}>Guardar</button>
    </div>
  );
};
