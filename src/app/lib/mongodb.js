import mongoose from "mongoose";
export const connectMongo = async () => {
      try {
            await mongoose.connect(process.env.MONGODB_URI);
            console.log("Connected to MongoDB Successfully");
          } catch (error) {
                console.log("Error connected to MongoDB:", error);
        }
};

connectMongo()




// export const GET = async (request) => { 
//   try {
//     await connectToDataBase();    
//     //return logic here    
//   } catch (error) {
//     //return logic here
//   }
// };



// export const client = new MongoClient(process.env.MONGODB_URI);
// export const connectMongo = async () => {
  
//   if (client) {
//     try {
//       await client.connect();
//       console.log("Connected to MongoDB Successfully");
//     } catch (error) {
//       console.log("Error connected to MongoDB:", error);
//       console.log('arsalan', err.stack);
//       await client.close();
//       process.exit(1)
//     }
//   }
//   else {
//     console.log("not connectring to mongodb");

//   }

  
// }



