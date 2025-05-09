
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

const toc_overview = {
    id: 'overview',
    title: 'Overview',
    href: 'firefly/overview.html',
    items: [
        {
            id: 'overview.terminology',
            title: 'Terminology',
            href: 'firefly/overview.html#terminology',
        },
        {
            id: 'overview.tools',
            title: 'Tools Overview',
            href: 'firefly/overview.html#tools',
        },
        {
            id: 'overview.drawer',
            title: 'Adding Tabs',
            href: 'firefly/overview.html#drawer',
        },
        {
            id: 'overview.layout',
            title: 'Changing Layout',
            href: 'firefly/overview.html#layout',
        },
        {
            id: 'overview.login',
            title: 'User Login',
            href: 'firefly/overview.html#login',
        },
        {
            id: 'overview.help',
            title: 'Getting More Help',
            href: 'firefly/overview.html#help',
        },
    ]
};
const toc_upload = {
    id: 'upload',
    title: 'Upload',
    href: 'firefly/upload.html',
    items: [
        {
            id: 'catalogs.owncatalogs',
            title: 'Introduction',
            href: 'firefly/upload.html#intro',
            hidden: true,
        },
        {
            id: 'upload.intro',
            title: 'Introduction',
            href: 'firefly/upload.html#intro',
        },
        {
            id: 'upload.filelocation',
            title: 'File Location',
            href: 'firefly/upload.html#filelocation',
        },
        {
            id: 'upload.catalogs',
            title: 'Catalogs',
            href: 'firefly/upload.html#catalogs',
        },
        {
            id: 'upload.region',
            title: 'Region Files',
            href: 'firefly/upload.html#region',
        },
        {
            id: 'upload.images',
            title: 'Images',
            href: 'firefly/upload.html#images',
        },
        {
            id: 'upload.spectra',
            title: 'Spectra',
            href: 'firefly/upload.html#spectra',
        },
        {
            id: 'upload.moc',
            title: 'MOC Files',
            href: 'firefly/upload.html#moc',
        },
        {
            id: 'upload.datalink',
            title: 'Data Link Files',
            href: 'firefly/upload.html#datalink',
        },
        {
            id: 'upload.uws',
            title: 'UWS Job Files',
            href: 'firefly/upload.html#uws',
        },
    ]
};

const toc_download = {
    id: 'download',
    title: 'Download',
    href: 'firefly/download.html',
    items: [
        {
            id: 'download.intro',
            title: 'Introduction',
            href: 'firefly/download.html#intro',
        },
        {
            id: 'download.images',
            title: 'Images',
            href: 'firefly/download.html#images',
        },
        {
            id: 'download.tables',
            title: 'Tables',
            href: 'firefly/download.html#tables',
        },
        {
            id: 'download.plots',
            title: 'Plots',
            href: 'firefly/download.html#plots',
        },
        {
            id: 'download.preparedownload',
            title: 'Prepare Download',
            href: 'firefly/download.html#preparedownload',
        },
        {
            id: 'download.filelocation',
            title: 'File Location',
            href: 'firefly/download.html#filelocation',
        },
        {
            id: 'download.bgmon',
            title: 'Background Monitor',
            href: 'firefly/download.html#bgmon',
        },
        {
            id: 'basics.bgmon',
            title: 'Background Monitor',
            href: 'firefly/download.html#bgmon',
            hidden: true,
        },
        {
            id: 'basics.bgJobInfo',
            title: 'Background Job Info',
            href: 'firefly/download.html#bgmon',
            hidden: true,
        },
    ]
};

const toc_images = {
    id: 'images',
    title: 'Images',
    href: 'firefly/images.html',
    items: [
        {
            id: 'basics.three-color',
            title: 'Making 3-color Images',
            href: 'firefly/images.html#3-color',
            hidden: true,
        },
        {
            id: 'basics.hips',
            title: 'HiPS Images',
            href: 'firefly/images.html#hips',
            hidden: true,
        },
        {
            id: 'basics.searching',
            title: 'Loading Images',
            href: 'firefly/images.html#searching',
            hidden: true,
        },
        {
            id: 'images.loading',
            title: 'Loading Images',
            href: 'firefly/images.html#searching',
        },
        {
            id: 'images.three-color',
            title: 'Making 3-color Images',
            href: 'firefly/images.html#3-color',
        },
        {
            id: 'images.hips',
            title: 'HiPS Images: Information',
            href: 'firefly/images.html#hips',
        },
        {
            id: 'images.hipssearch',
            title: 'Searching for HiPS Images',
            href: 'firefly/images.html#hipssearch',
        },
        {
            id: 'images.adding',
            title: 'Adding new Images',
            href: 'firefly/images.html#adding',
        },
        {
            id: 'images.coverage',
            title: 'Coverage Image',
            href: 'firefly/images.html#coverage',
        },
        {
            id: 'images.upperleft',
            title: 'Upper Left HiPS menus',
            href: 'firefly/images.html#upperleft',
        },
    ]
};

