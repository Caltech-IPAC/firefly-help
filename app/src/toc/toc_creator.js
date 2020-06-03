
/*
    This is the entry point to dynamic Table of Content creation.  It is designed support multiple 'entry points' or
    help pages.  `create` is a function where you define entry points.  It is currently default to `fireflyToc`.

    To create you own Table of Content, add your `?_toc.js` file here in this directory.  Use `firefly_toc.js` as an
    example.  Export the toc(s) you want to use or share.  Import the toc below and map it to your application name.

    Below are key parts you should be aware of:

    Table of contents:  A tree-like structure consisting of HelpItems rendered as the left navigation panel of the app.

    Topic:      A HelpItem with sub-items.  Because HelpItem may contain sub-items of other HelpItems, you can create a tree
                with unlimited branches and leaves.

    HelpItem:   One entry of help that can be referenced by the app or other help pages.
                HelpItem contains properties that's defined below: @typedef {object} HelpItem


    Suggested Usage:

    For greater reusability, a topic should be written as 2 parts; overview and details.
    Overview is a project specific information.  The details part should be sub-items and written in a generic way
    so that other projects can easily include it into their onlinehelp.

    For example:
        export const toc_a_topic = {
            id: 'a_topic',
            title: 'My topic',
            href: 'a_topic.html',           // points to html file in the public folder
            items: [
                {
                    id: 'a_topic.item1',
                    title: 'Item 1',
                    href: 'share/a_topic_details.html#item1'         // points to html file in the public/share folder
                },
                {
                    id: 'a_topic.item2',
                    title: 'Item 2',
                    href: 'share/a_topic_details_item2.html'         // can be part of a shared file or separate files
                }
            ]
        };


    This way, other project can reuse this topic like this:

        import {toc_a_topic} from './firefly_toc';
        const my_topic = {...toc_a_topic, title: 'custom title if needed', href: 'my_topic.html'};

        or, insert an item into an existing topic:

        const my_topic = add{toc_a_topic, 'items.2', {id: 'new_id', title: 'New Item', href: 'new_topic.html'};


*/






import {fireflyToc} from './firefly_toc';



/**
 * template function for implementing multiple entries in cases where
 * you want to have multiple help pages.
 * @param appName
 * @returns {{showHidden: boolean, toc: *}}
 */
export function create(appName) {
    switch (appName) {
        case 'entry1':
        case 'entry2':
        default:
            return {showHidden: false, toc: fireflyToc}
    }
}