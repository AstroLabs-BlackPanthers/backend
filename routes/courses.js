const express = require('express');
const router = express.Router();
const CoursesModel = require('../models/CoursesModel.js');

/*
 * For mongoose methods, see https://mongoosejs.com/docs/api/model.html
 */

 // http://www.myapp.com/product/add
router.post(
    '/add',
    (req, res) => {

        // 1. Capture data from client (e.g, Postman or Browser)
        const formData = {
            "courseName": req.body.courseName,
            "courseCode": req.body.courseCode,
            "time": req.body.time,
            "tutorName":req.body.tutorName
        }
        
        // 2. Upload the data to MongoDB

        // Instantiating an object for this data specifically
        const newCoursesModel = new CoursesModel(formData);

        newCoursesModel
        .save() //  Promise
        .then( //resolved...
            (dbDocument) => {
                res.send(dbDocument);
            }
        )
        .catch( //rejected...
            (error) => {
                res.send(error)
            }
        );
    }
);

// http://www.myapp.com/product/find
router.get(
    '/find',
    (req, res) => {

        // Use the Mongo Model for Courses to find a product
        CoursesModel
        .find(
            { courseCode: 'CMP220'}
        )
        // If the item is found in the database...
        .then(
            (dbDocument) => {
                res.send(dbDocument);
            }
        )
        // If the item is NOT found in the database...
        .catch(
            (error) => {
                console.log('mongoose error', error);
            }
        );
    }
);

// http://www.myapp.com/product/update
router.post(
    '/update',
    (req, res) => {

        CoursesModel
        .findOneAndUpdate(
            { 'courseCode': 'CMP220' },
            {
                $set: {
                   'time': 3800 
                }
            }
        )
         // If the item is found in the database...
         .then(
            (dbDocument) => {
                res.send(dbDocument);
            }
        )
        // If the item is NOT found in the database...
        .catch(
            (error) => {
                console.log('mongoose error', error);
            }
        );

    }
);

// Export the routes
module.exports = router;