const toc_visualization = {
    id: 'visualization',
    title: 'Visualization Tools',
    href: 'firefly/visualization.html',
    items: [
         {
            id: 'visualization.imageoptions',
            title: 'Image Toolbar',
            href: 'firefly/visualization.html#toolbar',
            hidden: true,
        },
        {
            id: 'visualization.fitsDownloadOptions',
            title: 'Save Image',
            href: 'firefly/visualization.html#fitsDownloadOptions',
            hidden: true,
        },
        {
            id: 'visualization.saveimage',
            title: 'Save Image',
            href: 'firefly/visualization.html#saveimage',
            hidden: true,
        },
        {
            id: 'visualization.zoomin',
            title: 'zoomin',
            href: 'firefly/visualization.html#zoomin',
            hidden: true,
        },
        {
            id: 'visualization.rotate',
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
            id: 'visualization.layerPanel',
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
            id: 'visualize.ds9.upload',
            title: 'ds9 Regions',
            href: 'firefly/visualization.html#ds9regions',
            hidden: true,
        },
        {
            id: 'visualization.colortable',
            title: 'Color Table',
            href: 'firefly/visualization.html#colortable',
            hidden: true,
        },
        {
            id: 'visualization.advanceColorPanel',
            title: 'Color Table',
            href: 'firefly/visualization.html#colortable',
            hidden: true,
        },
        {
            id: 'visualization.colorpicker',
            title: 'Color Picker',
            href: 'firefly/visualization.html#colorpicker',
            hidden: true,
        },
        {
            id: 'visualization.modifyColorStretchSingleBand',
            title: 'Color Stretches',
            href: 'firefly/visualization.html#stretches',
            hidden: true,
        },
        {
            id: 'visualization.modifyColorStretch3C',
            title: 'Color Stretches',
            href: 'firefly/visualization.html#stretches',
            hidden: true,
        },
        {
            id: 'visualization.symbolpicker',
            title: 'Symbol Picker',
            href: 'firefly/visualization.html#symbolpicker',
            hidden: true,
        },
        {
            id: 'visualization.fitsViewer',
            title: 'The FITS/HiPS Viewer',
            href: 'firefly/visualization.html#fitsViewer',
        },
        {
            id: 'visualization.imageinfo',
            title: 'Image Information',
            href: 'firefly/visualization.html#imageinfo',
        },
        {
            id: 'visualization.breakingout',
            title: 'Breaking Out of the Pane',
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
            id: 'visualization.toolbar',
            title: 'Image Toolbar',
            href: 'firefly/visualization.html#toolbar',
        },
        {
            id: 'visualization.stretches',
            title: 'Color Stretches',
            href: 'firefly/visualization.html#stretches',
        },
        {
            id: 'visualization.layers',
            title: 'Image Layers',
            href: 'firefly/visualization.html#layers',
        },
        {
            id: 'visualization.wcs',
            title: 'WCS Alignment',
            href: 'firefly/visualization.html#wcs',
        },
        {
            id: 'visualization.extraction',
            title: 'Extraction Tools',
            href: 'firefly/visualization.html#extraction',
        },
        {
            id: 'visualization.selectregion',
            title: 'Region Selection',
            href: 'firefly/visualization.html#selectregion',
        },
        {
            id: 'visualization.hipsViewer',
            title: 'Specific HiPS Features',
            href: 'firefly/visualization.html#hipsViewer',
            hidden: true,
        },
        {
            id: 'visualization.footprints',
            title: 'Footprints',
            href: 'firefly/visualization.html#footprints',
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
            id: 'tables.options',
            title: 'Table Options',
            href: 'firefly/tables.html#tableoptions',
            hidden: true,
        },
        {
            id: 'tables.info',
            title: 'Table Info',
            href: 'firefly/tables.html#tableinfo',
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
            id: 'tables.addColumn',
            title: 'Adding Columns',
            href: 'firefly/tables.html#addColumn',
        },
        {
            id: 'tables.filters',
            title: 'Table Filters',
            href: 'firefly/tables.html#filters',
        },
        {
            id: 'tables.tableactions',
            title: 'Table Actions',
            href: 'firefly/tables.html#tableactions',
        },
        {
            id: 'tables.rowdetails',
            title: 'Row Details',
            href: 'firefly/tables.html#rowdetails',
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
            id: 'tables.navigation',
            title: 'Table Navigation',
            href: 'firefly/tables.html#navigation',
        },
    ]
};

