import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import '../../sass/TesterCourse.scss';
import ProgressBar from '../progressBar/ProgressBar';

const TesterCourse = ({ course }) => {
    const { authorName, thumbnail, title, _id } = course.courseId;
    const auth = "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic3R1ZGVudCIsIl9pZCI6IjYxZWMwMWQxNDc4OGEwMDRlZTNjN2Y0ZiIsInN0YXR1cyI6ImluX3Byb2dyZXNzIiwic3ViIjoiNjFlYzAxZDE0Nzg4YTAwNGVlM2M3ZjRmIiwiaWF0IjoxNjQyODU3MTE5LjQ5Nn0.JV9bx8OCMyOU0r-vMzZfdYULoHeUMrN_UC5-3zWvZMLSp6n8R8vwITp2vTtF8gRRv7H4VE2eA-iljYmWUjKsByXGW9YKoJaZe-lJcYfrTs13QgKnBa05G57KAiEjMLWVQqKS7b5JF_8esoM1i0-wVwzm0yvYe-4HZIUiDHElQ5fiV8-xoPslUCyOdUDZLyu1JRuWB5jRolLILAsAwV9CdIWuHegY_mdrgBbk7hlPaB5g4nLEpfwiMT14LetJATuTXWM3xxDpexrGVaC8bojbfPWoDgw7qtOshG2_u4Yut7HCQJNa3vQTFDbZPFww07hx6-akIV7y6trxamAWviJpmVCIBSefVnyLroz648bUlex-foUNIP--2zVjaXJelP0Fmnt3M8V5lV0kL-o1GHhWLJkkyVTUIrIe1cxX7p93CzQBvWWmjJhlk4Vkfg64-vKWc6x2QCc-3pv6h51wp3p-HOwTuSyW7C_rxhbHSgjlF8GKKuMERk5sScpXogE9c5RV3jfeswTRhmZ5UeQMtUNMEq63qhh04yXN-AuWfxUYadJh9NseKStYyF-Q0CgiKhanX-2M53YqXEVsF684_3G4hxOfCpLgn2wMmQZuVOHZ8gX7okHtjB-qgFJTmKeczC1vUkxTV90ECeqaWlwzUn7DsCMGg8C2mJF437bwVg_rgiw";

    const Progessfetcher = (id) => {
        const data = axios.get(`https://jsdude.com/api/course/getNext/${id}`, {
            headers: {
                Authorization: auth
            }
        })
        return data
    }

    const { data } = useQuery(['id'], () => Progessfetcher(_id))


    return (
        <div className="col-md-6 tester_container ml-3">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-5">
                    <img src={thumbnail} alt="img" className="img-fluid rounded " />
                </div>
                <div className="col-md-7">
                    <h5>{title}</h5>
                    <p>{authorName}</p>
                    <div className="d-flex align-items-center">
                        <div className="w-75">
                            <ProgressBar progress={data?.data?.data} />
                        </div>
                        <div className="">
                            {data?.data?.data?.courseProgress}%
                        </div>
                    </div>
                    <button className="btn text-white mt-2">Continue Course</button>
                </div>
            </div>


        </div>



    );
};

export default TesterCourse;