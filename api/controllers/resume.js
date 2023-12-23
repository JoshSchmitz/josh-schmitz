import asyncHandler from 'express-async-handler';
import Resume from '../models/resume.js';

/* 
    @desc: Get Resumes
    @route: GET /api/resume
    @access: public
*/
const getResumes = asyncHandler(async (req, res) => {
  const resumes = await Resume.find({});
  if (resumes) {
    res.status(200).json(
      resumes.map((resume) => {
        return {
          _id: resume._id,
          title: resume.title,
          bio: resume.bio,
          main: resume.main,
        };
      })
    );
  } else {
    res.status(404);
    throw new Error('Resumes not found');
  }
});

/* 
    @desc: Create Resume
    @route: POST /api/resume
    @access: private
*/
const createResume = asyncHandler(async (req, res) => {
  const { user, title, bio, main } = req.body;
  const resume = await Resume.create({ user, title, bio, main });
  if (resume) {
    res.status(200).json({
      note: 'Resume created',
      _id: resume._id,
      title: resume.title,
      bio: resume.bio,
      createdAt: resume.createdAt,
    });
  } else {
    res.status(400);
    throw new Error('Invalid resume data');
  }
});

/* 
    @desc: Get Resume
    @route: GET /api/resume/:id
    @access: public
*/
const getResume = asyncHandler(async (req, res) => {
  const resume = await Resume.findById(req.params.id);
  if (resume) {
    res.status(200).json({
      _id: resume._id,
      title: resume.title,
      bio: resume.bio,
      main: resume.main,
    });
  } else {
    res.status(404);
    throw new Error('Resume not found');
  }
});

/* 
    @desc: Update Resume
    @route: PUT /api/resume/:id
    @access: private
*/
const updateResume = asyncHandler(async (req, res) => {
  const resume = await Resume.findById(req.params.id);
  if (resume) {
    resume.title = req.body.title || resume.title;
    resume.bio = req.body.bio || resume.bio;
    resume.main = req.body.main || resume.main;
    const updatedResume = await resume.save();
    res.status(200).json({
      note: 'Resume updated',
      _id: updatedResume._id,
      title: updatedResume.title,
      bio: updatedResume.bio,
      main: updatedResume.main,
      updatedAt: updatedResume.updatedAt,
    });
  } else {
    res.status(404);
    throw new Error('Resume not found');
  }
});

/* 
    @desc: Delete Resume
    @route: DELETE /api/resume/:id
    @access: private
*/
const deleteResume = asyncHandler(async (req, res) => {
  const resume = await Resume.deleteOne({ _id: req.params.id });
  if (resume) {
    res.status(200).json({ note: 'Resume deleted', _id: req.params.id });
  } else {
    res.status(400);
    throw new Error('Could not delete resume');
  }
});

export { getResumes, getResume, createResume, updateResume, deleteResume };