const toc_catalogs = {
    id: 'catalogs',
    title: 'Catalogs',
    href: 'firefly/catalogs.html',
    items: [
        {
            id: 'catalogs.catalogs',
            title: 'IRSA Catalogs',
            href: 'firefly/catalogs.html#catalogs',
            hidden: true,
        },
        {
            id: 'catalogs.intro',
            title: 'Introduction',
            href: 'firefly/catalogs.html#intro',
        },
        {
            id: 'catalogs.irsacatalogs',
            title: 'IRSA Catalogs',
            href: 'firefly/catalogs.html#irsacatalogs',
        },
        {
            id: 'catalogs.interacting',
            title: 'Interacting with Catalogs',
            href: 'firefly/catalogs.html#interacting',
        },
        {
            id: 'catalogs.hier',
            title: 'Hierarchical Catalog Display',
            href: 'firefly/catalogs.html#hier',
        },
        {
            id: 'catalogs.details',
            title: 'Details Tab',
            href: 'firefly/catalogs.html#details',
        },
    ]
};
const toc_othersearches = {
    id: 'othersearches',
    title: 'Other Searches',
    href: 'firefly/othersearches.html',
    items: [
        {
            id: 'tapSearches.form',
            title: 'VO TAP Search Form',
            href: 'firefly/othersearches.html#tapSearches.form',
            hidden: true,
        },
        {
            id: 'tapSearches.tapService',
            title: 'Select TAP Service',
            href: 'firefly/othersearches.html#tapSearches.tapService',
            hidden: true,
        },
        {
            id: 'tapSearches.selectBy',
            title: 'Select Query Type',
            href: 'firefly/othersearches.html#tapSearches.selectBy',
            hidden: true,
        },
        {
            id: 'tapSearches.selectTable',
            title: 'Select Table',
            href: 'firefly/othersearches.html#tapSearches.selectTable',
            hidden: true,
        },
        {
            id: 'tapSearches.constraints',
            title: 'Enter Constraints',
            href: 'firefly/othersearches.html#tapSearches.constraints',
            hidden: true,
        },
        {
            id: 'tapSearches.spatial',
            title: 'Spatial Constraints',
            href: 'firefly/othersearches.html#tapSearches.spatial',
            hidden: true,
        },
        {
            id: 'tapSearches.temporal',
            title: 'Temporal Constraints',
            href: 'firefly/othersearches.html#tapSearches.temporal',
            hidden: true,
        },
        {
            id: 'tapSearches.obsCore',
            title: 'Observation Type and Source',
            href: 'firefly/othersearches.html#tapSearches.obsCore',
            hidden: true,
        },
        {
            id: 'tapSearches.location',
            title: 'Location',
            href: 'firefly/othersearches.html#tapSearches.location',
            hidden: true,
        },
        {
            id: 'tapSearches.exposure',
            title: 'Timing',
            href: 'firefly/othersearches.html#tapSearches.exposure',
            hidden: true,
        },
        {
            id: 'tapSearches.wavelength',
            title: 'Spectral Coverage',
            href: 'firefly/othersearches.html#tapSearches.wavelength',
            hidden: true,
        },
        {
            id: 'tapSearches.adql',
            title: 'ADQL',
            href: 'firefly/othersearches.html#tapSearches.adql',
            hidden: true,
        },
        {
            id: 'catalogs.ned',
            title: 'NED Catalogs',
            href: 'firefly/othersearches.html#nedcatalogs',
            hidden: true,
        },
        {
            id: 'catalogs.nedcatalogs',
            title: 'NED Catalogs',
            href: 'firefly/othersearches.html#nedcatalogs',
            hidden: true,
        },
        {
            id: 'SearchRefinementTool',
            title: 'Interactive Target Refinement',
            href: 'firefly/othersearches.html#interactivetarget',
            hidden: true,
        },
        {
            id: 'othersearches.intro',
            title: 'Introduction',
            href: 'firefly/othersearches.html#intro',
        },
        {
            id: 'othersearches.interactivetarget',
            title: 'Interactive Target Refinement',
            href: 'firefly/othersearches.html#interactivetarget',
        },
        {
            id: 'othersearches.moreconstraints',
            title: 'VO TAP Constraints',
            href: 'firefly/othersearches.html#moreconstraints',
        },
        {
            id: 'othersearches.moreconstraints2',
            title: 'VO ObsCore Constraints',
            href: 'firefly/othersearches.html#moreconstraints2',
        },
        {
            id: 'othersearches.irsavotap',
            title: 'VO TAP Search',
            href: 'firefly/othersearches.html#irsavotap',
        },
        {
            id: 'othersearches.obscore',
            title: 'ObsCore Search',
            href: 'firefly/othersearches.html#obscore',
        },
        {
            id: 'othersearches.nedcatalogs',
            title: 'NED Objects',
            href: 'firefly/othersearches.html#nedcatalogs',
        },
        {
            id: 'othersearches.voscs',
            title: 'VO SCS',
            href: 'firefly/othersearches.html#voscs',
        },
        {
            id: 'hips.VisualSelection',
            title: 'VO TAP Search',
            href: 'firefly/othersearches.html#hips.visualselection',
            hidden: true,
        },
        {
            id: 'catalogs.vo',
            title: 'VO SCS Search',
            href: 'firefly/othersearches.html#voscs',
            hidden: true,
        },
        {
            id: 'catalogs.voscs',
            title: 'VO SCS Search',
            href: 'firefly/othersearches.html#voscs',
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
            id: 'plots.navigation',
            title: 'Plot Navigation',
            href: 'firefly/plots.html#navigation'
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
            href: 'firefly/plots.html#saving',
            hidden: true,
        },
        {
            id: 'charts.saving',
            title: 'Saving Plots',
            href: 'firefly/plots.html#saving',
            hidden: true,
        },
        {
            id: 'charts.save',
            title: 'Saving Plots',
            href: 'firefly/plots.html#saving',
            hidden: true,
        },
        {
            id: 'plots.filter',
            title: 'Filtering from Plots',
            href: 'firefly/plots.html#filterfromplot',
            hidden: true,
        },
        {
            id: 'plots.overplotting',
            title: 'Overplotting',
            href: 'firefly/plots.html#overplotting',
        },
        {
            id: 'plots.adding',
            title: 'Adding Plots',
            href: 'firefly/plots.html#adding',
        },
        {
            id: 'plots.pinning',
            title: 'Pinning Plots',
            href: 'firefly/plots.html#pinning',
        },
        {
            id: 'chartarea.info',
            title: 'Pinning Plots',
            href: 'firefly/plots.html#pinning',
            hidden: true,
        },
        {
            id: 'plots.example',
            title: 'Example Plots',
            href: 'firefly/plots.html#example',
        },
    ]
};

export const toc_spectra = {
    id: 'spectra',
    title: 'Spectra',
    href: 'firefly/spectra.html',
    items: [
        {
            id: 'spectra.loading',
            title: 'Loading Spectra',
            href: 'firefly/spectra.html#loading',
        },
        {
            id: 'spectra.extracting',
            title: 'Extracting Spectra',
            href: 'firefly/spectra.html#extracting',
        },
        {
            id: 'spectra.plotting',
            title: 'Plotting Spectra',
            href: 'firefly/spectra.html#plotting',
        },
        {
            id: 'spectra.redshifting',
            title: 'Redshifting Spectra',
            href: 'firefly/spectra.html#redshifting',
        },
        {
            id: 'spectra.overplotting',
            title: 'Overplotting Spectra',
            href: 'firefly/spectra.html#overplotting',
        },
        {
            id: 'spectra.combining',
            title: 'Combining Spectra',
            href: 'firefly/spectra.html#combining',
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
    toc_overview,
    toc_images,
    toc_visualization,
    toc_tables,
    toc_catalogs,
    toc_othersearches,
    toc_plots,
    toc_spectra,
    toc_download,
    toc_user,
    toc_privacy
];
