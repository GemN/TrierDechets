import React from 'react';
import GoogleMap from 'google-map-react';
import fetch from 'isomorphic-unfetch';
import Chance from 'chance';

import Layout from '../../components/Layout';
import { withNamespaces } from '../../../i18n';
import { API_TRASHS, GMAP_API } from '../../constants/general';
import { Container, MyLocation, Buttons, ToggleButton } from './style';
import Trash from './blocks/Trash';
import getTrashs from '../../lib/getTrashs';

class Browse extends React.PureComponent {
  state = {
    currentLatLng: {
      lat: 0,
      lng: 0,
    },
    favs: false,
    active: null,
  };

  static defaultProps = {
    center: {
      lat: 48.857409,
      lng: 2.353463,
    },
    zoom: 13,
  };

  static async getInitialProps(context) {
    const res = await fetch(API_TRASHS);
    const data = await res.json();

    const { user } = await getTrashs(context.apolloClient);
    const { records } = data;
    const chance = new Chance();
    const mappedRecords = records.map(r => ({
      ...r,
      lat:
        r.fields.geo[0] +
        chance.floating({ min: -0.0001, max: 0.0001, fixed: 6 }),
      lng:
        r.fields.geo[1] +
        chance.floating({ min: -0.0001, max: 0.0001, fixed: 6 }),
    }));

    return {
      user,
      namespacesRequired: ['browse', 'header'],
      trashs: mappedRecords,
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

  showFavs = () => this.setState({ favs: true });

  showAll = () => this.setState({ favs: false });

  onClickTrash = trashId => {
    console.log(trashId);
    this.setState({ active: trashId });
  };

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

  filterTrashs = () => {
    const { trashs } = this.props;
    const { favs } = this.state;
    if (favs) {
      const { favTrashs } = this.props.user;
      const filteredTrashs = trashs.filter(
        t => favTrashs.indexOf(t.recordid) !== -1,
      );
      return filteredTrashs;
    }
    return trashs;
  };

  props: {
    t: Function,
    center?: {},
    user: {
      favTrashs: [],
    },
    zoom?: number,
    trashs: [],
  };

  render() {
    const { t, user } = this.props;
    const { currentLatLng, favs, active } = this.state;

    const showTrashs = this.filterTrashs();

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
            {showTrashs &&
              showTrashs.map(trash => (
                <Trash
                  isFav={
                    user &&
                    user.favTrashs &&
                    user.favTrashs.indexOf(trash.recordid) > -1
                  }
                  isActive={trash.recordid === active}
                  onClick={this.onClickTrash}
                  key={`${trash.recordid}`}
                  lat={trash.lat}
                  lng={trash.lng}
                  trash={trash}
                />
              ))}
          </GoogleMap>
          {user && (
            <Buttons>
              <ToggleButton active={!favs} onClick={this.showAll}>
                {t('all')}
              </ToggleButton>
              <ToggleButton active={favs} onClick={this.showFavs}>
                {t('favs')}
              </ToggleButton>
            </Buttons>
          )}
        </Container>
      </Layout>
    );
  }
}

export default withNamespaces('browse')(Browse);
