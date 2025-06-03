import mongoose from "mongoose"

const connectMongoDb=async()=>{
try{
await mongoose.connect(process.env.URI_MONGODB);
console.log("Conectado con Mongo Db")
}catch(error){
console.log("Erro al conectar con MongoDb");
}

};

export default connectMongoDb;