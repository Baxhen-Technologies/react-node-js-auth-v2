// const request = require('supertest')

// const app = require('../app')

// const todos = []

it('initial', () => {})

// it('add a todo, return 200 status and the added todo', async () => {
//   const todo = {
//     text: 'Todo #1',
//     id: 'id01',
//   };

//   todos.push(todo);

//   const response = await request(app).post('/add/todo').send({ todo });

//   expect(response.status).toBe(200);
//   expect(response.body).toEqual(todo);
// });
// it('fetch all todos and return status 200', async () => {
//   const todo = {
//     text: 'Todo #2',
//     id: 'id02',
//   };

//   await request(app).post('/add/todo').send({ todo });

//   todos.push(todo);

//   const response = await request(app).get('/fetch/todos');

//   expect(response.status).toBe(200);
//   expect(response.body).toEqual(todos);
// });
// it('delete a todo and return status 204', async () => {
//   const id = 'id02';

//   const response = await request(app).delete(`/delete/todo/${id}`);
//   todos = todos.filter((todo) => {
//     return todo.id !== id;
//   });

//   expect(response.status).toBe(204);

//   const todosState = await (await request(app).get('/fetch/todos')).body;

//   expect(todosState).toEqual(todos);
// });
