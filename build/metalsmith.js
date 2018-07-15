//basic html generation

var Metalsmith = require('metalsmith');
// var drafts = require('metalsmith-drafts');
var metadata = require('metalsmith-metadata');
// var markdown = require('metalsmith-markdown');
var markdownit = require('metalsmith-markdownit');
var permalinks = require('metalsmith-permalinks');
var layouts = require('metalsmith-layouts');
var inPlace = require('metalsmith-in-place');
var collections = require('metalsmith-collections');
var watch = require('metalsmith-watch');
var nunjucks = require('nunjucks');
var nunjucksDate = require('nunjucks-date');
var metalsmith = Metalsmith(__dirname);
var tags              = require('metalsmith-tags');
var metalsmithPrism = require('metalsmith-prism'),  loadLanguages = require('prismjs/components/index');
loadLanguages(['php', 'python'])

var branch = require("metalsmith-branch");


//configure templating engine you'll use with defaults
//and filters
var nunjucksEnv = nunjucks
  .configure(
    './_layouts',
    {
    watch: true,
    autoescape: false, //prevent metalsmith-markdown results being escaped
    noCache: true,
    web: {
      useCache: false
    }
  });

  //nunjucks plugins
  var nunjucksDate = require('nunjucks-date');
  nunjucksDate.setDefaultFormat('MMMM Do, YYYY');
  nunjucksEnv.addFilter('date', nunjucksDate)
  nunjucksDate.setDefaultFormat('MMMM Do, YYYY');

  //global context object  . ex: {{ getContext().path }}
  nunjucksEnv.addGlobal('getContext', function() {
      return this.ctx;
  });

//metalsmith options
var options = {

};

// Metadata to be passed to templates
var metadata_opts = {
  navs: 'metadata/_navs.yaml'
};

//if running in developmement, additional
if (process.env.NODE_ENV === 'development'){
  metadata_opts.dev_env = 'metadata/_dev.yaml'
} else {
  metadata_opts.prod_env = 'metadata/_prod.yaml'
}

// Paege collections like all pages or all posts
var site_collections = {
  posts: {
    pattern: 'posts/*.md',
    sortBy: 'date',
    reverse: true
  }
};

// Run Metalsmith
metalsmith
  .source('../content' )
  .use( metadata( metadata_opts ) )
  .clean(false)
  .use(collections(site_collections))
  // .use(markdown())
  .use(markdownit({
    typographer: true,
    html: true,
    langPrefix: 'language-'
  }))
  .use(metalsmithPrism({
    lineNumbers: true,
    decode: true

  }))
  .use(permalinks({
    // original options would act as the keys of a `default` linkset,
    pattern: ':title',
    date: 'YYYY',

    // each linkset defines a match, and any other desired option
    linksets: [{
       match: { collection: 'posts' },
      //  pattern: 'posts/:title'
       pattern: 'blog/:date/:title',
       date: 'mmddyy'
    },{
       match: { collection: 'pages' },
       pattern: ':title'
    }]
    }))
    .use(tags({
      handle: 'tags', //frontmatter key
      path:'tag/:tag.html', //aggresgate pages
      layout: 'archives/tag.nunj',
      sortBy: 'date',
      reverse: true,
      skipMetadata: false,
      // Any options you want to pass to the [slug](https://github.com/dodo/node-slug) package.
      // slug: {mode: 'rfc3986'}
  }))
  // .use(inPlace({ //apply nunjucks for variable interpolation
  //     engine: 'nunjucks',
  //     directory: './_layouts'
  //   }))
  .use(layouts({
      engine: 'nunjucks',
      directory: '../_layouts',
      pattern: [
      '**',
      '!json-data/*',
      // Skip over the partials that were already processed
      '!partials/*',  '!partials/*/*'
    ]
  }))
  .destination('../dist')
  .use(
    watch({
      paths: {
        '${source}/**/*': true,
        '../_layouts/**/*': '**/*.nunj',
        '../content/**/*': '**/*.md'
      },
      livereload: false,
    })
  )
  .build(function (err, files) {
    if (err) {
      console.log('Error!');
      console.log(err);
      throw err;
    }
  });
