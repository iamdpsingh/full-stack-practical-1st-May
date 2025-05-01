import React from 'react';

const JobApplicationList = ({ applications, onEdit, onDelete }) => {
  return (
    <div className="cards-container">
      <h2>Job Applications</h2>
      {applications.length === 0 ? (
        <p>No applications found.</p>
      ) : (
        applications.map((app) => (
          <div className="card" key={app.id}>
            <h3>{app.companyName}</h3>
            <p><strong>Job Title:</strong> {app.jobTitle}</p>
            <p><strong>Date:</strong> {new Date(app.applicationDate).toLocaleDateString()}</p>
            <p>
              <strong>Status:</strong>
              <span className={`status status-${app.status.toLowerCase()}`}>
                {app.status}
              </span>
            </p>
            <div className="details">
              <p><strong>Job Link:</strong> {app.jobLink ? (
                <a href={app.jobLink} target="_blank" rel="noopener noreferrer">View</a>
              ) : '-'}</p>
              <p><strong>Notes:</strong> {app.notes || '-'}</p>
            </div>
            <div className="actions">
              <button
                className="button button-primary"
                onClick={() => onEdit(app)}
              >
                Edit
              </button>
              <button
                className="button button-danger"
                onClick={() => {
                  if (window.confirm('Are you sure you want to delete this application?')) {
                    onDelete(app.id);
                  }
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default JobApplicationList;