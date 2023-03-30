import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

export const MenuItems = [
    {
        page: 'Home',
        path: '/Home',
        className: 'Nav_link'
    },
    {
        page: 'My Work',
        path: '/',
        iconClosed: <IoIosArrowDown />,
        iconOpened: <IoIosArrowUp />,
        className: 'Nav_link',
        subNav: [
            {
                page: 'Project 00',
                path: '/',
                className: 'Nav_link'
            },
            {
                page: 'Project 01',
                path: '/',
                className: 'Nav_link'
            },
            {
                page: 'Project 02',
                path: '/',
                className: 'Nav_link'
            },
            {
                page: 'Project 03',
                path: '/',
                className: 'Nav_link'
            },
        ]
    },
    {
        page: 'Contact',
        path: '/',
        className: 'Nav_link'
    },
]