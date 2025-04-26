import { test, expect } from '@playwright/test';
import { CallUsWidgetPage } from '../pages/CallUsWidgetPage';
import { CallWidgetSelectors } from '../selectors/callUsWidgetSelectors';
import { CallUsWidgetConstants } from '../constants/callUsWidgetConstants';

test.describe('Call Us Widget', () => {
  let widget: CallUsWidgetPage;

  test.beforeEach(async ({ page }) => {
    widget = new CallUsWidgetPage(page);
    await widget.goto(CallUsWidgetConstants.URLS.DEMO);
  });

  test('Opening and closing a form', async () => {
    await widget.openWidget();
    expect(await widget.isWidgetVisible()).toBeTruthy();
    expect(await widget.isVisible(CallWidgetSelectors.FIRST_NAME_INPUT)).toBeTruthy();
    expect(await widget.isVisible(CallWidgetSelectors.LAST_NAME_INPUT)).toBeTruthy();
    expect(await widget.isVisible(CallWidgetSelectors.PHONE_SELECT)).toBeTruthy();
    expect(await widget.isVisible(CallWidgetSelectors.PHONE_INPUT)).toBeTruthy();
    expect(await widget.isVisible(CallWidgetSelectors.SUBMIT_BUTTON)).toBeTruthy();

    await widget.closeWidget();
    expect(await widget.isWidgetVisible()).toBeFalsy();
  });

  test('Step-by-step testing of button activity and field behavior', async () => {
    await widget.openWidget();
    expect(await widget.isSubmitButtonEnabled()).toBeFalsy();

    await widget.fillFirstName(CallUsWidgetConstants.USER_DATA.FIRST_NAME);
    expect(await widget.isSubmitButtonEnabled()).toBeFalsy();

    await widget.fillLastName(CallUsWidgetConstants.USER_DATA.LAST_NAME);
    expect(await widget.isSubmitButtonEnabled()).toBeFalsy();

    await widget.fillPhone(CallUsWidgetConstants.USER_DATA.PHONE);
    expect(await widget.isSubmitButtonEnabled()).toBeTruthy();

    await widget.selectCountry('+1');
    expect(await widget.isSubmitButtonEnabled()).toBeFalsy();
  });

  test('Checking the link in the footer', async () => {
    await widget.openWidget();
    expect(await widget.isVisible(CallWidgetSelectors.FOOTER_LINK)).toBeTruthy();

    const href = await widget.getFooterLinkHref();
    expect(href).toBe(CallUsWidgetConstants.URLS.INTAKER);

    const target = await widget.getAttribute(CallWidgetSelectors.FOOTER_LINK, 'target');
    expect(target).toBe('_blank');
  });

  test('Should submit form and display success message with correct phone number', async () => {
    await widget.openWidget();
    await widget.fillForm({
      firstName: CallUsWidgetConstants.USER_DATA.FIRST_NAME,
      lastName: CallUsWidgetConstants.USER_DATA.LAST_NAME,
      phone: CallUsWidgetConstants.USER_DATA.PHONE,
    });
    await widget.submit();
    expect(await widget.waitForVisible(CallWidgetSelectors.SUCCESS_TITLE));
    expect(await widget.hasCorrectTitle(CallWidgetSelectors.SUCCESS_PHONE_NUMBER));
    expect(await widget.hasCorrectPhoneNumber(CallWidgetSelectors.SUCCESS_TITLE));

    await widget.closeWidget();
    expect(await widget.isWidgetVisible()).toBeFalsy();
  });
});
