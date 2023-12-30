import asyncHandler from 'express-async-handler';
import Resume from '../models/resume.js';

/* 
    @desc: Get experiences for resume
    @route: GET /api/resume/:resumeId/experience
    @access: public
*/
const getExperiences = asyncHandler(async (req, res) => {
  const resume = await Resume.findById(req.params.resumeId);
  const experiences = resume.experience;
  if (experiences) {
    res.status(200).json(experiences);
  } else {
    res.status(404);
    throw new Error('No experiences found');
  }
});

/* 
    @desc: Create Experience
    @route: POST /api/resume/:resumeId/experience
    @access: private
*/
const createExperience = asyncHandler(async (req, res) => {
  const resume = await Resume.findById(req.params.resumeId);
  try {
    let experiences = resume.experience;
    experiences.push({
      position: req.body.position,
      company: {
        name: req.body.companyname,
        location: {
          address: req.body.address,
          city: req.body.city,
          state: req.body.state,
          postcode: req.body.postcode,
        },
        phone: req.body.phone,
      },
      description: req.body.description,
      startDate: new Date(req.body.startdate),
      endDate: new Date(req.body.enddate),
      skills: req.body.skills ? req.body.skills : [],
      hightlighted: req.body.highlighted === 'true' ? true : false,
    });
    resume.experience = experiences;
    await resume.save();
    res.status(200).json({ message: 'Experience created' });
  } catch (error) {
    res.status(400);
    throw new Error('Invalid resume data');
  }
});

/* 
    @desc: Get Experience by ID
    @route: PUT /api/resume/:resumeId/experience/:experienceId
    @access: private
*/
const getExperience = asyncHandler(async (req, res) => {
  const resume = await Resume.findById(req.params.resumeId);
  const experiences = resume.experience;
  const experience = experiences.filter(
    (exp) => exp._id.valueOf() === req.params.experienceId
  );
  if (experience) {
    res.status(200).json(experience);
  } else {
    res.status(404);
    throw new Error(`Experience ${req.params.experienceId} not found`);
  }
});

/* 
    @desc: Update Experience
    @route: PUT /api/resume/:resumeId/experience/:experienceId
    @access: private
*/
const updateExperience = asyncHandler(async (req, res) => {
  const resume = await Resume.findById(req.params.resumeId);
  const experiences = resume.experience;
  const [experience] = experiences.filter(
    (exp) => exp._id.valueOf() === req.params.experienceId
  );

  if (experience) {
    experience.position = req.body.position || experience.position;
    experience.company.name = req.body.companyname || experience.company.name;
    experience.company.location.address =
      req.body.address || experience.company.location.address;
    experience.company.location.city =
      req.body.city || experience.company.location.city;
    experience.company.location.state =
      req.body.state || experience.company.location.state;
    experience.company.location.postcode =
      req.body.postcode || experience.company.location.postcode;
    experience.company.phone = req.body.phone || experience.company.phone;
    experience.description = req.body.description || experience.description;
    experience.startDate = req.body.startDate || experience.startDate;
    experience.endDate = req.body.endDate || experience.endDate;
    experience.highlighted =
      req.body.highlighted === 'true' ? true : false || experience.highlighted;
    experience.skills = req.body.skills || experience.skills;
    const updatedResume = await resume.save();
    const updatedExperiences = updatedResume.experience;
    const [updatedExperience] = updatedExperiences.filter(
      (exp) => exp._id.valueOf() === req.params.experienceId
    );
    res.status(200).json({
      _id: updatedExperience._id,
      position: updatedExperience.position,
      company: {
        name: updatedExperience.company.name,
        location: {
          address: updatedExperience.company.location.address,
          city: updatedExperience.company.location.city,
          state: updatedExperience.company.location.state,
          postcode: updatedExperience.company.location.postcode,
        },
        phone: updatedExperience.company.phone,
      },
      description: updatedExperience.description,
      startDate: updatedExperience.startDate,
      endDate: updatedExperience.endDate,
      skills: updatedExperience.skills,
      hightlighted: updatedExperience.highlighted,
    });
  } else {
    res.status(404);
    throw new Error('Experience not found');
  }
});

/* 
    @desc: Delete Experience
    @route: DELETE /api/resume/:resumeId/experience/:experienceId
    @access: private
*/

const deleteExperience = asyncHandler(async (req, res) => {
  const resume = await Resume.findById(req.params.resumeId);
  const experiences = resume.experience;
  experiences.pull(req.params.experienceId);
  const updatedExperience = await resume.save();
  if (updatedExperience) {
    res
      .status(200)
      .json({ message: 'Experience deleted', _id: req.params.experienceId });
  } else {
    res.status(400);
    throw new Error('Could not delete experience');
  }
});

export {
  getExperiences,
  createExperience,
  getExperience,
  updateExperience,
  deleteExperience,
};
