import List from "../models/List.js";


//create list
export const createList = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const newList = await List.create(req.body);
      res.status(200).json(newList);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed");
  }
};

//delete
export const deleteList = async (req, res) => {
  if (req.user.isAdmin) {
    try {
       await List.findByIdAndDelete(req.params.id);
      res.status(200).json("Lists has been deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed");
  }
};

//get
export const getList = async (req, res) => {
  const typeQuery = req.query.type;
  const genreQuery = req.query.genre;
  let list = []
    try {
       if(typeQuery) {
        if(genreQuery) {
          list = await List.aggregate([
            { $match: { type: typeQuery, genre: genreQuery } },
            { $sample: { size: 10 } }
          ])
        } else {
          list = await List.aggregate([
            { $match: { type: typeQuery } },
            { $sample: { size: 10 } }
          ])
        }
       } else {
        list = await List.aggregate([
          { $sample: { size: 10 } }
        ])
       }
       res.status(200).json(list)
    } catch (err) {
      res.status(500).json(err);
    }
 
};