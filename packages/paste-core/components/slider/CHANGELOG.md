# @twilio-paste/slider

## 3.0.0

### Patch Changes

- [`7d155c53b`](https://github.com/twilio-labs/paste/commit/7d155c53b63e0ad6a9914aed6309f3703d371848) [#3488](https://github.com/twilio-labs/paste/pull/3488) Thanks [@nkrantz](https://github.com/nkrantz)! - [Slider] Add spacing between min and max range labels, wrap overflow content onto second line, and right-align max range label.

- Updated dependencies [[`b8d79200b`](https://github.com/twilio-labs/paste/commit/b8d79200b03d2bef7e0f2106ea1ab2bc6335bc85)]:
  - @twilio-paste/screen-reader-only@13.1.0

## 2.0.2

### Patch Changes

- [`80decbe21`](https://github.com/twilio-labs/paste/commit/80decbe21966080f987f4567b459b0eb5b36e150) [#3478](https://github.com/twilio-labs/paste/pull/3478) Thanks [@nkrantz](https://github.com/nkrantz)! - [Slider] Update designs to reflect generic Paste value bar design with min and max value labels below the visual bar.

## 2.0.1

### Patch Changes

- [`424fa78d5`](https://github.com/twilio-labs/paste/commit/424fa78d559b8820b6bd8f221652ce24540a3608) [#3435](https://github.com/twilio-labs/paste/pull/3435) Thanks [@TheSisb](https://github.com/TheSisb)! - [Slider] corrected a typo on the `aria-labelledby` prop

## 2.0.0

### Major Changes

- [`733709127`](https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603) [#3395](https://github.com/twilio-labs/paste/pull/3395) Thanks [@SiTaggart](https://github.com/SiTaggart)! - Modified the compile target of our JavaScript bundles from `node` to `browser` to minimize the risk of clashing with RequireJS. This is marked as a major out of an abundance of caution. You shouldn't need to do anything but we wanted you to be aware of the change on the off chance it has unintended consequences

### Patch Changes

- Updated dependencies [[`733709127`](https://github.com/twilio-labs/paste/commit/7337091278722531e0b7498163be96857c889603)]:
  - @twilio-paste/uid-library@2.0.0
  - @twilio-paste/color-contrast-utils@5.0.0
  - @twilio-paste/screen-reader-only@13.0.0
  - @twilio-paste/box@10.0.0
  - @twilio-paste/customization@8.0.0
  - @twilio-paste/design-tokens@10.0.0
  - @twilio-paste/icons@12.0.0
  - @twilio-paste/animation-library@2.0.0
  - @twilio-paste/react-spectrum-library@2.0.0
  - @twilio-paste/styling-library@3.0.0
  - @twilio-paste/style-props@9.0.0
  - @twilio-paste/theme@11.0.0
  - @twilio-paste/types@6.0.0
  - @twilio-paste/utils@5.0.0

## 1.0.0

### Major Changes

- [`54afe1ce8`](https://github.com/twilio-labs/paste/commit/54afe1ce83d5bf27a83c3db802953f4fe53f0cd6) [#3378](https://github.com/twilio-labs/paste/pull/3378) Thanks [@TheSisb](https://github.com/TheSisb)! - [Slider] add new Slider package. A Slider is a draggable input that allows a user to select an imprecise numerical value within a range.

### Minor Changes

- [`6b42044d7`](https://github.com/twilio-labs/paste/commit/6b42044d7d4208df6af4c21ef325489fa9112121) [#3384](https://github.com/twilio-labs/paste/pull/3384) Thanks [@TheSisb](https://github.com/TheSisb)! - [Slider] allow passing `aria-labeledby` prop

### Patch Changes

- Updated dependencies [[`c4a70d95b`](https://github.com/twilio-labs/paste/commit/c4a70d95bf8d61649e5fb3cb9b67148438d27662)]:
  - @twilio-paste/react-spectrum-library@1.0.0
