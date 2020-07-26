import 'babel-polyfill';
import express from 'express';
import renderer from "./helpers/renderer"
import createStore from "./helpers/createStore";
import { matchRoutes } from 'react-router-config';
import  Route from './client/components/Routes';
const app = express();


app.use(express.static('public'));
app.get('*',(req,res)=>{
   const store = createStore();
  let promises = matchRoutes(Route,req.path).map(({route}) => {
                     return route.loadData && route.loadData(store);
                  });
   Promise.all(promises).then(()=>{
      console.log(store.getState());
      res.send(renderer(req,store));
   })
});

app.listen(3000, ()=> console.log("listening on port 3000"))