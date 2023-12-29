import asyncHandler from 'express-async-handler';
import Resume from '../models/resume.js';

/* 
    @desc: Create Experience
    @route: POST /api/resume/experience
    @access: private
*/
const createExperience = asyncHandler(async (req, res) => {
  const resume = await Resume.findById(req.body._id);
  try {
    let experience = resume.experience;
    experience.push({
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
    resume.experience = experience;
    await resume.save();
    res.status(200).json({ message: 'Experience created' });
  } catch (error) {
    res.status(400);
    throw new Error('Invalid resume data');
  }
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
