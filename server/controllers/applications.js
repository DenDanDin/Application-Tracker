const Application = require("../models/Application");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const getAllApplications = async (req, res) => {
  const applications = await Application.find({
    createdBy: req.user.userId,
  }).sort("createdAt");
  res.status(StatusCodes.OK).json({ applications, count: applications.length });
};

const getApplication = async (req, res) => {
  const {
    user: { userId },
    params: { id: applicationId },
  } = req;

  const application = await Application.findOne({
    _id: applicationId,
    createdBy: userId,
  });

  if (!application) {
    throw new NotFoundError(`No application with id ${applicationId}`);
  }
  res.status(StatusCodes.OK).json({ application });
};

const createApplication = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const application = await Application.create(req.body);
  res.status(StatusCodes.CREATED).json({ application });
};

const updateApplication = async (req, res) => {
  const {
    body: { title, company, jobId, status },
    user: { userId },
    params: { id: applicationId },
  } = req;

  if (title === "" || company === "" || jobId === "" || status === "") {
    throw new BadRequestError(
      "Title, Company, JobId, Status fields cannot be empty"
    );
  }

  const application = await Application.findByIdAndUpdate(
    { _id: applicationId, createdBy: userId },
    req.body,
    { new: true, runValidators: true }
  );
  if (!application) {
    throw new NotFoundError(`No application with id ${applicationId}`);
  }

  res.status(StatusCodes.OK).json({ application });
};

const deleteApplication = async (req, res) => {
  const {
    user: { userId },
    params: { id: applicationId },
  } = req;

  const application = await Application.findByIdAndDelete({
    _id: applicationId,
    createdBy: userId,
  });

  if (!application) {
    throw new NotFoundError(`No job with id ${applicationId}`);
  }

  res.status(StatusCodes.OK).send();
};

module.exports = {
  createApplication,
  getAllApplications,
  getApplication,
  updateApplication,
  deleteApplication,
};
