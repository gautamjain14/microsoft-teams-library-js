import React, { ReactElement } from 'react';
import './App.css';
import { core, appInitialization } from '@microsoft/teamsjs-app-sdk';
import AppInitializationAPIs from './components/AppInitialization';
import AuthenticationAPIs from './components/AuthenticationAPIs';
import CalendarAPIs from './components/CalendarAPIs';
import ChatAPIs from './components/privateApis/ChatAPIs';
import CoreAPIs from './components/CoreAPIs';
import LocationAPIs from './components/LocationAPIs';
import MediaAPIs from './components/MediaAPIs';
import NavigationAPIs from './components/NavigationAPIs';
import PrivateAPIs from './components/PrivateAPIs';
import DialogAPIs from './components/DialogAPIs';
import ConfigAPIs from './components/ConfigAPIs';
import TeamsCoreAPIs from './components/TeamsCoreAPIs';
import MailAPIs from './components/MailAPIs';
import NotificationAPIs from './components/privateApis/NotificationAPIs';
import MeetingAPIs from './components/MeetingAPIs';
import PeopleAPIs from './components/PeopleAPIs';
import FullTrustAPIs from './components/privateApis/FullTrustAPIs';

const urlParams = new URLSearchParams(window.location.search);

// This is added for custom initialization when app can be initialized based upon a trigger/click.
if (!urlParams.has('customInit') || !urlParams.get('customInit')) {
  core.initialize();
}

// for AppInitialization tests we need a way to stop the Test App from sending these
// we do it by adding appInitializationTest=true to query string
if (
  (urlParams.has('customInit') && urlParams.get('customInit')) ||
  (urlParams.has('appInitializationTest') && urlParams.get('appInitializationTest'))
) {
  console.info('Not calling appInitialization because part of App Initialization Test run');
} else {
  appInitialization.notifyAppLoaded();
  appInitialization.notifySuccess();
}

export const noHubSdkMsg = ' was called, but there was no response from the Hub SDK.';

const App = (): ReactElement => {
  return (
    <>
      <AppInitializationAPIs />
      <AuthenticationAPIs />
      <CalendarAPIs />
      <ChatAPIs />
      <ConfigAPIs />
      <CoreAPIs />
      <DialogAPIs />
      <FullTrustAPIs />
      <LocationAPIs />
      <MailAPIs />
      <MediaAPIs />
      <MeetingAPIs />
      <NavigationAPIs />
      <NotificationAPIs />
      <PeopleAPIs />
      <PrivateAPIs />
      <TeamsCoreAPIs />
    </>
  );
};

export default App;