import { Client } from '@notionhq/client';
import 'dotenv/config';
import {CreateParams} from './types'

const notion = new Client({
    auth: process.env.NOTION_API_KEY,
})
const database_id = process.env.NOTION_PAGE_ID ?? '';

const create = async (...args: CreateParams) => {
    const [title, text, tags, urls, checkbox] = args;
    const response = await notion.pages.create({
        parent: {
            database_id: database_id
        },
        properties: {
            Name: {
                title: [{
                    text: {
                        content: title
                    }
                }]
            },
            Date: {
                date: {
                    start: new Date().toISOString()
                }
            },
            // Tags: {
            //     multi_select: tagsBlock(tags)
            // },
            // Post: {
            //     url: post(urls)
            // }
        },
        children: [{
            object: "block",
            paragraph: {
                rich_text: [{
                    text: {
                        content: text
                    }
                }],
                color: "default"
            }
        },
            // ...checkboxesBlock(checkboxes)
        ]
    })

    return response
}

export default { create }