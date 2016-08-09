import React from 'react'
import ReactDOM from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import { Provider } from 'react-redux'
import store from './src/store'
import Routes from './src/routes'
import metadata from './src/metadata'

module.exports = (url, callback) => {
  match(
    {
      routes: Routes,
      location: url
    },
    (err, redirect, props) => {
      var component = ReactDOM.renderToString(
        <Provider store={store}>
          <RouterContext {...props}/>
        </Provider>
      )

      callback(`
        <!DOCTYPE HTML>
        <html>
          <head>
            <title>${metadata.title}</title>
            <meta name="keywords" content="${metadata.meta.name.keywords}" data-rdm>
            <meta name="description" content="${metadata.meta.name.description}" data-rdm>
            <meta name="twitter:title" content="${metadata.meta.name["twitter:title"]}" data-rdm>
            <meta name="twitter:description" content="${metadata.meta.name["twitter:description"]}" data-rdm>
            <meta name="twitter:image:src" content="${metadata.meta.name["twitter:image:src"]}" data-rdm>
            <meta property="og:title" content="${metadata.meta.property["og:title"]}" data-rdm>
            <meta property="og:description" content="${metadata.meta.property["og:description"]}" data-rdm>
            <meta property="og:image" content="${metadata.meta.property["og:image"]}" data-rdm>
            <meta property="og:author" content="${metadata.meta.property["og:author"]}" data-rdm>
            <link rel="stylesheet" href="/style.css"/>
            <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700" rel="stylesheet">
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet">
          </head>
          <body>
            <div id="root">
              <div>
                ${component}
              </div>
            </div>
            <script src="/bundle.js"></script>
          </body>
        </html>
        `)
    }
  )
}
