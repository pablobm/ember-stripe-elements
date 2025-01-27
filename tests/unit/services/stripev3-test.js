import { moduleFor, test } from 'ember-qunit';
import sinon from 'sinon';
import StripeMock from 'ember-stripe-elements/utils/stripe-mock';
import env from 'dummy/config/environment';

moduleFor('service:stripev3', 'Unit | Service | stripev3', {
  // Specify the other units that are required for this test.
  needs: ['config:environment'],
  beforeEach() {
    window.Stripe = StripeMock;

    this.stripe = this.subject({
      config: {
        mock: true,
        publishableKey: env.stripe.publishableKey
      }
    });
  }
});

test('makes Stripe.elements available on the service', function(assert) {
  assert.expect(1);

  let service = this.subject();
  let mockOptions = { locale: 'en' };

  let elements = sinon.stub(service, 'elements').callsFake(function(options) {
    assert.deepEqual(options, mockOptions, 'called with mock options');
  });

  elements(mockOptions);
  elements.restore();
});

test('makes Stripe.createToken available on the service', function(assert) {
  assert.expect(1);

  let service = this.subject();
  let mockOptions = { locale: 'en' };

  let createToken = sinon.stub(service, 'createToken').callsFake(function(options) {
    assert.deepEqual(options, mockOptions, 'called with mock options');
  });

  createToken(mockOptions);
  createToken.restore();
});

test('makes Stripe.createSource available on the service', function(assert) {
  assert.expect(1);

  let service = this.subject();
  let mockOptions = { locale: 'en' };

  let createSource = sinon.stub(service, 'createSource').callsFake(function(options) {
    assert.deepEqual(options, mockOptions, 'called with mock options');
  });

  createSource(mockOptions);
  createSource.restore();
});

test('makes Stripe.retrieveSource available on the service', function(assert) {
  assert.expect(1);

  let service = this.subject();
  let mockOptions = { locale: 'en' };

  let retrieveSource = sinon.stub(service, 'retrieveSource').callsFake(function(options) {
    assert.deepEqual(options, mockOptions, 'called with mock options');
  });

  retrieveSource(mockOptions);
  retrieveSource.restore();
});

test('makes Stripe.paymentRequest available on the service', function(assert) {
  assert.expect(1);

  let service = this.subject();
  let mockOptions = { locale: 'en' };

  let paymentRequest = sinon.stub(service, 'paymentRequest').callsFake(function(options) {
    assert.deepEqual(options, mockOptions, 'called with mock options');
  });

  paymentRequest(mockOptions);
  paymentRequest.restore();
});
