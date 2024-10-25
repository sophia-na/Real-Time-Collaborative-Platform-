import { Client } from "@elastic/elasticsearch";

// Create a new Elasticsearch client instance
const client = new Client({
  node: process.env.ELASTICSEARCH_URL || "http://localhost:9200", // URL of the Elasticsearch cluster
});

export const initializeElasticSearch = async () => {
  try {
    // Check if the index already exists (returns true if it exists, false otherwise)
    const indexExists = await client.indices.exists({ index: "tasks" });

    if (!indexExists) {
      // Create an index for tasks if it doesn't exist
      await client.indices.create({
        index: "tasks",
        body: {
          mappings: {
            properties: {
              title: { type: "text" },
              description: { type: "text" },
              completed: { type: "boolean" },
              createdAt: { type: "date" },
              updatedAt: { type: "date" },
            },
          },
        },
      });
      console.log('Elasticsearch index "tasks" created successfully.');
    } else {
      console.log('Elasticsearch index "tasks" already exists.');
    }
  } catch (error) {
    console.error("Error initializing Elasticsearch:", error);
  }
};

// Index a task in Elasticsearch
export const indexTaskInElasticSearch = async (task: any) => {
  try {
    await client.index({
      index: "tasks",
      id: task.id.toString(),
      body: {
        title: task.title,
        description: task.description,
        completed: task.completed,
        createdAt: task.createdAt,
        updatedAt: task.updatedAt,
      },
    });
    console.log(`Task with ID ${task.id} indexed in Elasticsearch`);
  } catch (error) {
    console.error("Error indexing task in Elasticsearch:", error);
  }
};

// Search for tasks in Elasticsearch
export const searchTasks = async (query: string) => {
  try {
    const result = await client.search({
      index: "tasks",
      body: {
        query: {
          multi_match: {
            query,
            fields: ["title", "description"],
          },
        },
      },
    });

    // Access the hits directly from the result
    return result.hits.hits.map((hit: any) => hit._source);
  } catch (error) {
    console.error("Error searching tasks in Elasticsearch:", error);
    throw new Error("Search failed");
  }
};

// Expose Elasticsearch client for use in services
export const esClient = client;
