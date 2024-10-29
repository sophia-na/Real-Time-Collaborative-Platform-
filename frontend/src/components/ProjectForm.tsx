// src/components/ProjectForm.tsx

import React, { useState } from 'react';
import './ProjectForm.css';

interface ProjectFormProps {
  onSubmit: (project: { name: string; description: string; participants?: string[] }) => void;
  onCancel: () => void;
}

const ProjectForm: React.FC<ProjectFormProps> = ({ onSubmit, onCancel }) => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [participants, setParticipants] = useState<string[]>(['']);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, description, participants: participants.filter((p) => p) });
  };

  const handleParticipantChange = (index: number, value: string) => {
    const updatedParticipants = [...participants];
    updatedParticipants[index] = value;
    setParticipants(updatedParticipants);
  };

  const handleAddParticipant = () => {
    setParticipants([...participants, '']);
  };

  return (
    <div className="project-form-container">
      <h2>Create Project</h2>
      <form onSubmit={handleSubmit}>
        <label>Project Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <label>Participants (Optional):</label>
        {participants.map((participant, index) => (
          <input
            key={index}
            type="email"
            placeholder="Enter participant email"
            value={participant}
            onChange={(e) => handleParticipantChange(index, e.target.value)}
          />
        ))}
        <button type="button" className="add-participant-btn" onClick={handleAddParticipant}>
          Add Another Participant
        </button>
        <button type="submit" className="submit-btn">Create Project</button>
        <button type="button" className="cancel-btn" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default ProjectForm;
