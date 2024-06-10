import React, { useState } from "react";

interface TextInputProps {
  addTodo: (description: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ addTodo }) => {
  const [description, setDescription] = useState<string>("");

  const handleAdd = () => {
    if (description.trim()) {
      addTodo(description);
      setDescription("");
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleAdd();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  return (
    <div className="flex mb-4">
      <input
        type="text"
        className="w-full px-4 py-2 mr-2 border rounded-lg border-gray-300 focus:outline-none focus:border-blue-500"
        value={description}
        placeholder="Add a new task"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button
        className="bg-blue-600 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded"
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
};

export default TextInput;
