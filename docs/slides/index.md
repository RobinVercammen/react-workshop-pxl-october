# Crafting a mobile web application
using **React** and **Redux**  
[https://tinyurl.com/y94vzav8](https://tinyurl.com/y94vzav8)  
[www.involved-it.be](https://www.involved-it.be)



# <i class="fa fa-calendar fa-3x"></i>
[The prototype](http://704igz.axshare.com/#g=1&p=your_dashboard)  
[Architecture && Attempt read-only]



# <i class="fa fa-briefcase fa-3x"></i>


## create-react-app
[create-react-app](https://github.com/facebookincubator/create-react-app)  


## material-ui
[material-ui](http://www.material-ui.com/#/)  
```bash
npm i -S material-ui
```
```html
<MuiThemeProvider>
    <Layout></Layout>
</MuiThemeProvider>
```


## <i class="fa fa-bars fa-3x"></i>
```html
<div>
    <AppBar
        title="Dashboard"
        onLeftIconButtonTouchTap={this.toggleDrawer}
        iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
    <Drawer open={this.state.open}>
        <MenuItem onClick={this.close}>Dashboard</MenuItem>
        <MenuItem onClick={this.close}>Weight</MenuItem>
        <MenuItem onClick={this.close}>Calories</MenuItem>
        <MenuItem onClick={this.close}>Habits</MenuItem>
        <MenuItem onClick={this.close}>Settings</MenuItem>
    </Drawer>
</div>
```


## <i class="fa fa-code-fork fa-3x"></i>
```html
<Router>
    <div>
        <AppBar
            title="Dashboard"
            onLeftIconButtonTouchTap={this.toggleDrawer}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <Drawer open={this.state.open}>
            <MenuItem onClick={this.close}><Link to="/">Dashboard</Link></MenuItem>
            <MenuItem onClick={this.close}><Link to="/weight">Weight</Link></MenuItem>
            <MenuItem onClick={this.close}><Link to="/calories">Calories</Link></MenuItem>
            <MenuItem onClick={this.close}><Link to="/habits">Habits</Link></MenuItem>
            <MenuItem onClick={this.close}><Link to="/settings">Settings</Link></MenuItem>
        </Drawer>
        <div className="content">
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/weight" component={Weight} />
            <Route exact path="/calories" component={Calories} />
            <Route exact path="/habits" component={Habits} />
            <Route exact path="/settings" component={Settings} />
        </div>
    </div>
</Router >
```


## <i class="material-icons mi-x3">http</i>
[http://react-pxl.westeurope.cloudapp.azure.com/](http://react-pxl.westeurope.cloudapp.azure.com/)  
```javascript
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
```


## { Redux }
```javascript
import { createStore } from 'redux';

function rootReducer(state = { title: 'Dashboard' }, action) {
    switch (action.type) {
        case 'SET_TITLE':
            const s = { ...state, title: action.payload }
            return s;
        default:
            return state;
    }
}

const store = createStore(rootReducer);
export default store;
```
