import React from 'react';
import { useParams } from 'react-router';

const DoctorProfile = () => {
    const { doctorID } = useParams();
    return (
        <div>
            hello {doctorID}
        </div>
    );
};

export default DoctorProfile;