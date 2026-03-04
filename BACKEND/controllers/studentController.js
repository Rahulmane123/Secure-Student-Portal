const Student = require('../models/Student');
// step:3
// create
exports.registerStudent = async (req, res) => {
    try {
        await Student.create(req.body);// insert one || CRUD Operation
        res.status(201).json(
            {
                success: true,
                message: "Registration successfully Completed"
            }
        )
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

//Login
exports.loginstudent = async (req, res) => {
    const { email, password } = req.body;

    try {
        const student = await Student.findOne({ email, password });


        if (student) {
            // create session
            req.session.user = {
                id: student._id,
                email: student.email
            };

            res.status(200).json({
                success: true, message: 'Login successful!', student: {
                    id: student._id,
                    email: student.email
                }
            });
        } else {
            res.status(401).json({ success: false, message: 'Invalid email or password.' });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
}

// read all
exports.getallstudents = async (req, res) => {
    const students = await Student.find();
    res.json(students);
}


// read one
exports.getstudentById = async (req, res) => {
    const students = await Student.findById(req.params.id);
    res.json(students);
}

// delete one
exports.deletestudent = async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true });
}

exports.profileupdate = async (req, res) => {

    const students = await Student.findByIdAndUpdate(req.params.id, req.body);
    res.json(students);
}


// Logout
exports.logoutstudent = (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: 'Logout failed'
      });
    }

    res.clearCookie('connect.sid');
    res.status(200).json({
      success: true,
      message: 'Logout successful'
    });
  });
};

