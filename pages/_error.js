import React from 'react'
import css from '../static/style/css/main.sass'
import HeadTag from '../components/head'

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  render() {
    return (
      <main className="error-root">
       <h1>{this.props.statusCode}</h1>
       <p>Ein Fehler ist aufgetreten!</p>
      </main>
    )
  }
}
