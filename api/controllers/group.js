import asyncHandler from 'express-async-handler';
import Resume from '../models/resume.js';

/* 
    @desc: Get group for resume
    @route: GET /api/resume/:resumeId/group(/:groupId)
    @access: public
*/
const getGroup = asyncHandler(async (req, res) => {
  const { resumeId, groupId } = req.params;
  if (groupId) {
    const resume = await Resume.findById(resumeId);
    if (resume) {
      const groups = resume.group;
      const group = groups.filter((lang) => lang._id.valueOf() === groupId);
      if (group) {
        res.status(200).json(group[0]);
      } else {
        res.status(404);
        throw new Error('Group not found');
      }
    } else {
      res.status(404);
      throw new Error('Resume not found');
    }
  } else {
    const resume = await Resume.findById(resumeId);
    if (resume) {
      const groups = resume.group;
      if (groups) {
        res.status(200).json(groups);
      } else {
        res.status(404);
        throw new Error('Groups not found');
      }
    } else {
      res.status(404);
      throw new Error('Resume not found');
    }
  }
});

/* 
    @desc: Create group
    @route: POST /api/resume/:resumeId/group
    @access: private
*/
const createGroup = asyncHandler(async (req, res) => {
  const { resumeId } = req.params;
  const resume = await Resume.findById(resumeId);
  if (resume) {
    let groups = resume.group;
    groups.push({
      title: req.body.title,
      description: req.body.description,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      position: req.body.position,
    });
    resume.group = groups;
    await resume.save();
    res.status(200).json({ message: 'Group created' });
  } else {
    res.status(404);
    throw new Error('Resume not found');
  }
});

/* 
    @desc: Update group
    @route: PUT /api/resume/:resumeId/group/:groupId
    @access: private
*/
const updateGroup = asyncHandler(async (req, res) => {
  const { resumeId, groupId } = req.params;
  const resume = await Resume.findById(resumeId);
  if (resume) {
    const groups = resume.language;
    const [group] = groups.filter((lang) => lang._id.valueOf() === groupId);
    if (group) {
      group.name = req.body.name || group.name;
      group.dialect = req.body.dialect || group.dialect;
      group.years = req.body.years || group.years;
      group.experience = req.body.experience || group.experience;
      group.highlighted = req.body.highlighted || group.highlighted;

      const updatedResume = await resume.save();
      const updatedGroups = updatedResume.language;
      const [updatedGroup] = updatedGroups.filter(
        (lang) => lang._id.valueOf() === groupId
      );
      res.status(200).json({
        title: updatedGroup.title,
        description: updatedGroup.description,
        startDate: updatedGroup.startDate,
        endDate: updatedGroup.endDate,
        position: updatedGroup.position,
      });
    } else {
      res.status(400);
      throw new Error('Language not found');
    }
  } else {
    res.status(400);
    throw new Error('Resume not found');
  }
});

/* 
    @desc: Delete group
    @route: DELETE /api/resume/:resumeId/group/:groupId
    @access: private
*/
const deleteGroup = asyncHandler(async (req, res) => {
  const { resumeId, groupId } = req.params;
  const resume = await Resume.findById(resumeId);
  if (resume) {
    const groups = resume.group;
    groups.pull(groupId);
    const updatedGroup = await resume.save();
    if (updatedGroup) {
      res.status(200).json({ message: 'Group deleted', _id: groupId });
    } else {
      res.status(400);
      throw new Error('Could not delete group');
    }
  } else {
    res.status(400);
    throw new Error('Resume not found');
  }
});

export { getGroup, createGroup, updateGroup, deleteGroup };
