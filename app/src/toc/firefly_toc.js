
//-------------------------------------------------------------------------------------------------
//  Below is a set of predefined topics.  Use this to construct your table of contents
//-------------------------------------------------------------------------------------------------

export const toc_about = {
    id: 'about',
    title: 'About Firefly',
    href: 'firefly/about.html'
};

export const toc_user = {
    id: 'user',
    title: 'User Registration',
    href: 'firefly/user.html'
};

//export const toc_faq = {
//    id: 'faq',
//    title: 'FAQ',
//    href: 'firefly/faq.html'
//};

export const toc_privacy = {
    id: 'privacy',
    title: 'IRSA Privacy Notice',
    href: 'firefly/privacy.html'
};

const toc_visualization = {
    id: 'visualization',
    title: 'Visualization',
    href: 'firefly/visualization.html',
    items: [
        {
            id: 'visualization.imageoptions',
            title: 'Image Toolbar',
            href: 'firefly/visualization.html#toolbar',
            hidden: true,
        },
        {
            id: 'visualization.Rotate',
            title: 'Rotation',
            href: 'firefly/visualization.html#rotateImage',
            hidden: true,
        },
        {
            id: 'visualization.selectregion',
            title: 'Select Region',
            href: 'firefly/visualization.html#selectregion',
            hidden: true,
        },
        {
            id: 'visualization.layers',
            title: 'Layers',
            href: 'firefly/visualization.html#layers',
            hidden: true,
        },
        {
            id: 'visualization.ds9regions',
            title: 'ds9 Regions',
            href: 'firefly/visualization.html#ds9regions',
            hidden: true,
        },
        {
            id: 'visualization.fitsViewer',
            title: 'The FITS/HiPS viewer',
            href: 'firefly/visualization.html#fitsViewer',
        },
        {
            id: 'visualization.imageinfo',
            title: 'Image Information',
            href: 'firefly/visualization.html#imageinfo',
        },
        {
            id: 'visualization.toolbar',
            title: 'Image Toolbar',
            href: 'firefly/visualization.html#toolbar',
        },
        {
            id: 'visualization.newimage',
            title: 'New Image',
            href: 'firefly/visualization.html#newimage',
        },
        {
            id: 'visualization.stretches',
            title: 'Color Stretches',
            href: 'firefly/visualization.html#stretches',
        },
        {
            id: 'visualization.hipsViewer',
            title: 'Specific HiPS Features',
            href: 'firefly/visualization.html#hipsViewer',
        },
        {
            id: 'visualization.footprints',
            title: 'Footprints',
            href: 'firefly/visualization.html#footprints',
        },
        {
            id: 'visualization.breakingout',
            title: 'Breaking out of the pane',
            href: 'firefly/visualization.html#breakingout',
        },
        {
            id: 'visualization.loaded-images',
            title: 'Image Navigation',
            href: 'firefly/visualization.html#imagenavigation',
             hidden: true,
        },
        {
            id: 'visualization.navigation',
            title: 'Image Navigation',
            href: 'firefly/visualization.html#imagenavigation',
        },
        {
            id: 'visualization.wcs',
            title: 'WCS Alignment',
            href: 'firefly/visualization.html#wcs',
        },
        {
            id: 'visualization.coverage',
            title: 'Coverage Image',
            href: 'firefly/visualization.html#coverage',
        },
        {
            id: 'visualization.fitships',
            title: 'Automatic FITS-HiPS-Aitoff Transitions',
            href: 'firefly/visualization.html#autozoom',
        },
        {
            id: 'visualization.changehips',
            title: 'Change HiPS',
            href: 'firefly/visualization.html#changehips',
              hidden: true,
       },
    ]
};

export const toc_tables = {
    id: 'tables',
    title: 'Tables',
    href: 'firefly/tables.html',
    items: [
        {
            id: 'tables.tableoptions',
            title: 'Table Options',
            href: 'firefly/tables.html#tableoptions',
            hidden: true,
        },
        {
            id: 'tables.header',
            title: 'Table Header',
            href: 'firefly/tables.html#header',
        },
        {
            id: 'tables.columns',
            title: 'Table Columns',
            href: 'firefly/tables.html#columns',
        },
        {
            id: 'tables.filters',
            title: 'Table Filters',
            href: 'firefly/tables.html#filters',
        },
        {
            id: 'tables.cells',
            title: 'Table Cells',
            href: 'firefly/tables.html#cells',
        },
        {
            id: 'tables.save',
            title: 'Saving Tables',
            href: 'firefly/tables.html#save',
        },
        {
            id: 'tables.catalogs',
            title: 'Catalogs',
            href: 'firefly/tables.html#catalogs',
        },
        {
            id: 'basics.catalogs',
            title: 'Catalogs',
            href: 'firefly/tables.html#catalogs',
             hidden: true,
        },
    ]
};


export const toc_plots = {
    id: 'plots',
    title: 'Plots',
    href: 'firefly/plots.html',
    items: [
        {
            id: 'plots.default',
            title: 'Default Plot',
            href: 'firefly/plots.html#default'
        },
        {
            id: 'plots.firstlook',
            title: 'Plot Format: A First Look',
            href: 'firefly/plots.html#firstlook'
        },
        {
            id: 'plots.linking',
            title: 'Plot Linking',
            href: 'firefly/plots.html#linking'
        },
        {
            id: 'plots.changing',
            title: 'Changing What is Plotted',
            href: 'firefly/plots.html#changing'
        },
        {
            id: 'plots.manipulating',
            title: 'Plotting Manipulated Columns',
            href: 'firefly/plots.html#manipulating'
        },
        {
            id: 'plots.restricting',
            title: 'Restricting What is Plotted',
            href: 'firefly/plots.html#restricting'
        },
        {
            id: 'plots.saving',
            title: 'Saving Plots',
            href: 'firefly/plots.html#saving'
        },
        {
            id: 'plots.adding',
            title: 'Adding Plots',
            href: 'firefly/plots.html#adding'
        },
        {
            id: 'plots.example',
            title: 'Example Plots',
            href: 'firefly/plots.html#example'
        },
    ]
};

//-------------------------------------------------------------------------------------------------
//  Below is a set of predefined table of contents.  Or, simply create one from the above topics.
//-------------------------------------------------------------------------------------------------


/**
 * Default table of contents used by Firefly
 */
export const fireflyToc = [
    toc_about,
    toc_visualization,
    toc_tables,
    toc_plots,
    toc_user,
    toc_privacy
];
