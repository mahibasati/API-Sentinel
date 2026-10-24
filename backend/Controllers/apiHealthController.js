

const healthTest=async(req,res)=>{
        try{
            const {api}=req.body;
            const result=await fetch(api);
            console.log(result);
            const ans=await result.json();

            console.log(result);
            res.send(ans);

        }catch(err){
            console.log("error in health test controller",err);
        }

}

module.exports={healthTest};
