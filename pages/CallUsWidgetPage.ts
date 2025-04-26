import { BasePage } from './BasePage';
import { CallWidgetSelectors } from '../selectors/callUsWidgetSelectors';

export class CallUsWidgetPage extends BasePage {
  async openWidget(): Promise<this> {
    await this.click(CallWidgetSelectors.CALL_US_BUTTON);
    await this.waitForVisible(CallWidgetSelectors.WIDGET_SECOND_STEP);
    await this.page.waitForSelector(`${CallWidgetSelectors.COUNTRY_SELECT} option`, {
      state: 'attached',
      timeout: 5000,
    });
    return this;
  }

  async closeWidget(): Promise<this> {
    await this.click(CallWidgetSelectors.CLOSE_BUTTON);
    return this;
  }

  async fillFirstName(name: string): Promise<this> {
    await this.fill(CallWidgetSelectors.FIRST_NAME_INPUT, name);
    return this;
  }

  async fillLastName(name: string): Promise<this> {
    await this.fill(CallWidgetSelectors.LAST_NAME_INPUT, name);
    return this;
  }

  async selectCountry(code: string): Promise<this> {
    await this.selectOption(CallWidgetSelectors.PHONE_SELECT, code);
    return this;
  }

  async fillPhone(phone: string): Promise<this> {
    await this.fill(CallWidgetSelectors.PHONE_INPUT, phone);
    return this;
  }

  async fillForm({
    firstName,
    lastName,
    phone,
  }: {
    firstName: string;
    lastName: string;
    phone: string;
  }): Promise<this> {
    await this.fillFirstName(firstName);
    await this.fillLastName(lastName);
    await this.fillPhone(phone);
    return this;
  }

  async submit(): Promise<this> {
    await this.click(CallWidgetSelectors.SUBMIT_BUTTON);
    return this;
  }

  async isSubmitButtonEnabled(): Promise<boolean> {
    return this.isElementEnabled(
      CallWidgetSelectors.SUBMIT_BUTTON,
      CallWidgetSelectors.BUTTON_INVALID
    );
  }

  async getFooterLinkHref() {
    return this.getAttribute(CallWidgetSelectors.FOOTER_LINK, 'href');
  }

  async isWidgetVisible() {
    return this.isVisible(CallWidgetSelectors.TITLE_TOP);
  }

  async hasCorrectPhoneNumber(expectedPhoneNumber: string): Promise<boolean> {
    return this.hasText(CallWidgetSelectors.SUCCESS_PHONE_NUMBER, expectedPhoneNumber, true);
  }

  async hasCorrectTitle(expectedTittle: string): Promise<boolean> {
    return this.hasText(CallWidgetSelectors.SUCCESS_TITLE, expectedTittle, true);
  }
}
