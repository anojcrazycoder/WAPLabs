const express=require('express');
const path=require('path');
const productRouter=require('./routers/product');
const userRouter=require('./routers/user');
const dashboardRouter=require('./routers/dashboard');

const app=express();

app.use(express.static(path.join(__dirname,'resources','css')));
app.use('/',dashboardRouter);
app.use('/dashboard',dashboardRouter);
app.use('/products',productRouter);
app.use('/users',userRouter);
app.use((req,resp,next)=>{
    resp.sendFile((path.join(__dirname,'views','404.html')));
});

app.use((err, req, res, next)=> {
    res.status(500).sendFile((path.join(__dirname,'views','500.html')))
    });

const port=process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});
