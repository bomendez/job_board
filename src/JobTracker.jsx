import React, {useState } from "react";

export default function JobTracker(props) {

    const [jobForm, setJobForm] = useState({
        title: '',
        companyName: '',
        location: '',
    });

    return (
        <div>
            <h5>Job Title:</h5>
            <input value={jobForm.title}
            onChange={e => setJobForm({
                ...jobForm,
                title: e.target.value
            })} />
        </div>
    )
}