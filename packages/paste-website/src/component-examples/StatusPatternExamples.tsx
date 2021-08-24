import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {Stack} from '@twilio-paste/stack';
import {ProcessDisabledIcon} from '@twilio-paste/icons/esm/ProcessDisabledIcon';
import {ProcessDraftIcon} from '@twilio-paste/icons/esm/ProcessDraftIcon';
import {ProcessErrorIcon} from '@twilio-paste/icons/esm/ProcessErrorIcon';
import {ProcessInProgressIcon} from '@twilio-paste/icons/esm/ProcessInProgressIcon';
import {ProcessNeutralIcon} from '@twilio-paste/icons/esm/ProcessNeutralIcon';
import {ProcessSuccessIcon} from '@twilio-paste/icons/esm/ProcessSuccessIcon';
import {ProcessWarningIcon} from '@twilio-paste/icons/esm/ProcessWarningIcon';
import React from 'react';

export const ProcessError: React.FC = () => {
  return (
    <Box color="colorTextIconError">
      <ProcessErrorIcon decorative={false} title="Error" />
    </Box>
  );
};

export const ProcessWarning: React.FC = () => {
  return (
    <Box color="colorTextIconWarning">
      <ProcessWarningIcon decorative={false} title="Warning" />
    </Box>
  );
};

export const ProcessSuccess: React.FC = () => {
  return (
    <Box color="colorTextIconSuccess">
      <ProcessSuccessIcon decorative={false} title="Success" />
    </Box>
  );
};

export const ProcessNeutral: React.FC = () => {
  return (
    <Box color="colorTextIconNeutral">
      <ProcessNeutralIcon decorative={false} title="Neutral" />
    </Box>
  );
};

export const ProcessInProgress: React.FC = () => {
  return (
    <Box color="colorTextIconNeutral">
      <ProcessInProgressIcon decorative={false} title="In Progress" />
    </Box>
  );
};

export const ProcessDisabled: React.FC = () => {
  return (
    <Box color="colorTextIcon">
      <ProcessDisabledIcon decorative={false} title="Disabled" />
    </Box>
  );
};

export const ProcessDraft: React.FC = () => {
  return (
    <Box color="colorTextIcon">
      <ProcessDraftIcon decorative={false} title="Draft" />
    </Box>
  );
};

export const ConnectivityAvailable: React.FC = () => {
  return <Box borderRadius="borderRadiusCircle" size="sizeSquare30" backgroundColor="colorBackgroundAvailable" />;
};

export const ConnectivityBusy: React.FC = () => {
  return <Box borderRadius="borderRadiusCircle" size="sizeSquare30" backgroundColor="colorBackgroundBusy" />;
};

export const ConnectivityUnavailable: React.FC = () => {
  return <Box borderRadius="borderRadiusCircle" size="sizeSquare30" backgroundColor="colorBackgroundUnavailable" />;
};

export const ConnectivityOffline: React.FC = () => {
  return (
    <Box borderRadius="borderRadiusCircle" size="sizeSquare30" borderWidth="borderWidth10" borderColor="colorBorder" />
  );
};
export const processStatusExamples = () => {
  return (
    <Stack orientation="horizontal" spacing="space80">
      <Box display="flex">
        <ProcessDisabledIcon color="colorTextIcon" decorative={false} title="disabled" />
        <Text marginLeft="spacing30">Disabled</Text>
      </Box>
      <Box display="flex">
        <ProcessDraftIcon color="colorTextIcon" decorative={false} title="draft" />
        <Text>Draft</Text>
      </Box>
    </Stack>
  );
};
