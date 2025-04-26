/**
 * Playwright Selectors
 *
 * Selectors for the "Request a call back" widget.
 */

export const CallWidgetSelectors = {
  // Input fields
  FIRST_NAME_INPUT: '#icw--call--input-first',
  LAST_NAME_INPUT: '#icw--call--input-last',
  PHONE_SELECT: '#icw--call--select',
  PHONE_INPUT: '#icw--call--input',

  // Selects
  COUNTRY_SELECT: '#icw--call--select',

  // Buttons
  CLOSE_BUTTON: '#icw--call--add--close',
  SUBMIT_BUTTON: '#icw--call--done--button',
  CALL_US_BUTTON: '#icw--call--button',

  //CSS
  BUTTON_INVALID: 'icw--call--done--button--invalid',

  // Titles
  TITLE_TOP: '.icw-call-add-title-top',

  // Widgets
  WIDGET_SECOND_STEP: '.icw--call--second--step',

  // Footer
  FOOTER: '.icw--call-now-footer',
  FOOTER_LINK: '#icw--call--add .icw--call-now-footer .footer-intaker-logo-black',

  // Call add container
  SUCCESS_TITLE: '.icw--call--done--title',
  SUCCESS_PHONE_NUMBER: '#icw--call--done--result',
};
