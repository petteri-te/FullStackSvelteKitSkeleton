
 
 // Import the necessary PostgreSQL library - needed to do npm install postgres in svelte
import postgres from "postgres";

// Establish a connection to the PostgreSQL database
const sql = postgres('postgres://username:password@database:5432/database');


// Define the server actions
// for some reason teh todo: action is not working. Don't understand why
// but this default actions catches all
export const actions = {
    default: async ({ request }) => {
        try {
            // Parse form data from the request
            const form = await request.formData();

            // Extract the value of the "task" field from the form data
            const task = form.get("task") ?? "";
            console.log("Task:", task);

            // Insert the task into the "todos" table in the PostgreSQL database
            const result = await sql`INSERT INTO todos (todo) VALUES (${task})`;

            // Return a success response
            return {
                status: 200,
                body: { message: "Task added successfully" }
            };

        } catch (error) {
            // If an error occurs, return an error response
            console.error("Error adding task:", error);
            return {
                status: 500,
                body: { error: "Internal server error" }
            };
        }
    }
};

// Define an action to fetch todo tasks from the database
export async function load({ params }) {
    try {
        console.log("In load() function ");
        // Execute a SQL query to retrieve all todo tasks
        const todos = await sql`SELECT * FROM todos`;
        console.log("todos after sql command in load() : ", todos);

        // Return the fetched todos as props to be passed to the SvelteKit page component
        return {
            props: {
                todos,
            },
        };
    } catch (error) {
        console.error('Error fetching todos:', error);

        // Return an empty array in case of error
        return {
            props: {
                todos: [],
            },
        };
    }
}
