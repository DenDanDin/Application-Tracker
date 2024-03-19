const getAllApplications = async (req, res) => {
  res.status(200).json("Get All Applications");
};

module.exports = {
  getAllApplications,
};
