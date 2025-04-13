const testController = (req,res) => {
  res.status(200).send({
    message:'welcome to Blood Bank',
    success:true,
  })
}

module.exports= {testController}