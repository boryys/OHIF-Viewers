import './Header.css';

import { Link, withRouter } from 'react-router-dom';
import React, { Component } from 'react';

import { Dropdown } from 'react-viewerbase';
import { withTranslation } from 'react-i18next';
import './Header.css';
import OHIFLogo from '../OHIFLogo/OHIFLogo.js';
import PropTypes from 'prop-types';
// import { UserPreferencesModal } from 'react-viewerbase';
import { hotkeysManager } from './../../App.js';

class Header extends Component {
  static propTypes = {
    home: PropTypes.bool.isRequired,
    location: PropTypes.object.isRequired,
    children: PropTypes.node,
    t: PropTypes.func.isRequired,
  };

  static defaultProps = {
    home: true,
    children: OHIFLogo(),
  };

  // onSave: data => {
  //   const contextName = window.store.getState().commandContext.context;
  //   const preferences = cloneDeep(window.store.getState().preferences);
  //   preferences[contextName] = data;
  //   dispatch(setUserPreferences(preferences));
  //   dispatch(setUserPreferencesModalOpen(false));
  //   OHIF.hotkeysUtil.setHotkeys(data.hotKeysData);
  // },
  // onResetToDefaults: () => {
  //   dispatch(setUserPreferences());
  //   dispatch(setUserPreferencesModalOpen(false));
  //   OHIF.hotkeysUtil.setHotkeys();
  // },

  constructor(props) {
    super(props);
    this.state = { isUserPreferencesOpen: false };

    // const onClick = this.toggleUserPreferences.bind(this);

    this.loadOptions();
  }

  loadOptions() {
    const { t } = this.props;
    this.options = [
      // {
      //   title: t('Preferences'),
      //   icon: { name: 'user' },
      //   onClick: onClick,
      // },
      {
        title: t('About'),
        icon: {
          name: 'info',
        },
        link: 'http://ohif.org',
      },
    ];

    this.hotKeysData = hotkeysManager.hotkeyDefinitions;
  }

  toggleUserPreferences() {
    const isOpen = this.state.isUserPreferencesOpen;

    this.setState({
      isUserPreferencesOpen: !isOpen,
    });
  }

  onUserPreferencesSave({ windowLevelData, hotKeysData }) {
    // console.log(windowLevelData);
    // console.log(hotKeysData);
    // TODO: Update hotkeysManager
    // TODO: reset `this.hotKeysData`
  }

  render() {
    const { t } = this.props;
    return (
      <div className={`entry-header ${this.props.home ? 'header-big' : ''}`}>
        <div className="header-left-box">
          {this.props.location && this.props.location.studyLink && (
            <Link
              to={this.props.location.studyLink}
              className="header-btn header-viewerLink"
            >
              {t('Back to Viewer')}
            </Link>
          )}

          {this.props.children}

          {!this.props.home && (
            <Link
              className="header-btn header-studyListLinkSection"
              to={{
                pathname: '/',
                state: { studyLink: this.props.location.pathname },
              }}
            >
              {t('Study list')}
            </Link>
          )}
        </div>

        <div className="header-menu">
          <span className="research-use">{t('INVESTIGATIONAL USE ONLY')}</span>
          <Dropdown title={t('Options')} list={this.options} align="right" />
          {/* <ConnectedUserPreferencesModal /> */}
        </div>
      </div>
    );
  }
}

export default withTranslation('Header')(withRouter(Header));
