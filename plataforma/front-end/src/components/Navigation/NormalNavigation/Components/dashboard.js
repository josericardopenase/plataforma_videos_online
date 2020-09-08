import React from 'react';
import GeneralStyles from './generalStyles';
import SearchBar from './dashboard/searchbar';
import SidebarProfile from './sidebar/sidebarProfile';
import Notification from './dashboard/notification';
import Welcome from './dashboard/welcome';
import Course from './dashboard/course';
import CoursesList from './dashboard/coursesList';

export default function Dashboard() {
  return (
    <div style={GeneralStyles.contentContainer}>
        <div className="row justify-content-between d-flex m-0">
          
            <SearchBar></SearchBar>


            <div className="row justify-content-center align-middle">
              <Notification style={{marginRight: "1.5rem", heigth: "100%"}}></Notification>
              <SidebarProfile></SidebarProfile>
            </div>

        </div>

        <Welcome className="mt-5 ml-0 p-0"></Welcome>

        <CoursesList className="mt-5"></CoursesList>
    </div>
  );
}

