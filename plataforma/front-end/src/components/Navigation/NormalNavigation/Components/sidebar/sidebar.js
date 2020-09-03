import React, { useState } from 'react';
import SidebarElement from './sidebarElement';
import SidebarProfile from './sidebarProfile';

export default function Sidebar() {

    const elements = [
        {
            id: 1,
            name : "teorico",
            svgPath : <path fill-rule="evenodd" d="M1 2.828v9.923c.918-.35 2.107-.692 3.287-.81 1.094-.111 2.278-.039 3.213.492V2.687c-.654-.689-1.782-.886-3.112-.752-1.234.124-2.503.523-3.388.893zm7.5-.141v9.746c.935-.53 2.12-.603 3.213-.493 1.18.12 2.37.461 3.287.811V2.828c-.885-.37-2.154-.769-3.388-.893-1.33-.134-2.458.063-3.112.752zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>,
            path : "/",
        },
        {
            id: 2,
            name : "practico",
            svgPath :   <path fill-rule="evenodd" d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>,
            path : "/practico/",
        },
        {
            id: 3,
            name : "vr",
            svgPath :   <path fill-rule="evenodd" d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935.807 1.29a3 3 0 1 1-.848.53l-.508-.812-2.076 3.322A.5.5 0 0 1 8 10.5H5.959a3 3 0 1 1-1.815-3.274L5 5.856V5h-.5a.5.5 0 0 1-.5-.5zm1.5 2.443l-.508.814c.5.444.85 1.054.967 1.743h1.139L5.5 6.943zM8 9.057L9.598 6.5H6.402L8 9.057zM4.937 9.5a1.997 1.997 0 0 0-.487-.877l-.548.877h1.035zM3.603 8.092A2 2 0 1 0 4.937 10.5H3a.5.5 0 0 1-.424-.765l1.027-1.643zm7.947.53a2 2 0 1 0 .848-.53l1.026 1.643a.5.5 0 1 1-.848.53L11.55 8.623z"/>,
            path : "/vr/",
        },



        
    ]

    const [enabled, setEnabled] = useState()

    const changeEnabled = (id) => {
        setEnabled(id)
    }

    const url = document.location.pathname

    return (
        <div style={styles.sidebar}>
            
            <SidebarProfile></SidebarProfile>

            <ul style={styles.elementList}>
                {
                    elements.map(obj => <SidebarElement path = {obj.svgPath} locationPath = {obj.path} enabled = {url === obj.path ? true : false} onClick = {changeEnabled} id={obj.id}></SidebarElement>)
                }

            </ul>

            <SidebarElement></SidebarElement>

        </div>
  );
}

const styles= {
    sidebar : {
        position: "fixed",
        height: "100vh",
        backgroundColor: "#63BB67",
        width: "4rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        textAlign: "center"

    },
    elementList : {
        listStyle : "none",
        padding: 0,
        margin: 0,
        display: "flex",
        flexDirection : "column",
        alignItems: "center",
        width: "100%"
    }
}