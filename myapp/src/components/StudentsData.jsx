import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import EditStudentModal from "./editStudentModal"; // ✅ CHANGED (Capitalized)

const StudentsData = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [editData, seteditData] = useState(null);
  const [showModal, setShowmodal] = useState(false);

  const fetchStudents = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/student/viewstudents",
        { withCredentials: true },
      );
      setStudents(res.data);
      toast.success("Data retrieved successfully", {
        position: "top-right",
        autoClose: 2000,
        theme: "dark",
      });
    } catch (error) {
      toast.error("Data not fetched. Please try again", {
        position: "top-right",
        autoClose: 2000,
        theme: "dark",
      });
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const deleteStudent = async (id) => {
    if (!window.confirm("Are you sure you want to delete this student?"))
      return;

    try {
      await axios.delete(
        `http://localhost:5000/api/student/deletestudent/${id}`,
        { withCredentials: true },
      );
      setStudents((prev) => prev.filter((s) => s._id !== id));
      toast.success("Student deleted successfully", {
        position: "top-right",
        autoClose: 2000,
        theme: "dark",
      });
    } catch (error) {
      toast.error("Failed to delete student", {
        position: "top-right",
        autoClose: 2000,
        theme: "dark",
      });
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/student/logout",
        {},
        { withCredentials: true },
      );
      toast.success("Logout successful", {
        position: "top-right",
        autoClose: 2000,
        theme: "dark",
      });
      navigate("/login");
    } catch (error) {
      toast.error("Logout failed", {
        position: "top-right",
        autoClose: 2000,
        theme: "dark",
      });
    }
  };

  const handleEdit = (student) => {
    seteditData(student);
    setShowmodal(true);
  };

  const closeModal = () => {
    setShowmodal(false);
    seteditData(null);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:5000/api/student/profileupdate/${editData._id}`,
        editData,
        { withCredentials: true }, // ✅ ADDED
      );

      toast.success("Profile updated successfully", {
        position: "top-right",
        autoClose: 2000,
        theme: "dark",
      });

      closeModal();
      fetchStudents();
    } catch (error) {
      toast.error("Profile update failed", {
        position: "top-right",
        autoClose: 2000,
        theme: "dark",
      });
    }
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-end mt-3">
        <button
          className="btn btn-outline-warning btn-sm text-dark"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      <table className="table table-bordered mt-5 table-striped">
        <thead className="table-dark">
          <tr>
            <th>Sr. No.</th>
            <th>Fullname</th>
            <th>Email</th>
            <th>Password</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s, index) => (
            <tr key={s._id}>
              <td>{index + 1}</td>
              <td>{s.fullname}</td>
              <td>{s.email}</td>
              <td>{s.password}</td>
              <td>{s.address}</td>
              <td>
                <button
                  className="btn btn-success btn-sm m-1"
                  onClick={() => handleEdit(s)}
                >
                  Profile Edit
                </button>
                <button
                  className="btn btn-danger btn-sm m-1"
                  onClick={() => deleteStudent(s._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <EditStudentModal
        show={showModal}
        editData={editData}
        seteditData={seteditData}
        onClose={closeModal}
        onUpdate={handleUpdate}
      />
    </div>
  );
};

export default StudentsData;
