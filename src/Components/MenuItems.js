import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

export const MenuItems = [
    {
        title: 'Home',
        path: '/Home',
        className: 'Nav_link'
    },
    {
        title: 'My Work',
        path: '/',
        iconClosed: <IoIosArrowDown />,
        iconOpened: <IoIosArrowUp />,
        className: 'Nav_link',
        subNav: [
            {
                title: 'Project 00',
                path: '/',
                className: 'Nav_link'
            },
            {
                title: 'Project 01',
                path: '/',
                className: 'Nav_link'
            },
            {
                title: 'Project 02',
                path: '/',
                className: 'Nav_link'
            },
            {
                title: 'Project 03',
                path: '/',
                className: 'Nav_link'
            },
        ]
    },
    {
        title: 'Contact',
        path: '/',
        className: 'Nav_link'
    },
]