
import React from 'react';
import '../../sass/course.scss';
import EnrolledCourses from '../EnrolledCourses/EnrolledCourses';
import TesterCourse from '../TesterCourse/TesterCourse';


const Courses = ({ allCourses, isLoading , user}) => {

    return (
        <div className="container mt-5 course_card">
            <div>
                <p className="title">Welcome back <span className="userInfo">{user?.fullName}</span>, ready for your next lesson?</p>
                {
                    isLoading ? <p>Loading...</p> :


                        <div className="row">

                            {
                                allCourses?.data?.purchaseHistories.map(course => <TesterCourse course={course} key={course._id} />)
                            }
                        </div>



                }
            </div>

            <div className="mt-5">
                <p className="title">Available For You</p>

                {
                    isLoading ? <p>Loading...</p> :


                        <div className="row">

                            {
                                allCourses?.data?.allCourses.map(course => <EnrolledCourses course={course} key={course._id} />)
                            }
                        </div>



                }
            </div>
        </div>
    );
};

export default Courses;