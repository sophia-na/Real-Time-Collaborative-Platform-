import Task from '../models/taskModel';  // Sequelize Task model

// Export each function individually
 export const getAllTasks = async () => {
    try {
      const tasks = await Task.findAll();  // Fetch all tasks from the database
      return tasks;  // Return the array of task objects
    } catch (error) {
      console.error('Error fetching tasks:', error);
      throw new Error('Could not retrieve tasks');
    }
  };
  
  export const createTask = async (taskData: { title: string; description: string }) => {
    // Logic to create a new task
    try{
      const newTask = await Task.create(taskData);  // This automatically interacts with the DB
      return newTask;
    } catch(error){
      console.error('Error create tasks:', error);
      throw new Error('Could not create tasks');
    }
    
  };
  
  export const updateTask = async (id: string, taskData: { title?: string; description?: string }) => {
    // Logic to update a task
      try{
        const updatedTask = await Task.update(taskData, { where: { id } });
        return updatedTask;
      }catch(error){
        console.error('Error update tasks:', error);
        throw new Error('Could not update tasks');
      }
       
  };
  
  export const deleteTask = async (id: string) => {
    // Logic to delete a task by ID
    try{
      const deleteTask=await Task.destroy({ where: { id } });
      return deleteTask;
    }catch(error){
      console.error('Error delete tasks:', error);
      throw new Error('Could not delete tasks');
    }
  };
  
