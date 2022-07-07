import Component from '@ember/component';
import {
  not,
  notEmpty,
  and,
  or,
  readOnly,
  alias,
} from '@ember/object/computed';
import { defineProperty } from '@ember/object';

export default Component.extend({
  id: '',
  text: '',
  minDate: false,
  maxDate: false,
  readonly: true,
  isEditable: true,

  validation: null,
  showValidations: false,
  didValidate: false,

  notValidating: not('validation.isValidating').readOnly(),
  hasContent: notEmpty('value').readOnly(),
  hasWarnings: notEmpty('validation.warnings').readOnly(),
  isValid: and('hasContent', 'validation.isTruelyValid').readOnly(),
  shouldDisplayValidations: or(
    'showValidations',
    'didValidate',
    'hasContent'
  ).readOnly(),
  showErrorClass: and(
    'notValidating',
    'showErrorMessage',
    'hasContent',
    'validation'
  ).readOnly(),
  showErrorMessage: and(
    'shouldDisplayValidations',
    'validation.isInvalid'
  ).readOnly(),
  showWarningMessage: and(
    'shouldDisplayValidations',
    'hasWarnings',
    'isValid'
  ).readOnly(),
  init() {
    this._super(...arguments);
    let valuePath = this.valuePath;
    defineProperty(
      this,
      'validation',
      readOnly(`model.validations.attrs.${valuePath}`)
    );
    defineProperty(this, 'value', alias(`model.${valuePath}`));
  },

  actions: {
    setCalendarValue(value) {
      let valuePath = this.valuePath;
      this.set(`model.${valuePath}`, value);
      let month = value.getMonth();
      month = month + 1;
      let dateTxt =
        (value.getDate() < 10 ? '0' : '') +
        value.getDate() +
        '-' +
        (month < 10 ? '0' : '') +
        month +
        '-' +
        value.getFullYear();
      this.set('text', dateTxt);
      this.$('#div-' + this.name).dropdown('hide');
    },
    onBackSpace(event) {
      if (event != null) {
        if (event.keyCode == 8) {
          this.set('model', '');
        }
      }
    },
  },
});
