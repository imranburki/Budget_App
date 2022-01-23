const express=require('express')

require('ejs')
const bodyParser=require('body-parser')
const { urlencoded } = require('body-parser')
const e = require('express')
const { render } = require('express/lib/response')

const app=express()

app.set('view engine','ejs')
app.use(bodyParser.json())
app.use(urlencoded({extended:true}))
var exp=[]
var budget=0
var totalexp=0
var balance=0
app.get('/',(req,res)=>{
    //const exp=[]
    
    res.render('index',{exp,budget,totalexp,balance})
})

app.post('/budget/add',(req,res)=>{
    //const exp=[]

    const budget1=Number(req.body.budget)
    budget+=budget1
    balance=budget-totalexp
    //var budget=budget+newbug
   

    res.render('index',{exp,budget,totalexp,balance})  
})

app.post('/expanse/add',(req,res)=>{
    //let exp=[]
    // const newexp=req.body.expanse
    // exp.push[newexp]
    exp=[...exp,{'title':req.body.expanse,'amount':req.body.amount}]
    
        totalexp+=Number(req.body.amount)
    
    console.log(exp)
    console.log(totalexp)
    balance=budget-totalexp
    res.render('index',{exp,budget,totalexp,balance})
})

app.get('/expanse/edit/:id',(req,res)=>{
    const id=req.params.id
    res.render('edit',{exp,id})
})

app.post('/expanse/saved/:id',(req,res)=>{
    const np=req.body.name
    const id=req.params.id
    const a=req.body.amount
    exp[id].title=np
    exp[id].amount=a
    exp=[...exp]
    console.log(exp)
    balance=budget-totalexp
    res.render('index',{exp,budget,totalexp,balance})
   // console.log(id)
})


app.get('/expanse/delete/:id',(req,res)=>{
    const id=req.params.id
    totalexp-=exp[id].amount
  //  console.log(id)
    exp.splice(id,1)
 //   console.log(exp)
 balance=budget-totalexp
    res.render('index',{exp,budget,totalexp,balance})
})
app.listen(3000,()=>{
    console.log('app is listening')
})