import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

export const MenuItems = [
    {
        page: 'Home',
        path: '/',
        className: 'Nav_link'
    },
    {
        page: 'My Work',
        iconClosed: <IoIosArrowDown className="DropDown_Indicator"/>,
        iconOpened: <IoIosArrowUp className="DropDown_Indicator" />,
        className: 'Nav_link',
        subNav: [
            {
                page: 'Project 00',
                path: '/Project00',
                className: 'Nav_link'
            },
            {
                page: 'Project 01',
                path: '/Project01',
                className: 'Nav_link'
            },
            {
                page: 'Project 02',
                path: '/Project02',
                className: 'Nav_link'
            },
            {
                page: 'Project 03',
                path: '/Project03',
                className: 'Nav_link'
            },
        ]
    },
    {
        page: 'Contact',
        path: '/Contact',
        className: 'Nav_link'
    },
]