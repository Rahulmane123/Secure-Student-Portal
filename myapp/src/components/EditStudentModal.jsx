import React from "react";

const EditStudentModal = ({
  show,
  editData,
  seteditData,
  onClose,
  onUpdate,
}) => {
  if (!show || !editData) return null;

  return (
    <>
      <div className="modal-backdrop fade show" onClick={onClose}></div>

      <div className="modal fade show d-block">
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={onUpdate}>
              <div className="modal-header">
                <h5 className="modal-title">Edit Student Profile</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={onClose}
                ></button>
              </div>

              <div className="modal-body">
                <input
                  className="form-control mb-2"
                  placeholder="Full Name"
                  value={editData.fullname}
                  onChange={(e) =>
                    seteditData({ ...editData, fullname: e.target.value })
                  }
                />

                <input
                  className="form-control mb-2"
                  placeholder="Email"
                  value={editData.email}
                  onChange={(e) =>
                    seteditData({ ...editData, email: e.target.value })
                  }
                />

                <input
                  className="form-control mb-2"
                  placeholder="Password"
                  value={editData.password}
                  onChange={(e) =>
                    seteditData({ ...editData, password: e.target.value })
                  }
                />

                <input
                  className="form-control"
                  placeholder="Address"
                  value={editData.address}
                  onChange={(e) =>
                    seteditData({ ...editData, address: e.target.value })
                  }
                />
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditStudentModal;
