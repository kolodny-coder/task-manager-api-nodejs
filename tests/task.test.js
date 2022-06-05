const requset = require('supertest')
const Task = require('../src/models/task')
const app = require("../src/app");
const { userOne, userOneId, taskOneId, setupDatabase, userTwo} = require('./fixtures/db')

beforeEach(setupDatabase);  

test('Should create task for user', async () => {
    const response = await requset(app)
        .post('/tasks')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            description: 'From my test'
        })
        .expect(201)
    const task = await Task.findById(response.body._id)
    expect(task).not.toBeNull()
    expect(task.completed).toEqual(false)
});

test('Should get only user one task', async () => {
    const response = await requset(app)
        .get('/tasks')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)
    expect(response.body.length).toEqual(2)

})

test('Should not sucseed deleting a task that not own by the user', async () => {
    const response = await requset(app)
        .delete(`/tasks/${taskOneId}`)
        .set('Authorization', `Baerer ${userTwo.tokens[0].token}`)
        .send()
        .expect(401)
    const task = Task.findById(taskOneId)
    expect(task).not.toBeNull()
})

