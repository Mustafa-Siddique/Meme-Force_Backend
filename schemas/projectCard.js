import {isUniqueAcrossAllDocuments} from '../lib/isUniqueAcrossAllDocuments'
export default{
    name:"projectCards",
    type:"document",
    title:"Project Cards",
    fields:[
        {
            title:"Project Name",
            name:"name",
            type:"string",
            validation: Rule => Rule.required(),
        },
        {
            name:"tracker",
            type:"string",
            title:"Tracker",
            validation: Rule => Rule.required(),
        },
        {
            name:"summary",
            type:"string",
            title:"Summary",
        },
        {
            name:"slug",
            type:"slug",
            title:"Slug",
            options:{
                source:"name",
                isUnique: isUniqueAcrossAllDocuments,
            },
            validation: Rule => Rule.required(),
        },
        {
            title:"Website",
            name:"website",
            type:"url",
        },
        {
            title:"Twitter",
            name:"twitter",
            type:"url",
        },
        {
            title:"Telegram",
            name:"telegram",
            type:"url",
        },
        {
            title:"Logo",
            name:"image",
            type:"image",
            validation: Rule => Rule.required(),
        },
        {
            title:"Swap Rate",
            name:"rate",
            type:"string",
        },
        {
            title:"Market Cap",
            name:"mcap",
            type:"string",
        },
        {
            title:"SoftHard Cap",
            name:"schc",
            type:"string",
        },
        {
            title:"Access",
            name:"access",
            type:"string",
            options: {
                list: [
                    {title: 'WL', value: 'Whitelisted'},
                    {title: 'Pvt', value: 'Private'},
                    {title: 'Public', value: 'Public'} 
                ]
            },
            validation: Rule => Rule.required(),
        },
        {
            title:"Chain",
            name:"chain",
            type:"string",
            options: {
                list: [
                    {title: 'BSC', value: 'BSC'},
                    {title: 'ETH', value: 'ETH'},
                    {title: 'Public', value: 'Public'} 
                ]
            },
            validation: Rule => Rule.required(),
        },
        {
            title:"Project is Open?",
            description: 'Turn on if "Yes"!',
            name:"isOpen",
            type:"boolean",
        },
    ]
}