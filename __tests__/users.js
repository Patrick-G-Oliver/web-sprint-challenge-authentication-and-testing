const supertest = require("supertest")
const server = require("../api/server")
// const db = require("../database/dbConfig")

describe("user integration tests", async () => {
    // it("registers a new user", async () => {
    //     const res = await supertest(server)
    //         .post("/register")
    //         .send({ username: "fulon", password: "burralon" })
    //     expect(res.statusCode).toBe(201)
    //     expect(res.type).toBe("application/json")
    //     expect(res.body.username).toBe("fulon")
    //     expect(res.body.id).toBeDefined()
    // })

    it("throws an error if username is already taken", async () => {
        const res = await supertest(server)
            .post("/register")
            .send({ username: "fulony", password: "burralony" })
        expect(res.statusCode).toBe(409)
    })

    it("throws an error if a user is not found", async () => {
        const res = await supertest(server)
            .post("/login")
            .send({ username: "fulanoto", password: "detallito" })
        expect(res.statusCode).toBe(401)
    })

    it("throws an error if a user's password is invalid", async () => {
        const res = await supertest(server)
            .post("/login")
            .send({ username: "fulanito", password: "detalloto" })
        expect(res.statusCode).toBe(401)
    })
    // const { username, password } = req.body
    // const user = await Users.findBy({ username }).first()

})