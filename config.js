/**
 * Create and export configuration variables
 */
 var environments = {}
 // Staging Object (default)
 environments.staging = {
    'httpPort' : 3000,
    'httpsPort': 3001,
    'envName' : 'staging'
 }
 // Production Object
 environments.production = {
    'httpPort' : 5000,
    'httpsPort': 5001,
    'envName' : 'production'
 }
 // Determine which is passed as command line argument
 var currentEnvironment = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : ''
 // Check that the current environent is one that is defined above, if not, default to staging
 var environmentToExport = typeof(environments[currentEnvironment]) == 'object' ? environments[currentEnvironment] : environments.staging
 // Export the module
 module.exports = environmentToExport


