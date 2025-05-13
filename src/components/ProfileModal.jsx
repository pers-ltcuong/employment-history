import React from "react";

const ProfileModal = () => {
  let avatarImg = `${process.env.PUBLIC_URL}/images/avatar.jpg`;

  return (
    <>
      {/* Button trigger */}
      <div id="profile-modal">
        <button
          className="custom-btn-white-bg"
          data-bs-toggle="modal"
          data-bs-target="#profileModal"
        >
          Show Profile
        </button>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="profileModal"
        tabIndex="-1"
        aria-labelledby="profileModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content text-center p-3">
            <div className="modal-header border-0">
              <h5 className="modal-title w-100" id="profileModalLabel">
                Profile
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src={avatarImg}
                alt="Avatar"
                className="rounded-circle mb-3"
                 style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "scale-down",
                  border: "2px solid #000",  // Add a white border
                  borderRadius: "50%",      // Ensure the image is round
                  boxShadow: "0 0 8px rgba(255, 255, 255, 0.5)"  // Optional: Soft white shadow around the border
                }}
              />
              <h2 className="mb-2">Cuong Le</h2>
              <p><strong>Full name:</strong> Le Tri Cuong</p>
              <p><strong>Birthday:</strong> Apr 12, 1998</p>
              <p><strong>Gender:</strong> Male</p>
              <p><strong>Email:</strong> <a href="mailto:ltcuong.work@gmail.com">ltcuong.work@gmail.com</a></p>
              <p><strong>Bio:</strong> Skilled SQA Engineer in Python and Java, specializing in firmware and web testing.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileModal;
