import React from 'react'

import DatePicker from '.'

export default {
    title: 'Calendar/DatePicker',
    component: DatePicker,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
}

const Template = (args) => <DatePicker {...args} />

export const Default = Template.bind({})
Default.args = {}
Default.story = {
    parameters: {
        design: {
            type: 'figma',
            url:
                'https://www.figma.com/file/QbBWSSF5VZOy3YeHiyLCJz/Calendar?node-id=0%3A1',
        },
    },
}
