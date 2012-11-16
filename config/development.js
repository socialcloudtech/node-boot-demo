exports.app = app = {
  title: 'node-boot',
  host: 'localhost',
  port: 8000,
  ssl: false,
  cluster: false
}

exports.logging = {
  // http://www.senchalabs.org/connect/middleware-logger.html
  express_format: '[:date] ":method :url HTTP/:http-version" :status :res[content-length] - :response-time ms ":referrer" :remote-addr'
}

//-- Uncomment below and configure once MongoDB available:
// exports.mongodb = {
//   host: 'localhost',
//   port: 27017,
//   dbname: 'changeme',
//   opts: {}
// }

//-- Uncomment below and configure if using Passport auth strategies:
// exports.passport = {
//   facebook_opts: {
//     callbackURL : '',
//     clientID: '',
//     clientSecret: ''
//   },
//   twitter_opts: {
//     callbackURL: '',
//     consumerKey: '',
//     consumerSecret: ''    
//   }
// }

//-- Uncomment below and configure once Redis available:
// exports.redis = {
//   session_secret: 'changeme',
//   session_opts: {
//     host: 'localhost',
//     port: 6379,
//     prefix: 'md_sess:'
//   }
// }