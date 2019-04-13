import React from 'react';
import GoogleMap from 'google-map-react';
import fetch from 'isomorphic-unfetch';

import Layout from '../../components/Layout';
import { withNamespaces } from '../../../i18n';
import { API_TRASHS, GMAP_API } from '../../constants/general';
import { Container, MyLocation } from './style';
import Trash from './blocks/Trash';

class Browse extends React.PureComponent {
  state = {
    currentLatLng: {
      lat: 0,
      lng: 0,
    },
  };

  static defaultProps = {
    center: {
      lat: 48.857409,
      lng: 2.353463,
    },
    zoom: 13,
  };

  static async getInitialProps() {
    const res = await fetch(API_TRASHS);
    const data = await res.json();

    const { records } = data;
    return {
      namespacesRequired: ['browse', 'header'],
      trashs: records,
    };
  }

  gmap = {
    key: GMAP_API,
    language: 'fr',
    region: 'fr',
  };

  componentDidMount(): void {
    this.mounted = true;
    this.intervalLocation = setInterval(this.getGeoLocation, 2000);
  }

  componentWillUnmount(): void {
    this.mounted = false;
    clearInterval(this.intervalLocation);
  }

  getGeoLocation = () => {
    if (!this.mounted) {
      return;
    }
    if (typeof navigator !== 'undefined' && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState(prevState => ({
          currentLatLng: {
            ...prevState.currentLatLng,
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
        }));
      });
    }
  };

  props: {
    t: Function,
    center?: {},
    zoom?: number,
    trashs: [],
  };

  render() {
    const { t, trashs } = this.props;
    const { currentLatLng } = this.state;

    return (
      <Layout title={t('search')}>
        <Container>
          <GoogleMap
            bootstrapURLKeys={this.gmap}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            {currentLatLng && (
              <MyLocation lat={currentLatLng.lat} lng={currentLatLng.lng}>
                <i className="fas fa-male" />
              </MyLocation>
            )}
            {trashs &&
              trashs.map((trash, index) => (
                <Trash
                  key={`${trash.recordId}${index}`}
                  lat={trash.fields.geo[0]}
                  lng={trash.fields.geo[1]}
                  trash={trash}
                />
              ))}
          </GoogleMap>
        </Container>
      </Layout>
    );
  }
}

export default withNamespaces('browse')(Browse);
