import React from 'react'

class MyApp extends React.Component {
	render() {
		const { Component, pageProps } = this.props
		return <Component {...pageProps} />
	}
}

export default MyApp
