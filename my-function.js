//Lambda Function
exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Sanika!'),
    };
    return response;
};

// Endpoint

app.get(('/say'),cache(120), async (req,res) => {
    let conn;
    try{
            axios.get('https://gzoyyxfsi1.execute-api.us-east-1.amazonaws.com/Test1/events')
            .then ((response) => {
                console.log(response);
                res.status(200);
                res.setHeader('Content-Type', 'application/json');
                res.send("Sanika says " + req.query.keyword);
            })
            .catch((error) => {
                console.log(error + " from axios");
            });

    }catch (err){
           console.log(err);
            throw err;
    } finally {
            if (conn) return conn.end();
    }
})


