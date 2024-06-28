import { mount } from '@vue/test-utils'
import { QJSelect } from '../../src/form-components/index.js'

describe('QJSelect', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(QJSelect, {
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
