import Movie from "../models/Movie.js";


//create new movie
export const createMovie = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const newMovie = await Movie.create(req.body);
      res.status(200).json(newMovie);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed");
  }
};

//update movie
export const updateMovie = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const updatedMovie = await Movie.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedMovie);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed");
  }
};

// delete movie
export const deleteMovie = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await Movie.findByIdAndDelete(req.params.id);
      res.status(200).json("Movie has been deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed");
  }
};

// get a single movie
export const getSingleMovie = async (req, res) => {
  try {
    const getMovie = await Movie.findById(req.params.id);
    res.status(200).json(getMovie);
  } catch (err) {
    res.status(500).json(err);
  }
};

// get Random movie
export const getRandomMovie = async (req, res) => {
  const type = req.query.type;
  let movie;
  try {
    if (type === "series") {
      movie = await Movie.aggregate([ 
        { $match: { isSeries: true } },
        { $sample: { size: 1 } },
      ]);
    } else {
      movie = await Movie.aggregate([
        { $match: { isSeries: false } },
        { $sample: { size: 1 } },
      ]);
    }
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json(err);
  }
};

// get all movie
export const getAllMovie = async (req, res) => {
  const query = req.query.new;
  if (req.user.isAdmin) {
    try {
      const movies = query
        ? await Movie.find().sort({ _id: -1 }).limit(2)
        : await Movie.find();
      res.status(200).json(movies.reverse());
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed");
  }
};
