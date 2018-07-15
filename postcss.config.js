// postcss config with plugins used

const
    // autoprefixer=require('autoprefixer'), //unclear if still has value. turn on if still needed
    postcss_import=require("postcss-import"),
    postcss_nested=require("postcss-nested"),
    postcss_extend=require("postcss-extend"),
    postcss_calc=require("postcss-calc"),
    postcss_custom_properties=require("postcss-custom-properties"),
    postcss_custom_media=require("postcss-custom-media"),
    postcss_color_function=require("postcss-color-function")
    postcss_color_hex_alpha=require("postcss-color-hex-alpha"),
    postcss_selector_not=require("postcss-selector-not"),
    postcss_selector_matches=require("postcss-selector-matches"),
    postcss_media_minmax=require("postcss-media-minmax"),
    postcss_mixins=require('postcss-mixins'),
    postcss_custom_selectors=require('postcss-custom-selectors'); /*  use postcss-simple-vars */


module.exports = {
    plugins:[
        // autoprefixer({
        //     browsers:['>5%']
        // }),
        postcss_import(),
        postcss_mixins(),
        postcss_nested(),
        postcss_extend(),
        postcss_selector_not(),
        postcss_selector_matches(),
        postcss_calc(),
        postcss_media_minmax(),
        postcss_custom_properties({/* "preserve": true */}),
        postcss_custom_media(),
        postcss_custom_selectors(),
        postcss_color_function(),
        postcss_color_hex_alpha()
    ]
}
