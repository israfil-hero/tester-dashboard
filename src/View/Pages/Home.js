import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Courses from '../../Components/Courses/Courses';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer'

const Home = () => {
    const [loggedInUser, setLoggedInUser] = useState({});
 const auth = "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic3R1ZGVudCIsIl9pZCI6IjYxZWMwMWQxNDc4OGEwMDRlZTNjN2Y0ZiIsInN0YXR1cyI6ImluX3Byb2dyZXNzIiwic3ViIjoiNjFlYzAxZDE0Nzg4YTAwNGVlM2M3ZjRmIiwiaWF0IjoxNjQyODU3MTE5LjQ5Nn0.JV9bx8OCMyOU0r-vMzZfdYULoHeUMrN_UC5-3zWvZMLSp6n8R8vwITp2vTtF8gRRv7H4VE2eA-iljYmWUjKsByXGW9YKoJaZe-lJcYfrTs13QgKnBa05G57KAiEjMLWVQqKS7b5JF_8esoM1i0-wVwzm0yvYe-4HZIUiDHElQ5fiV8-xoPslUCyOdUDZLyu1JRuWB5jRolLILAsAwV9CdIWuHegY_mdrgBbk7hlPaB5g4nLEpfwiMT14LetJATuTXWM3xxDpexrGVaC8bojbfPWoDgw7qtOshG2_u4Yut7HCQJNa3vQTFDbZPFww07hx6-akIV7y6trxamAWviJpmVCIBSefVnyLroz648bUlex-foUNIP--2zVjaXJelP0Fmnt3M8V5lV0kL-o1GHhWLJkkyVTUIrIe1cxX7p93CzQBvWWmjJhlk4Vkfg64-vKWc6x2QCc-3pv6h51wp3p-HOwTuSyW7C_rxhbHSgjlF8GKKuMERk5sScpXogE9c5RV3jfeswTRhmZ5UeQMtUNMEq63qhh04yXN-AuWfxUYadJh9NseKStYyF-Q0CgiKhanX-2M53YqXEVsF684_3G4hxOfCpLgn2wMmQZuVOHZ8gX7okHtjB-qgFJTmKeczC1vUkxTV90ECeqaWlwzUn7DsCMGg8C2mJF437bwVg_rgiw";

    const dataFetcher = () => {
        const data = axios.get("https://jsdude.com/api/dashboard", {
            headers: {
                Authorization: auth
            }
        })
        return data

    }

    const { isLoading, data: allCourses } = useQuery(['coursesForStudent'], dataFetcher);


// for user 

    useEffect(() => {
        fetch('https://jsdude.com/api/user/me', {
            headers: {
                Authorization: auth
            }
        })
        .then(res => res.json())
        .then(data => setLoggedInUser(data))
    }, [])

    // gem 


    const gemFetcher = () => {
        const data = axios.get("https://jsdude.com/api/gem/user-gem/", {
            headers: {
                Authorization: auth
            }
        })
        return data

    }

    const { data: gems } = useQuery(['gem'], gemFetcher);
console.log(gems);



    return (
        <div>
            <Nav
                user={loggedInUser?.data}
                gems={gems?.data?.data?.totalGem}
            />
            <Courses
                allCourses={allCourses}
                isLoading={isLoading}
                user={loggedInUser?.data}
            />
            <Footer />

        </div>
    );
};

export default Home;