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
    <Box
      borderRadius="borderRadiusCircle"
      size="sizeSquare30"
      borderWidth="borderWidth20"
      borderColor="colorBorder"
      borderStyle="solid"
    />
  );
};

export const processStatusExamples = `
<Box display="flex" columnGap="space80" rowGap="space60" flexWrap="wrap">
  <Box display="flex">
    <ProcessErrorIcon color="colorTextIconError" decorative={false} title="error" />
    <Text marginLeft="space20">Error</Text>
  </Box>
  <Box display="flex">
    <ProcessWarningIcon color="colorTextIconWarning" decorative={false} title="warning" />
    <Text marginLeft="space20">Warning</Text>
  </Box>
  <Box display="flex">
    <ProcessSuccessIcon color="colorTextIconSucess" decorative={false} title="success" />
    <Text marginLeft="space20">Success</Text>
  </Box>
  <Box display="flex">
    <ProcessNeutralIcon color="colorTextIconNeutral" decorative={false} title="neutral" />
    <Text marginLeft="space20">Neutral</Text>
  </Box>
  <Box display="flex">
    <ProcessInProgressIcon color="colorTextIconNeutral" decorative={false} title="in progress" />
    <Text marginLeft="space20">In Progress</Text>
  </Box>
  <Box display="flex">
    <ProcessDisabledIcon color="colorTextIcon" decorative={false} title="disabled" />
    <Text marginLeft="space20">Disabled</Text>
  </Box>
  <Box display="flex">
    <ProcessDraftIcon color="colorTextIcon" decorative={false} title="draft" />
    <Text marginLeft="space20">Draft</Text>
  </Box>
</Box>
`.trim();

export const connectivityStatusExamples = `
<Box display="flex" columnGap="space80" rowGap="space60" flexWrap="wrap">
  <Box display="flex" alignItems="center">
    <Box borderRadius="borderRadiusCircle" size="sizeSquare30" backgroundColor="colorBackgroundAvailable" />
    <Text marginLeft="space30">Available</Text>
  </Box>
  <Box display="flex" alignItems="center">
    <Box borderRadius="borderRadiusCircle" size="sizeSquare30" backgroundColor="colorBackgroundBusy" />
    <Text marginLeft="space30">Busy</Text>
  </Box>
  <Box display="flex" alignItems="center">
    <Box borderRadius="borderRadiusCircle" size="sizeSquare30" backgroundColor="colorBackgroundUnavailable" />
    <Text marginLeft="space30">Unavailable</Text>
  </Box>
  <Box display="flex" alignItems="center">
    <Box
    borderRadius="borderRadiusCircle"
    borderWidth="borderWidth20"
    borderStyle="solid"
    borderColor="colorBorder"
    size="sizeSquare30"
    />
    <Text marginLeft="space30">Offline</Text>
  </Box>
</Box>
`.trim();

export const prefixSuffixTooltipExamples = `
<Box display="flex" columnGap="space80" rowGap="space60" flexWrap="wrap">
  <Box display="flex">
    <ProcessErrorIcon color="colorTextIconError" decorative={false} title="failed to process" />
    <Text marginLeft="space20">Failed to process</Text>
  </Box>
  <Box display="flex">
    <Text marginRight="space20">Failed to process</Text>
    <ProcessErrorIcon color="colorTextIconError" decorative={false} title="failed to process" />
  </Box>
  <Tooltip text="Failed to process" placement="right">
    <Button variant="reset">
      <ProcessErrorIcon
        color="colorTextIconError"
        decorative={false}
        title="Failed to process"
      />
    </Button>
  </Tooltip>
</Box>
`.trim();

export const tableExample = `
<>
  <Heading as="h2" variant="heading20">
    Exports
  </Heading>
  <Table>
    <THead>
      <Tr>
        <Th>Status</Th>
        <Th>Export name</Th>
      </Tr>
    </THead>
    <TBody>
      <Tr>
        <Td>
          <Box display="flex">
            <ProcessSuccessIcon color="colorTextIconSucess" decorative={false} title="success" />
            <Text as="p" marginLeft="space30">
              Successfully exported
            </Text>
          </Box>
          <Text as="p" color="colorTextWeak" marginLeft="space60">
            Tuesday, June 1, 2021
          </Text>
        </Td>
        <Td>
          <strong>Contacts who did not click</strong>
        </Td>
      </Tr>
      <Tr>
        <Td>
          <Box display="flex">
            <ProcessSuccessIcon color="colorTextIconSucess" decorative={false} title="success" />
            <Text as="p" marginLeft="space30">
              Successfully exported
            </Text>
          </Box>
          <Text as="p" color="colorTextWeak" marginLeft="space60">
            Tuesday, February 2, 2021
          </Text>
        </Td>
        <Td>
          <strong>All contacts</strong>
        </Td>
      </Tr>
    </TBody>
  </Table>
</>
`.trim();

export const tableWithPlainTextExample = `
<>
  <Heading as="h2" variant="heading20">
    Reboots
  </Heading>

  <Table>
    <THead>
      <Tr>
        <Th>Title</Th>
        <Th>Media</Th>
        <Th>Status</Th>
      </Tr>
    </THead>
    <TBody>
      <Tr>
        <Td>Bewitched</Td>
        <Td>Series</Td>
        <Td>
        <Box display="flex">
          <ProcessInProgressIcon color="colorTextIconNeutral" decorative={false} title="in progress" />
          <Text marginLeft="space20">In Progress</Text>
        </Box>
        </Td>
      </Tr>
      <Tr>
        <Td>Mulan</Td>
        <Td>Feature</Td>
        <Td>Released</Td>
      </Tr>
      <Tr>
        <Td>Little Women</Td>
        <Td>Feature</Td>
        <Td>Released</Td>
      </Tr>
    </TBody>
  </Table>
</>
`.trim();
