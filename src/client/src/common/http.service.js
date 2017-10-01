import axios from 'axios';

class HttpService {
    constructor(userId) {
        this.userId = userId;
    }
    baseUrl = 'http://react-pxl.westeurope.cloudapp.azure.com';

    selectData = t => (t.status >= 200 && t.status < 300) ? t.data : this.logError(t);
    logError = e => console.log(e);

    handle = t => t.then(this.selectData, this.logError);

    getDashboard() {
        return this.handle(axios.get(`${this.baseUrl}/users/${this.userId}`));
    }

    getWeight() {
        return this.handle(axios.get(`${this.baseUrl}/weightEntries?userId=${this.userId}`))
    }
}
const service = new HttpService(1);
export default service;
