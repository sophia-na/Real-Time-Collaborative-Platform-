// import { DataTypes, Model } from 'sequelize';
// // import sequelize from '../config/database'; // Import your Sequelize instance
// import sequelize from "../services/database";


// // Define the Project model
// class Project extends Model {
//     public id!: number; // Project ID
//     public name!: string; // Project name
//     public description?: string; // Project description (optional)
//     public participants!: string[]; // List of participants
// }

// // Initialize the Project model
// Project.init(
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             autoIncrement: true,
//             primaryKey: true,
//         },
//         name: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         description: {
//             type: DataTypes.TEXT,
//         },
//         participants: {
//             type: DataTypes.ARRAY(DataTypes.STRING), // Postgres-specific array of strings
//             allowNull: false,
//             defaultValue: [],
//         },
//     },
//     {
//         sequelize, // Pass the Sequelize instance
//         tableName: 'projects', // Table name in the database
//         timestamps: true, // Enables createdAt and updatedAt fields
//     }
// );

// export default Project;
