const http = require('http')

const server = http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers)
    res.setHeader('content-type','text/html')
    res.write('<html><p>Welcome to node server</p></html>')
    res.end

    let url = req.url
    if(url === '/home'){
        res.write('Welcome to node home')
        res.end
    }else if(url === '/about'){
        res.write('Welcome to about page')
        res.end
    }else{
        res.write('Welcome to my node project')
        res.end
    }

})

server.listen(3000)