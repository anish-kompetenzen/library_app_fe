import axios from "axios";

const baseUrl = "http://localhost:8080/library/";

class Service {
    registerUser(model) {
        return axios.post(baseUrl + "user", model);
    }

    loginUser(model) {
        return axios.get(baseUrl + "login?email=" + model.email + "&password=" + model.password);
    }

    addBook(model) {
        return axios.post(baseUrl + "book", model);
    }
}

export default new Service();