import { Blocks, Component, LayoutTemplate } from "lucide-react";
import { ReactNode } from "react";

interface Categoryprops{
    name: string,
    title: string,
    image: ReactNode,
    id: number,
}


export const categoryItems: Categoryprops[] = [
    {
        name: "template",
        title: "Template",
        image:<LayoutTemplate />,
        id: 1,
        },
    {
        name: "uikit",
        title: "UI Kit",
        image:<Blocks />,
        id: 2,
        },
    {
        name: "icon",
        title: "Icons",
        image:<Component />,
        id: 3,
        },
    
]