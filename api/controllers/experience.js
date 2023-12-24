import asyncHandler from 'express-async-handler';
import Resume from '../models/resume.js';

/* 
    @desc: Create Experience
    @route: POST /api/resume/experience
    @access: private
*/
const createExperience = asyncHandler(async (req, res) => {
  const resume = await Resume.findById(req.body._id);
});

/* 
    @desc: Update Experience
    @route: PUT /api/resume/experience/:id
    @access: private
*/

/* 
    @desc: Delete Experience
    @route: DELETE /api/resume/experience/:id
    @access: private
*/

export { createExperience };
