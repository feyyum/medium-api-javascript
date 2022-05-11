import axios from "axios"
import errorHandler from "../utils/errorHandler.js"

class User {
    constructor(username) {
        this.username = username
    }
    getPosts() {
        return new Promise(async (resolve, reject) => {
            try {
                const url = `https://medium.com/feed/@${this.username}`
                await axios.get(`https://api.rss2json.com/v1/api.json?rss_url=${url}`).then(user => resolve(user.data))
            } catch (err) {
                reject(errorHandler(err))
            }
        });
    }
}

export default User