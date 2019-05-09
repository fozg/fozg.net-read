/**
 * https://github.com/react-ga/react-ga/issues/122#issuecomment-299692833
 */
import React from 'react';
import GoogleAnalytics from 'react-ga';

GoogleAnalytics.initialize('UA-131750478-1');
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};
const withTracker = (WrappedComponent, options = {}, data) => {
  if (process.env.NODE_ENV == 'development') {
    return WrappedComponent
  }

  const trackPage = page => {
    GoogleAnalytics.set({
      page,
      ...options,
    });
    GoogleAnalytics.pageview(page);
  };

  const HOC = class extends React.Component {
    componentDidMount() {
      const page = this.props.location.pathname;
      trackPage(page);
      scrollToTop();
    }

    componentWillReceiveProps(nextProps) {
      const currentPage = this.props.location.pathname;
      const nextPage = nextProps.location.pathname;

      if (currentPage !== nextPage) {
        trackPage(nextPage);
        scrollToTop();
      }
    }

    render() {
      return <WrappedComponent {...this.props} {...data} />;
    }
  };

  return HOC;
};


export default withTracker;