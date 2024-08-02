import user from "../models/model.js";

export const Create = async (req, res) => {
  const { title, description, status } = req.body;
  const newuser = new user({ title, description, status });
  try {
    await newuser.save();
    res.status(201).json({ message: "Task created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating Task" });
  }
};
 

export const Get = async (req, res) => {
  const Alluser = await user.find();
  try {
    res.status(201).json(Alluser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "no Task Found" });
  }
};

export const Get_one = async (req, res) => {
  const Alluser = await user.findOne({title:"Library Management"});
  try {
    res.status(201).json(Alluser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "no Task Found" });
  }
};

export const Update = async (req, res) => {
  const Alluser = await user.updateOne({ title: "Bus Management" },{$set:{status:"unactive"}});
  try {
    res.status(201).json(Alluser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "no Task Found" });
  }
};


export const Delete = async (req, res) => {
  const Alluser = await user.deleteOne({title:"Hostel Management"});
  try {
    res.status(201).json(Alluser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "no Task Found" });
  }
};