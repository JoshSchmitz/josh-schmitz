import asyncHandler from 'express-async-handler';
import Experience from '../models/experience.js';

/* 
    @desc: Create Experience
    @route: POST /api/resume/experience
    @access: private
*/
const createExperience = asyncHandler(async (req, res) => {
  const { resume } = req.body;
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
