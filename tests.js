/* -*- Mode: Java; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */
/* Copyright 2012 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// simple and incomplete implementation of promises
function Promise() {}
Promise.prototype = {
  then: function (callback) {
    this.callback = callback;
    if ('result' in this) callback(this.result);
  },
  resolve: function (result) {
    if ('result' in this) return;
    this.result = result;
    if ('callback' in this) this.callback(result); 
  }
};

var isCanvasSupported = (function () {
  try {
    document.createElement('canvas').getContext('2d').fillStyle = '#FFFFFF';
    return true;
  } catch (e) {
    return false;
  }
})();

var tests = [
  {
    id: 'canvas',
    name: 'HTML canvas',
    run: function () {
      if (isCanvasSupported) {
        return { output: 'Success', emulated: '' };
      } else {
        return { output: 'Failed', emulated: 'No' };
      }
    },
    impact: 'Critical',
    area: 'Core'
  },
  {
    id: 'payments',
    name: 'mozPay API',
    run: function () {
      if ('mozPay' in navigator) {
        return { output: 'Success', emulated: '' };
      } else {
        return { output: 'Failed', emulated: 'No' };
      }
    },
    impact: 'Critical',
    area: 'Core'
  },
  {
    id: 'apps',
    name: 'mozApps API',
    run: function () {
      if ('mozApps' in navigator) {
        return { output: 'Success', emulated: '' };
      } else {
        return { output: 'Failed', emulated: 'No' };
      }
    },
    impact: 'Critical',
    area: 'Core'
  },
  {
    id: 'device orientation',
    name: 'device orientation',
    run: function () {
      if ('ondeviceorientation' in window) {
        return { output: 'Success', emulated: '' };
      } else {
        return { output: 'Failed', emulated: 'No' };
      }
    },
    impact: 'Critical',
    area: 'Core'
  },
  {
    id: 'alarm',
    name: 'alarm',
    run: function () {
      if ('alarm' in navigator) {
        return { output: 'Success', emulated: '' };
      } else {
        return { output: 'Failed', emulated: 'No' };
      }
    },
    impact: 'Critical',
    area: 'Core'
  },
  {
    id: 'backgroundservice',
    name: 'backgroundservice',
    run: function () {
      if ('backgroundservice' in navigator) {
        return { output: 'Success', emulated: '' };
      } else {
        return { output: 'Failed', emulated: 'No' };
      }
    },
    impact: 'Critical',
    area: 'Core'
  },
  {
    id: 'bluetooth',
    name: 'bluetooth',
    run: function () {
      if ('bluetooth' in navigator) {
        return { output: 'Success', emulated: '' };
      } else {
        return { output: 'Failed', emulated: 'No' };
      }
    },
    impact: 'Critical',
    area: 'Core'
  },
  {
    id: 'browser',
    name: 'browser',
    run: function () {
      if ('browser' in navigator) {
        return { output: 'Success', emulated: '' };
      } else {
        return { output: 'Failed', emulated: 'No' };
      }
    },
    impact: 'Critical',
    area: 'Core'
  },
  {
    id: 'camera',
    name: 'camera',
    run: function () {
      if ('camera' in navigator) {
        return { output: 'Success', emulated: '' };
      } else {
        return { output: 'Failed', emulated: 'No' };
      }
    },
    impact: 'Critical',
    area: 'Core'
  },
  {
    id: 'contacts',
    name: 'contacts',
    run: function () {
      if ('contacts' in navigator) {
        return { output: 'Success', emulated: '' };
      } else {
        return { output: 'Failed', emulated: 'No' };
      }
    },
    impact: 'Critical',
    area: 'Core'
  },
  {
    id: 'desktop-notification',
    name: 'desktop-notification',
    run: function () {
      if ('desktop-notification' in navigator) {
        return { output: 'Success', emulated: '' };
      } else {
        return { output: 'Failed', emulated: 'No' };
      }
    },
    impact: 'Critical',
    area: 'Core'
  },
  {
    id: 'device-storage',
    name: 'device-storage',
    run: function () {
      if ('getDeviceStorage' in navigator) {
        return { output: 'Success', emulated: '' };
      } else {
        return { output: 'Failed', emulated: 'No' };
      }
    },
    impact: 'Critical',
    area: 'Core'
  },
  {
    id: 'fmradio',
    name: 'fmradio',
    run: function () {
      if ('fmradio' in navigator) {
        return { output: 'Success', emulated: '' };
      } else {
        return { output: 'Failed', emulated: 'No' };
      }
    },
    impact: 'Critical',
    area: 'Core'
  },
  {
    id: 'geolocation',
    name: 'geolocation',
    run: function () {
      if ('geolocation' in navigator) {
        return { output: 'Success', emulated: '' };
      } else {
        return { output: 'Failed', emulated: 'No' };
      }
    },
    impact: 'Critical',
    area: 'Core'
  },
  {
    id: 'mobileconnection',
    name: 'mobileconnection',
    run: function () {
      if ('mobileconnection' in navigator) {
        return { output: 'Success', emulated: '' };
      } else {
        return { output: 'Failed', emulated: 'No' };
      }
    },
    impact: 'Critical',
    area: 'Core'
  },
  {
    id: 'power',
    name: 'power',
    run: function () {
      if ('power' in navigator) {
        return { output: 'Success', emulated: '' };
      } else {
        return { output: 'Failed', emulated: 'No' };
      }
    },
    impact: 'Critical',
    area: 'Core'
  },
  {
    id: 'push',
    name: 'push',
    run: function () {
      if ('push' in navigator) {
        return { output: 'Success', emulated: '' };
      } else {
        return { output: 'Failed', emulated: 'No' };
      }
    },
    impact: 'Critical',
    area: 'Core'
  },
  {
    id: 'settings',
    name: 'settings',
    run: function () {
      if ('settings' in navigator) {
        return { output: 'Success', emulated: '' };
      } else {
        return { output: 'Failed', emulated: 'No' };
      }
    },
    impact: 'Critical',
    area: 'Core'
  },
  {
    id: 'sms',
    name: 'sms',
    run: function () {
      if ('sms' in navigator) {
        return { output: 'Success', emulated: '' };
      } else {
        return { output: 'Failed', emulated: 'No' };
      }
    },
    impact: 'Critical',
    area: 'Core'
  },
  {
    id: 'storage',
    name: 'storage',
    run: function () {
      if (sessionStorage) {
        return { output: 'Success', emulated: '' };
      } else {
        return { output: 'Failed', emulated: 'No' };
      }
    },
    impact: 'Critical',
    area: 'Core'
  },
  {
    id: 'systemclock',
    name: 'systemclock',
    run: function () {
      if ('systemclock' in navigator) {
        return { output: 'Success', emulated: '' };
      } else {
        return { output: 'Failed', emulated: 'No' };
      }
    },
    impact: 'Critical',
    area: 'Core'
  },
  {
    id: 'network-http',
    name: 'network-http',
    run: function () {
      if ('network-http' in navigator) {
        return { output: 'Success', emulated: '' };
      } else {
        return { output: 'Failed', emulated: 'No' };
      }
    },
    impact: 'Critical',
    area: 'Core'
  },
  {
    id: 'network-tcp',
    name: 'network-tcp',
    run: function () {
      if ('network-tcp' in navigator) {
        return { output: 'Success', emulated: '' };
      } else {
        return { output: 'Failed', emulated: 'No' };
      }
    },
    impact: 'Critical',
    area: 'Core'
  },
  {
    id: 'telephony',
    name: 'telephony',
    run: function () {
      if ('mozTelephony' in navigator) {
        return { output: 'Success', emulated: '' };
      } else {
        return { output: 'Failed', emulated: 'No' };
      }
    },
    impact: 'Critical',
    area: 'Core'
  },
  {
    id: 'wake-lock-screen',
    name: 'wake-lock-screen',
    run: function () {
      if ('wake-lock-screen' in navigator) {
        return { output: 'Success', emulated: '' };
      } else {
        return { output: 'Failed', emulated: 'No' };
      }
    },
    impact: 'Critical',
    area: 'Core'
  },
  {
    id: 'webapps-manage',
    name: 'webapps-manage',
    run: function () {
      if ('mgmt' in navigator.mozApps) {
        return { output: 'Success', emulated: '' };
      } else {
        return { output: 'Failed', emulated: 'No' };
      }
    },
    impact: 'Critical',
    area: 'Core'
  },
  {
    id: 'wifi',
    name: 'wifi',
    run: function () {
      if ('wifi' in navigator) {
        return { output: 'Success', emulated: '' };
      } else {
        return { output: 'Failed', emulated: 'No' };
      }
    },
    impact: 'Critical',
    area: 'Core'
  }
];
