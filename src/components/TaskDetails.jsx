import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import "../assets/css/TaskDetails.css";

export default function TaskDetail() {
  const { taskId } = useParams();
  const [task, setTask] = useState(null);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [isSaving, setIsSaving] = useState(false);

  const fetchTask = useCallback(() => {
    // Simular API call
    setTimeout(() => {
      const fakeTask = {
        id: taskId,
        title: `Tarea ${taskId}`,
        description: "Descripción de ejemplo para la tarea",
        image: null,
      };
      setTask(fakeTask);
      setDescription(fakeTask.description);
    }, 500);
  }, [taskId]);

  useEffect(() => {
    fetchTask();
  }, [fetchTask]);

  const handleImageUpload = useCallback((e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      // Simular guardado en API
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Cambios guardados');
    } catch (error) {
      console.error('Error al guardar:', error);
    } finally {
      setIsSaving(false);
    }
  };

  if (!task) {
    return <div className="loading">Cargando...</div>;
  }

  return (
    <div className="task-detail-container">
      <div className="task-editor">
        <h1 className="task-title">{task.title}</h1>

        <div className="form-group">
          <label htmlFor="description">Descripción</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Agrega una descripción detallada..."
            className="description-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="image-upload" className="file-upload-label">
            <span>Subir imagen</span>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="file-input"
            />
          </label>
          {image && (
            <div className="image-preview-container">
              <img src={image} alt="Preview" className="image-preview" />
              <button 
                onClick={() => setImage(null)}
                className="remove-image-btn"
              >
                ×
              </button>
            </div>
          )}
        </div>

        <button 
          onClick={handleSave}
          className="save-button"
          disabled={isSaving}
        >
          {isSaving ? 'Guardando...' : 'Guardar cambios'}
        </button>
      </div>
    </div>
  );
}
