import React from 'react';
import '../../sass/enrolledCourse.scss';


const EnrolledCourses = ({ course }) => {

    const { authorName, price, registrationStartDate, registrationEndDate, thumbnail, title } = course;
    const dateConverter = (date, month) => {
        if (date === 1) {
            return '1st ' + month;
        } else if (date === 2) {
            return '2nd ' + month;
        } else if (date === 3) {
            return '3rd ' + month;
        }
        return date + 'th ' + month;

    }
    const getEnrollmentDate = () => {
        const registrationStart = new Date(registrationStartDate);
        const registrationEnd = new Date(registrationEndDate);
        const startDate = registrationStart.getDate();
        const endDate = registrationEnd.getDate();
        const startMonth = registrationStart.toLocaleString('en-us', { month: 'short' });
        const endMonth = registrationEnd.toLocaleString('en-us', { month: 'short' });
        const startDateStr = dateConverter(startDate, startMonth);
        const endDateStr = dateConverter(endDate, endMonth);
        const year = registrationEnd.getFullYear();
        return startDateStr + '-' + endDateStr + ',' + year;
    }

    const img = `https://phero-web.nyc3.cdn.digitaloceanspaces.com/uat-images/${thumbnail}`




    return (
        <div className="col-md-6 ">
            <div className="row d-flex justify-content-center  course_container ml-1 mb-5">
                <div className="col-md-5">
                    <img src={img} alt="img" className="img-fluid rounded" />
                </div>
                <div className="col-md-7">
                    <div>
                        <p className="course_title">{title}</p>
                        <p className="authorName">{authorName}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="price">{price}</p>
                        <div>
                            <p>Registration {registrationEndDate && <span className="registation_closed">closed</span>}</p>
                            <p>{getEnrollmentDate()}</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default EnrolledCourses;