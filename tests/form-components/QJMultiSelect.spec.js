// import { createApp } from 'vue';
// import { mount } from '@vue/test-utils';
// import QJSelect from '@/form-components/QJSelect.vue';
//
// describe('QJSelect', () => {
//   test('is a Vue instance', () => {
//     const app = createApp({});
//     const wrapper = mount(QJSelect, {
//       global: {
//         plugins: [app]
//       }
//     });
//     expect(wrapper.vm).toBeTruthy();
//   });
// });

import { mount } from '@vue/test-utils'
import {QJMultiSelect} from "../../src/form-components/index.js";

describe('QJMultiSelect', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(QJMultiSelect, {
      props: {
        options: [
          { id: 1, label: 'Option 1' },
          { id: 2, label: 'Option 2' },
          { id: 3, label: 'Option 3' },
        ],
        title: 'Select option'
      }
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
