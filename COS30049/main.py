@app.get("/")
async def funcTest1():
return "Hello, this is fastAPI data"
@app.get("/getAboutData")
async def funcTest2():
return "Hello, this is about us data"
@app.get("/getHomeData")
async def funcTest3():
return "Hello, this is home data"