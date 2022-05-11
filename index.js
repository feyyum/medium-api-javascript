import User from "./api/medium.js"

const Feyyaz = new User("feyyazcavla")
Feyyaz.getPosts().then((res) => console.log(res)).catch(err => console.log(err.message))